// @vitest-environment jsdom

import { readdir, readFile } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { deserialize, transpile } from '@observablehq/notebook-kit';
import { NotebookRuntime } from '@observablehq/notebook-kit/runtime';
import { describe, expect, it } from 'vitest';
import { compileNotebook } from './vite-plugin';

async function notebookFiles(directory: string): Promise<string[]> {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = await Promise.all(
    entries.map((entry) => {
      const filename = join(directory, entry.name);
      return entry.isDirectory()
        ? notebookFiles(filename)
        : Promise.resolve(entry.name.endsWith('.notebook.html') ? [filename] : []);
    })
  );
  return files.flat();
}

async function importCompiledNotebook(html: string) {
  const source = compileNotebook(html);
  const url = `data:text/javascript;base64,${Buffer.from(source).toString('base64')}`;
  return (await import(url)).default;
}

async function valueWithin(main: { value(name: string): Promise<unknown> }, name: string) {
  return Promise.race([
    main.value(name),
    new Promise((_, reject) => setTimeout(() => reject(new Error(`Timed out reading ${name}`)), 500)),
  ]);
}

describe('compileNotebook', () => {
  it('compiles standard notebook cells into an ESM definition module', () => {
    const module = compileNotebook(`<!doctype html>
      <notebook>
        <title>Example</title>
        <script id="1" type="module">
          import * as Inputs from "@observablehq/inputs";
          const value = view(Inputs.range([0, 10]));
        </script>
        <script id="2" type="module">value * 2</script>
      </notebook>`);

    expect(module).toContain('title: "Example"');
    expect(module).toContain('id: 1');
    expect(module).toContain('inputs: ["view"]');
    expect(module).toContain('outputs: ["Inputs","value"]');
    expect(module).toContain('import("@observablehq/inputs")');
    expect(module).not.toContain('cdn.jsdelivr.net');
  });

  it('preserves native reactive view semantics', async () => {
    const defineNotebook = await importCompiledNotebook(`<!doctype html>
      <notebook>
        <script id="1" type="module">
          const choice = view(({value: 7, addEventListener() {}, removeEventListener() {}}));
        </script>
        <script id="2" type="module">
          const result = choice + 2;
        </script>
      </notebook>`);
    const runtime = new NotebookRuntime();
    for (const cell of defineNotebook.cells) {
      runtime.define(
        {root: document.createElement('div'), expanded: [], variables: []},
        cell
      );
    }

    await expect(valueWithin(runtime.main, 'choice')).resolves.toBe(7);
    await expect(valueWithin(runtime.main, 'result')).resolves.toBe(9);
    runtime.runtime.dispose();
  });

  it('rejects legacy Observable cells so compatibility syntax cannot return', () => {
    expect(() => compileNotebook(`<!doctype html>
      <notebook>
        <script id="1" type="application/vnd.observable.javascript">answer = 42</script>
      </notebook>`)).toThrow('must be migrated to a module cell');
  });

  it('emits local file attachments as Vite-managed asset imports', () => {
    const module = compileNotebook(`<!doctype html>
      <notebook>
        <script id="1" type="module">
          const data = FileAttachment("example.csv").csv();
        </script>
        <script id="2" type="module">
          const page = FileAttachment("example.html").text();
        </script>
      </notebook>`);

    expect(module).toContain('import __file0 from "./example.csv?url"');
    expect(module).toContain('import __file1Source from "./example.html?raw"');
    expect(module).toContain('URL.createObjectURL(new Blob([__file1Source]');
    expect(module).toContain('pathname.endsWith(`/\${file}`)');
    expect(module).toContain('FileAttachment: __resolveFileAttachment');
  });

  it('compiles every checked-in notebook cell', async () => {
    const files = await notebookFiles(join(process.cwd(), 'src/notebooks'));
    expect(files.length).toBeGreaterThanOrEqual(28);

    for (const filename of files) {
      const html = await readFile(filename, 'utf8');
      expect(() => compileNotebook(html), filename).not.toThrow();
    }
  });

  it('provides every named cell mounted by an MDX post', async () => {
    const registryFilename = join(process.cwd(), 'src/components/notebook-kit/notebooks.ts');
    const registry = await readFile(registryFilename, 'utf8');
    const sources = new Map(
      Array.from(
        registry.matchAll(
          /['"]([^'"]+)['"]\s*:\s*\(\)\s*=>\s*import\(\s*['"]([^'"]+\.notebook\.html)['"]\s*\)/gs
        ),
        (match) => [match[1], resolve(dirname(registryFilename), match[2])]
      )
    );
    expect(sources.size).toBe(28);

    const postsDirectory = join(process.cwd(), 'src/content/posts');
    for (const entry of await readdir(postsDirectory, { withFileTypes: true })) {
      if (!entry.isFile() || !entry.name.endsWith('.mdx')) continue;
      const post = await readFile(join(postsDirectory, entry.name), 'utf8');
      const notebookName = post.match(/notebook=['"]([^'"]+)['"]/)?.[1];
      if (!notebookName) continue;

      const namedCells = Array.from(post.matchAll(/cellName=['"]([^'"]+)['"]/g), (match) => match[1]);
      for (const list of post.matchAll(/(?:export\s+)?const\s+output_order\s*=\s*\[([\s\S]*?)\]/g)) {
        namedCells.push(...Array.from(list[1].matchAll(/['"]([^'"]+)['"]/g), (match) => match[1]));
      }
      for (const list of post.matchAll(/cells=\{\[([\s\S]*?)\]\}/g)) {
        namedCells.push(...Array.from(list[1].matchAll(/['"]([^'"]+)['"]/g), (match) => match[1]));
      }
      if (!namedCells.length) continue;

      const source = sources.get(notebookName);
      expect(source, `${entry.name}: ${notebookName}`).toBeDefined();
      const notebook = deserialize(await readFile(source!, 'utf8'), {
        parser: new DOMParser(),
      });
      const available = new Set<string>();
      for (const cell of notebook.cells) {
        const definition = transpile(cell, { resolveFiles: true });
        if (definition.output) {
          const output = definition.output.replace(/^viewof\$/, 'viewof ');
          available.add(output);
          if (definition.autoview) available.add(output.slice('viewof '.length));
        }
        for (const output of definition.outputs ?? []) available.add(output);
      }

      for (const cellName of namedCells) {
        expect(available.has(cellName), `${entry.name}: missing ${cellName}`).toBe(true);
      }
    }
  });
});
