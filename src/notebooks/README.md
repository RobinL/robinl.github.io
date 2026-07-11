# Local Observable notebooks

Notebook source lives here as standard Observable Notebook Kit HTML. Astro's Vite pipeline
compiles each `.notebook.html` import on demand with Notebook Kit's `deserialize` and
`transpile` functions; no generated notebook package is committed.

All 28 notebook-backed posts use this path. Six are native Notebook 2.0 notebooks with thin cells
and ordinary TypeScript modules under `src/lib/notebooks`: `energy-usage.notebook.html`,
`match-weight-calculator.notebook.html`, and the four Fellegi-Sunter notebooks backed by the shared
`src/lib/notebooks/record-linkage` library. The notebooks under `migrated/` were
reconstructed from the former Observable 1.0 packages. They use Notebook Kit's standard
`application/vnd.observable.javascript` migration cell type, including supported `viewof` and
`mutable` syntax. Their imported child notebooks are local `.notebook.html` files rather than
generated `define(runtime, observer)` packages.

Keep cells focused on reactivity and presentation. Put reusable logic in
`src/lib/notebooks`, import it from the notebook like normal application code, and cover it
with unit tests. New dependencies should likewise be normal package imports recorded in
`package.json`; the browser runtime exposes only a deliberate set of core Observable built-ins,
so Notebook Kit's optional recommended libraries are not available as implicit globals. For
compatibility with recovered cells, the shared adapter resolves D3, Inputs, and Vega Embed from
the Astro bundle and lazily loads a small number of explicitly versioned historical packages.
Do not introduce new unpinned `require(...)` calls.

Stable historical inputs are checked in beside the notebook that consumes them and referenced
with `FileAttachment`. Remote requests should be reserved for interactions whose purpose is to
show live data.

To add a notebook:

1. Create a uniquely named `.notebook.html` file with stable numeric cell IDs.
2. Add its dynamic import to `src/components/notebook-kit/notebooks.ts`.
3. Wrap the relevant post content in `NotebookCellProvider` and place a `NotebookCell` for
   each visible cell ID. `Notebook` is the convenience wrapper for an ordered list of named
   legacy cells. Cells execute lazily when a displayed cell depends on them.

The Vite plugin watches notebook source files, so saving a cell during `pnpm run dev` triggers
the normal Vite hot-update path. Production builds bundle explicit package imports; notebook
dependencies are not fetched from a CDN unless a recovered notebook deliberately requests one
of the pinned compatibility packages.
