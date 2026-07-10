import type { Definition } from '@observablehq/notebook-kit/runtime';

export type CompiledNotebookCell = Definition & {
  mode: string;
  files: string[];
};

export type CompiledNotebook = {
  title: string;
  cells: CompiledNotebookCell[];
};
