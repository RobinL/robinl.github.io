import React, { useEffect, useRef, useState } from 'react';
import { Inspector, Runtime } from '@observablehq/runtime';
import { loadNotebook } from './notebooks';
import { makeObservableLibrary } from './runtime.js';

export default function ObservableCellProvider({ notebook, children, className = '' }) {
  const containerRef = useRef(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let runtime;
    let disposed = false;

    async function renderNotebook() {
      try {
        setError(null);
        const define = await loadNotebook(notebook);
        if (disposed || !containerRef.current) return;

        const targets = new Map(
          Array.from(containerRef.current.querySelectorAll('[data-observable-cell]')).map((element) => [
            element.dataset.observableCell,
            element,
          ])
        );

        runtime = new Runtime(makeObservableLibrary(containerRef));
        runtime.module(define, (name) => {
          const target = targets.get(name);
          if (!target) return undefined;
          return new Inspector(target);
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
  }, [notebook]);

  return (
    <div ref={containerRef} className={`observable-scope ${className}`.trim()}>
      {error && <p className="observable-error">Observable notebook failed to load: {error.message}</p>}
      {children}
    </div>
  );
}
