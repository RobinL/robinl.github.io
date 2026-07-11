export default function NotebookCell({ cellId, cellName, className = '', style }) {
  return (
    <div
      className={`observable-cell notebook-kit-cell ${className}`.trim()}
      data-notebook-cell-id={cellId}
      data-notebook-cell-name={cellName}
      style={style}
    />
  );
}
