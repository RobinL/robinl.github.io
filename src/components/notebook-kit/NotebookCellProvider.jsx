import { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import * as Inputs from '@observablehq/inputs';
import { legacyRequire } from './legacy-require';
import { legacyHtml, legacySvg } from './legacy-template';
import { loadNotebook } from './notebooks';
import { runtimeCellNames } from './runtime-cell-names';

function makeBuiltins(library, container, legacySyntax, FileAttachment) {
  const generators = library.Generators();
  return {
    DOM: library.DOM,
    FileAttachment: FileAttachment ? () => FileAttachment : library.FileAttachment,
    Files: library.Files,
    Generators: library.Generators,
    Inputs: () => Inputs,
    Mutable: library.Mutable,
    Promises: library.Promises,
    d3: () => d3,
    html: legacySyntax ? () => legacyHtml : library.html,
    htl: library.htl,
    md: library.md,
    now: library.now,
    require: () => legacyRequire,
    svg: legacySyntax ? () => legacySvg : library.svg,
    tex: library.tex,
    topojson: library.topojson,
    vl: library.vl,
    width: () => generators.width(container),
  };
}

export default function NotebookCellProvider({ notebook, children, className = '' }) {
  const containerRef = useRef(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let runtime;
    let disposed = false;

    async function renderNotebook() {
      try {
        setError(null);
        const [{ NotebookRuntime, library }, definition] = await Promise.all([
          import('@observablehq/notebook-kit/runtime'),
          loadNotebook(notebook),
        ]);
        if (disposed || !containerRef.current) return;

        const targetsById = new Map(
          Array.from(containerRef.current.querySelectorAll('[data-notebook-cell-id]')).map(
            (element) => [Number(element.dataset.notebookCellId), element]
          )
        );
        const targetsByName = new Map(
          Array.from(containerRef.current.querySelectorAll('[data-notebook-cell-name]'))
            .filter((element) => element.dataset.notebookCellName)
            .map((element) => [element.dataset.notebookCellName, element])
        );

        const legacySyntax = definition.cells.some(
          (cell) => cell.mode === 'ojs' || cell.mode === 'observable'
        );
        runtime = new NotebookRuntime(
          makeBuiltins(
            library,
            containerRef.current,
            legacySyntax,
            definition.FileAttachment
          )
        );

        for (const cell of definition.cells) {
          const root =
            targetsById.get(cell.id) ??
            runtimeCellNames(cell)
              .map((name) => targetsByName.get(name))
              .find(Boolean);
          const state = {
            root: root ?? document.createElement('div'),
            expanded: [],
            variables: [],
          };

          // A Runtime variable with an observer is evaluated eagerly. Hidden
          // cells should instead run only when a mounted cell depends on them;
          // the no-op observer keeps their definitions lazy.
          runtime.define(state, cell, root ? undefined : () => null);
        }
      } catch (err) {
        if (!disposed) setError(err instanceof Error ? err : new Error(String(err)));
      }
    }

    renderNotebook();

    return () => {
      disposed = true;
      runtime?.runtime.dispose();
    };
  }, [notebook]);

  return (
    <div ref={containerRef} className={`observable-scope notebook-kit-scope ${className}`.trim()}>
      {error && <p className="observable-error">Notebook failed to load: {error.message}</p>}
      {children}
    </div>
  );
}
