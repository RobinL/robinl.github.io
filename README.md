# Robin Linacre Astro Blog

This is the Astro version of the blog. Long-form posts live in `src/content/posts/`.

## Development

Install dependencies with `pnpm install`, then use:

```sh
pnpm run dev
pnpm run check
pnpm test
pnpm run build
```

## Observable notebooks

The 28 interactive notebook posts are local Observable Notebook Kit HTML files under
`src/notebooks`. Astro's Vite pipeline compiles them on demand, so editing a notebook or an
imported TypeScript module participates in normal dev-server live reload. There are no
Observable 1.0 generated packages or `file:` package dependencies in the active integration.

Two React client-island patterns are available:

- `Notebook` renders an ordered list of named cells.
- `NotebookCellProvider` and `NotebookCell` interleave cells with static MDX prose.

### Add a notebook

1. Create `src/notebooks/my-notebook.notebook.html` using the standard Notebook Kit format.
   Give every cell a stable numeric ID.
2. Put calculation, transformation, and chart-construction logic in ordinary TypeScript under
   `src/lib/notebooks`; keep notebook cells focused on inputs, reactivity, and display.
3. Import dependencies normally so they are recorded in `package.json` and bundled by Vite.
4. Add a literal dynamic import to `src/components/notebook-kit/notebooks.ts`.
5. Reference that registry key from the MDX post.

Render cells by ID when authoring a new Notebook 2.0 notebook:

```mdx
import NotebookCellProvider from '../../components/notebook-kit/NotebookCellProvider.jsx';
import NotebookCell from '../../components/notebook-kit/NotebookCell.jsx';

<NotebookCellProvider client:visible notebook="my-notebook">
  <NotebookCell cellId={1} />
  <NotebookCell cellId={3} />
</NotebookCellProvider>
```

The convenience wrapper for ordered named cells exists primarily for recovered notebooks:

```mdx
import Notebook from '../../components/notebook-kit/Notebook.jsx';

<Notebook
  client:visible
  notebook="my-notebook"
  cells={['title', 'viewof selected_year', 'chart']}
/>
```

### Dependencies and data

The shared runtime exposes a deliberate set of core Observable builtins. D3, Observable Inputs,
and Vega Embed resolve from the Astro dependency graph. Recovered notebooks may lazily request a
small number of explicitly versioned CDN packages for compatibility; new notebooks should use
normal ESM imports instead.

Put stable historical data beside its notebook and read it with `FileAttachment`. Keep a remote
request only when live data is part of the intended interaction.

See `src/notebooks/README.md` for the native-versus-recovered source conventions.

### Troubleshooting

If a notebook is unknown, check that the MDX `notebook` prop exactly matches a key in
`src/components/notebook-kit/notebooks.ts`. If a named recovered cell is blank, check the spelling
and retain the `viewof ` prefix for input cells. Notebook code is browser-only and must be
rendered with a client directive such as `client:visible`.

For a full verification run:

```sh
pnpm run check
pnpm test
pnpm run build
```
