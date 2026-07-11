import type { Definition } from '@observablehq/notebook-kit/runtime';

export type CompiledNotebookCell = Definition & {
  mode: string;
  files: string[];
};

export type CompiledNotebook = ((runtime: unknown, observer?: (name: string | null) => unknown) => unknown) & {
  title: string;
  FileAttachment?: (name: string) => unknown;
  cells: CompiledNotebookCell[];
};
