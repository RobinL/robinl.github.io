// Observable Runtime 5's html and svg builtins predate HTL. Unlike HTL, they
// intentionally concatenate interpolated strings as markup while preserving
// interpolated DOM nodes. Reconstructed Observable 1.0 cells rely on this
// behaviour, so keep it in the legacy adapter rather than weakening native
// Notebook 2.0 notebooks' safe HTL templates.
function template(render, wrapper) {
  return function legacyTemplate(strings, ...values) {
    let source = strings[0];
    const parts = [];
    let fragment = null;
    let partIndex = -1;

    for (let index = 0; index < values.length; index += 1) {
      const value = values[index];
      if (value instanceof Node) {
        parts[++partIndex] = value;
        source += `<!--o:${partIndex}-->`;
      } else if (Array.isArray(value)) {
        for (const item of value) {
          if (item instanceof Node) {
            if (fragment === null) {
              parts[++partIndex] = fragment = document.createDocumentFragment();
              source += `<!--o:${partIndex}-->`;
            }
            fragment.appendChild(item);
          } else {
            fragment = null;
            source += item;
          }
        }
        fragment = null;
      } else {
        source += value;
      }
      source += strings[index + 1];
    }

    const root = render(source);
    if (++partIndex > 0) {
      const placeholders = new Array(partIndex);
      const walker = document.createTreeWalker(root, NodeFilter.SHOW_COMMENT);
      while (walker.nextNode()) {
        const node = walker.currentNode;
        if (/^o:\d+$/.test(node.nodeValue ?? '')) {
          placeholders[Number(node.nodeValue.slice(2))] = node;
        }
      }
      for (let index = 0; index < partIndex; index += 1) {
        const placeholder = placeholders[index];
        if (placeholder) placeholder.parentNode.replaceChild(parts[index], placeholder);
      }
    }

    if (root.childNodes.length === 1) return root.removeChild(root.firstChild);
    if (root.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
      const container = wrapper();
      container.appendChild(root);
      return container;
    }
    return root;
  };
}

export const legacyHtml = template(
  (source) => {
    const element = document.createElement('template');
    element.innerHTML = source.trim();
    return document.importNode(element.content, true);
  },
  () => document.createElement('span')
);

export const legacySvg = template(
  (source) => {
    const root = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    root.innerHTML = source.trim();
    return root;
  },
  () => document.createElementNS('http://www.w3.org/2000/svg', 'g')
);
