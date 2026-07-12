# Local Observable notebooks

Notebook source lives here as standard Observable Notebook Kit HTML. Astro's Vite pipeline
compiles each `.notebook.html` import on demand with Notebook Kit's `deserialize` and
`transpile` functions; no generated notebook package is committed.

All notebook-backed posts now use a single, local Notebook Kit source file in this directory.
Notebook cells are limited to presentation and reactive wiring; calculations, data preparation,
controls, and chart construction live in ordinary modules under `src/lib/notebooks`. Stable data
and HTML inputs used by those modules live under `src/notebooks/assets`. The recovered Observable
package graphs used during migration have been removed.

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
