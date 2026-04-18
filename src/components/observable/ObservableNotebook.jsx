import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Inspector, Runtime } from '@observablehq/runtime';
import { loadNotebook } from './notebooks';
import { makeObservableLibrary } from './runtime.js';

export default function ObservableNotebook({ notebook, cells, className = '' }) {
  const containerRef = useRef(null);
  const cellRefs = useRef([]);
  const [error, setError] = useState(null);
  const cellList = useMemo(() => cells ?? [], [cells]);

  if (cellRefs.current.length !== cellList.length) {
    cellRefs.current = cellList.map((_, index) => cellRefs.current[index] ?? React.createRef());
  }

  useEffect(() => {
    let runtime;
    let disposed = false;

    async function renderNotebook() {
      try {
        setError(null);
        const define = await loadNotebook(notebook);
        if (disposed) return;

        runtime = new Runtime(makeObservableLibrary(containerRef));
        runtime.module(define, (name) => {
          const index = cellList.indexOf(name);
          if (index === -1) return undefined;
          return new Inspector(cellRefs.current[index].current);
        });
      } catch (err) {
        if (!disposed) setError(err);
      }
    }

    renderNotebook();

    return () => {
      disposed = true;
      runtime?.dispose();
    };
  }, [notebook, cellList]);

  return (
    <div ref={containerRef} className={`observable-notebook ${className}`.trim()}>
      {error && <p className="observable-error">Observable notebook failed to load: {error.message}</p>}
      {cellList.map((cellName, index) => (
        <div
          className="observable-cell"
          data-observable-cell={cellName}
          key={cellName}
          ref={cellRefs.current[index]}
        />
      ))}
    </div>
  );
}
