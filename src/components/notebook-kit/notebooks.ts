import type { CompiledNotebook } from '../../lib/notebook-kit/types';

type NotebookModule = {
  default: CompiledNotebook;
};

type NotebookLoader = () => Promise<NotebookModule>;

const notebooks = {
  'match-weight-calculator': () =>
    import('../../notebooks/match-weight-calculator.notebook.html'),
} satisfies Record<string, NotebookLoader>;

export type NotebookName = keyof typeof notebooks;

export async function loadNotebook(name: string): Promise<CompiledNotebook> {
  const loader = notebooks[name as NotebookName];
  if (!loader) throw new Error(`Unknown Notebook Kit notebook: ${name}`);
  return (await loader()).default;
}
