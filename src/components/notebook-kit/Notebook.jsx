import NotebookCell from './NotebookCell.jsx';
import NotebookCellProvider from './NotebookCellProvider.jsx';

export default function Notebook({ notebook, cells, className = '' }) {
  return (
    <NotebookCellProvider notebook={notebook} className={className}>
      {cells.map((cellName) => (
        <NotebookCell key={cellName} cellName={cellName} />
      ))}
    </NotebookCellProvider>
  );
}
