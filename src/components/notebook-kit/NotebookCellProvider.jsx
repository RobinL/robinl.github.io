import { useEffect, useRef, useState } from 'react';
import '@observablehq/inputs/dist/index.css';
import { loadNotebook } from './notebooks';

function makeBuiltins(library, container) {
  const generators = library.Generators();
  return {
    FileAttachment: library.FileAttachment,
    Generators: library.Generators,
    Mutable: library.Mutable,
    now: library.now,
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

        const targets = new Map(
          Array.from(containerRef.current.querySelectorAll('[data-notebook-cell-id]')).map(
            (element) => [Number(element.dataset.notebookCellId), element]
          )
        );

        runtime = new NotebookRuntime(makeBuiltins(library, containerRef.current));

        for (const cell of definition.cells) {
          const root = targets.get(cell.id) ?? document.createElement('div');
          runtime.define({ root, expanded: [], variables: [] }, cell);
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
