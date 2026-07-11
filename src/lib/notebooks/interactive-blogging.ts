import {interpolateViridis} from 'd3';

export function createAnimatedBloggingTitle(document: Document = globalThis.document): HTMLHeadingElement {
  const text = 'Interactive blogging with Observable Notebooks and gatsby.js';
  const heading = document.createElement('h1');
  const spans = [...text].map((character, index) => {
    const span = document.createElement('span');
    span.textContent = character;
    span.style.color = interpolateViridis(index / text.length);
    span.dataset.value = String(index);
    span.dataset.ascending = 'true';
    return span;
  });
  heading.append(...spans);
  let visible = 0;
  spans.forEach((span) => { span.hidden = true; });
  const reveal = globalThis.setInterval(() => {
    if (visible < spans.length) {
      spans[visible++].hidden = false;
      return;
    }
    globalThis.clearInterval(reveal);
    globalThis.setInterval(() => {
      spans.forEach((span) => {
        let value = Number(span.dataset.value);
        const ascending = span.dataset.ascending === 'true';
        if (value === text.length || value === -1) span.dataset.ascending = String(!ascending);
        value += span.dataset.ascending === 'true' ? -1 : 1;
        span.dataset.value = String(value);
        span.style.color = interpolateViridis(value / text.length);
      });
    }, 100);
  }, 40);
  return heading;
}
