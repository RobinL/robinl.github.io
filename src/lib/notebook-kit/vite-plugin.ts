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
      files: ${serialize(Array.from(compiled.files ?? []))}
    }`;
  });

  return `${fileSupport}function defineNotebook(runtime, observer = () => null) {
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
  const notebook = deserialize(html, { parser });
  const legacyCell = notebook.cells.find((cell) => cell.mode === 'ojs');
  if (legacyCell) {
    throw new Error(`Legacy Observable cell ${legacyCell.id ?? '(without id)'} must be migrated to a module cell`);
  }
  return renderNotebookModule(notebook);
}

export function notebookKitCells(): Plugin {
  return {
    name: 'astro-notebook-kit-cells',
    enforce: 'pre',

    async resolveId(source, importer, options) {
      if (!source.endsWith(NOTEBOOK_SUFFIX)) return null;

      // Notebook HTML is compiled by this plugin when Vite loads the actual module.
      // During optimizeDeps scanning, externalise it: esbuild otherwise parses the
      // Observable import syntax as ordinary ESM and reports spurious missing exports,
      // causing dependency optimisation (and subsequently dev-server URLs) to go stale.
      // Vite supplies `scan` internally but does not declare it on the public type.
      if ((options as typeof options & { scan?: boolean }).scan) {
        return {id: source, external: true};
      }

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
