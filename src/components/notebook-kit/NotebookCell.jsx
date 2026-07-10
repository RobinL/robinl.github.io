export default function NotebookCell({ cellId, className = '', style }) {
  return (
    <div
      className={`observable-cell notebook-kit-cell ${className}`.trim()}
      data-notebook-cell-id={cellId}
      style={style}
    />
  );
}
