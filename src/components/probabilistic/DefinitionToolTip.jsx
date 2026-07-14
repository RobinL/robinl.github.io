import React from 'react';
import ReactMarkdown from 'react-markdown';

const definitionFiles = import.meta.glob('./definitions/*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
});

const definitions = Object.fromEntries(
  Object.entries(definitionFiles).map(([path, definition]) => [
    path.slice(path.lastIndexOf('/') + 1, -3),
    definition,
  ]),
);

const markdownComponents = {
  p: ({ children }) => <span className="definition-paragraph">{children}</span>,
  h1: ({ children }) => <span className="definition-paragraph">{children}</span>,
  h2: ({ children }) => <span className="definition-paragraph">{children}</span>,
  h3: ({ children }) => <span className="definition-paragraph">{children}</span>,
  h4: ({ children }) => <span className="definition-paragraph">{children}</span>,
  h5: ({ children }) => <span className="definition-paragraph">{children}</span>,
  h6: ({ children }) => <span className="definition-paragraph">{children}</span>,
  ul: ({ children }) => <span className="definition-list">{children}</span>,
  ol: ({ children }) => <span className="definition-list">{children}</span>,
  li: ({ children }) => <span className="definition-list-item">{children}</span>,
  blockquote: ({ children }) => <span className="definition-blockquote">{children}</span>,
  pre: ({ children }) => <span className="definition-preformatted">{children}</span>,
};

export default function DefinitionToolTip({ term, text }) {
  const definition = definitions[term] ?? 'Term not found';
  const displayText = text || term;

  return (
    <span className="definition-term" tabIndex={0}>
      <span className="definition-label">{displayText}</span>
      <span className="definition-tooltip" role="tooltip">
        <ReactMarkdown components={markdownComponents}>{definition}</ReactMarkdown>
      </span>
    </span>
  );
}

