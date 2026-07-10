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
  const cells = notebook.cells.map((cell) => {
    const compiled = transpile(cell);

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

  return `const notebook = {
    title: ${serialize(notebook.title)},
    cells: [${cells.join(',\n')}]
  };

export default notebook;
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
