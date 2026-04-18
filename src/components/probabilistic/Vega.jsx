import React, { useEffect, useRef, useState } from 'react';

export function VegaLite({ spec, className = '' }) {
  const ref = useRef(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;
    let view;

    async function renderChart() {
      try {
        setError(null);
        const { default: embed } = await import('vega-embed');
        if (cancelled || !ref.current) return;
        const result = await embed(ref.current, spec, { actions: false, renderer: 'svg' });
        view = result.view;
      } catch (err) {
        if (!cancelled) setError(err);
      }
    }

    renderChart();

    return () => {
      cancelled = true;
      view?.finalize();
    };
  }, [spec]);

  return (
    <div className={`vega-chart ${className}`.trim()}>
      {error && <p className="observable-error">Vega chart failed to load: {error.message}</p>}
      <div ref={ref} />
    </div>
  );
}

export function Vega(props) {
  return <VegaLite {...props} />;
}
