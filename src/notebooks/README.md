# Local Observable notebooks

Notebook source lives here as standard Observable Notebook Kit HTML. Astro's Vite pipeline
compiles each `.notebook.html` import on demand with Notebook Kit's `deserialize` and
`transpile` functions; no generated notebook package is committed.

Keep cells focused on reactivity and presentation. Put reusable logic in
`src/lib/notebooks`, import it from the notebook like normal application code, and cover it
with unit tests. Notebook dependencies must likewise be normal package imports recorded in
`package.json`; the browser runtime exposes only a small set of core Observable built-ins, so
Notebook Kit's optional recommended libraries are not available as implicit globals.

To add a notebook:

1. Create a uniquely named `.notebook.html` file with stable numeric cell IDs.
2. Add its dynamic import to `src/components/notebook-kit/notebooks.ts`.
3. Wrap the relevant post content in `NotebookCellProvider` and place a `NotebookCell` for
   each visible cell ID. Hidden cells still execute and can feed visible cells.

The Vite plugin watches notebook source files, so saving a cell during `pnpm run dev` triggers
the normal Vite hot-update path. Production builds bundle explicit package imports; notebook
dependencies are not fetched from a CDN unless a notebook deliberately imports a CDN URL.
