declare module '*.notebook.html' {
  import type { CompiledNotebook } from '../lib/notebook-kit/types';

  const notebook: CompiledNotebook;
  export default notebook;
}
