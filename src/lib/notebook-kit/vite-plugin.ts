import { readFile } from 'node:fs/promises';
import { deserialize, transpile, type Notebook } from '@observablehq/notebook-kit';
import { JSDOM } from 'jsdom';
import type { Plugin } from 'vite';

const NOTEBOOK_SUFFIX = '.notebook.html';
const COMPILED_QUERY = '?compiled-notebook';

const window = new JSDOM().window;

function serialize(value: unknown): string {
  return value === undefined ? 'undefined' : JSON.stringify(value);
}

function renderNotebookModule(notebook: Notebook): string {
  const definitions = notebook.cells.map((cell) => ({
    cell,
    compiled: transpile(cell, { resolveFiles: true }),
  }));
  const files = Array.from(
    new Set(definitions.flatMap(({ compiled }) => Array.from(compiled.files ?? [])))
  );
  const fileImports = files.map((file, index) =>
    file.endsWith('.html')
      ? `import __file${index}Source from ${JSON.stringify(`./${file}?raw`)};
const __file${index} = URL.createObjectURL(new Blob([__file${index}Source], {type: "text/html"}));`
      : `import __file${index} from ${JSON.stringify(`./${file}?url`)};`
  );
  const fileEntries = files.map(
    (file, index) => `[${JSON.stringify(file)}, __file${index}]`
  );
  const fileSupport = files.length
    ? `import {FileAttachment as __FileAttachment} from "@observablehq/notebook-kit/runtime";
${fileImports.join('\n')}

const __fileAttachments = new Map([${fileEntries.join(',')}]);
function __resolveFileAttachment(name) {
  const key = String(name);
  let url = __fileAttachments.get(key);
  if (!url) {
    const pathname = new URL(key, import.meta.url).pathname;
    for (const [file, candidate] of __fileAttachments) {
      if (pathname.endsWith(\`/\${file}\`)) {
        url = candidate;
        break;
      }
    }
  }
  if (!url) throw new Error(\`File not found: \${name}\`);
  return __FileAttachment(url);
}
`
    : '';

  const cells = definitions.map(({ cell, compiled }) => {

    return `{
      id: ${serialize(cell.id)},
      mode: ${serialize(cell.mode)},
      body: ${compiled.body},
      inputs: ${serialize(compiled.inputs)},
      outputs: ${serialize(compiled.outputs)},
      output: ${serialize(compiled.output)},
      display: ${cell.mode === 'js' || cell.mode === 'ts'},
      autodisplay: ${serialize(compiled.autodisplay)},
      autoview: ${serialize(compiled.autoview)},
      automutable: ${serialize(compiled.automutable)},
      files: ${serialize(Array.from(compiled.files ?? []))}
    }`;
  });

  return `${fileSupport}function observeMutable(initialize) {
  let resolve;
  let reject;
  let value;
  let stale = false;
  const dispose = initialize((next) => {
    value = next;
    if (resolve) {
      resolve(next);
      resolve = reject = undefined;
    } else {
      stale = true;
    }
  });
  return {
    async next() {
      return {
        done: false,
        value: await (stale
          ? ((stale = false), value)
          : new Promise((res, rej) => ((resolve = res), (reject = rej))))
      };
    },
    async return() {
      reject?.(new Error("Generator returned"));
      resolve = reject = undefined;
      dispose?.();
      return {done: true, value: undefined};
    },
    [Symbol.asyncIterator]() { return this; }
  };
}

function createMutable(value) {
  let change;
  return Object.defineProperty(observeMutable((notify) => {
    change = notify;
    if (value !== undefined) notify(value);
  }), "value", {
    get: () => value,
    set: (next) => ((value = next), change?.(value))
  });
}

function createMutator(value) {
  const mutable = createMutable(value);
  return [mutable, {
    get value() { return mutable.value; },
    set value(next) { mutable.value = next; }
  }];
}

function defineNotebook(runtime, observer = () => null) {
  const main = runtime.module();
  if (defineNotebook.FileAttachment) {
    main.variable().define("FileAttachment", [], () => defineNotebook.FileAttachment);
  }
  for (const definition of defineNotebook.cells) {
    const inputs = definition.inputs ?? [];
    const output = definition.output;
    if (definition.outputs?.length) {
      const cellName = \`cell \${definition.id}\`;
      main.variable(observer(null)).define(cellName, inputs, definition.body);
      for (const name of definition.outputs) {
        main.variable(true).define(name, [cellName], (outputs) => outputs[name]);
      }
    } else if (output) {
      if (definition.autoview) {
        const name = output.slice("viewof$".length);
        const viewName = \`viewof \${name}\`;
        main.variable(observer(viewName)).define(viewName, inputs, definition.body);
        main.variable(observer(name)).define(name, ["Generators", viewName], (Generators, value) => Generators.input(value));
      } else if (definition.automutable) {
        const name = output.slice("mutable ".length);
        const cellName = \`cell \${definition.id}\`;
        main.define(output, inputs, definition.body);
        main.define(cellName, [output], createMutator);
        main.variable(observer(name)).define(name, [cellName], ([mutable]) => mutable);
        main.variable(true).define(\`mutable$\${name}\`, [cellName], ([, mutator]) => mutator);
      } else {
        main.variable(observer(output)).define(output, inputs, definition.body);
      }
    } else {
      main.variable(observer(null)).define(inputs, definition.body);
    }
  }
  return main;
}

Object.assign(defineNotebook, {
    title: ${serialize(notebook.title)},
    FileAttachment: ${files.length ? '__resolveFileAttachment' : 'undefined'},
    cells: [${cells.join(',\n')}]
});

export default defineNotebook;
`;
}

export function compileNotebook(html: string): string {
  const parser = new window.DOMParser();
  return renderNotebookModule(deserialize(html, { parser }));
}

export function notebookKitCells(): Plugin {
  return {
    name: 'astro-notebook-kit-cells',
    enforce: 'pre',

    async resolveId(source, importer, options) {
      if (!source.endsWith(NOTEBOOK_SUFFIX)) return null;

      // Vite supplies this flag to plugin hooks during dependency scanning, but it is not
      // currently declared on the public ResolveIdHook options type.
      if ((options as typeof options & { scan?: boolean }).scan) return null;

      const resolved = await this.resolve(source, importer, { skipSelf: true });
      return resolved ? `${resolved.id}${COMPILED_QUERY}` : null;
    },

    async load(id) {
      if (!id.endsWith(COMPILED_QUERY)) return null;

      const filename = id.slice(0, -COMPILED_QUERY.length);
      this.addWatchFile(filename);
      return compileNotebook(await readFile(filename, 'utf8'));
    },

    handleHotUpdate({ file, server }) {
      if (!file.endsWith(NOTEBOOK_SUFFIX)) return;

      const compiledModule = server.moduleGraph.getModuleById(`${file}${COMPILED_QUERY}`);
      if (compiledModule) return [compiledModule];
    },
  };
}
