import { Library } from '@observablehq/runtime';

export function makeObservableLibrary(containerRef) {
  const stdlib = new Library();

  function width() {
    return stdlib.Generators.observe((notify) => {
      const element = containerRef.current;

      if (!element) {
        notify(640);
        return undefined;
      }

      let current = Math.max(320, Math.floor(element.clientWidth || 640));
      notify(current);

      const publish = (next) => {
        const rounded = Math.max(320, Math.floor(next || 640));
        if (rounded !== current) {
          current = rounded;
          notify(current);
        }
      };

      if ('ResizeObserver' in window) {
        const observer = new ResizeObserver(([entry]) => {
          publish(entry.contentRect.width);
        });
        observer.observe(element);
        return () => observer.disconnect();
      }

      const onResize = () => publish(element.clientWidth);
      window.addEventListener('resize', onResize);
      return () => window.removeEventListener('resize', onResize);
    });
  }

  return Object.assign({}, stdlib, { width });
}

