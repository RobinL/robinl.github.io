# Robin Linacre Astro Blog

This is the Astro version of the blog. Long-form posts live in `src/content/posts/`.

## pnpm

Install dependencies with `pnpm install`. Use `pnpm run dev` instead of `npm run dev`, and `pnpm run build` instead of `npm run build`.

## Authoring A Post With An Observable Notebook

Observable notebooks are treated as vendored local packages. This keeps builds reproducible and avoids depending on a live Observable download during normal development or deployment.

There are two rendering patterns:

- `ObservableNotebook`: render selected notebook cells in order.
- `ObservableCellProvider` plus `ObservableCell`: interleave selected notebook cells with MDX prose.

## 1. Vendor The Observable Package

Choose a stable Observable notebook version. Observable package URLs have this shape:

```txt
https://api.observablehq.com/@robinl/<notebook-slug>@<version>.tgz?v=3
```

Download and unpack it into `vendor/observable/<notebook-slug>/`:

```sh
curl -L "https://api.observablehq.com/@robinl/my-new-notebook@123.tgz?v=3" -o /tmp/my-new-notebook.tgz
mkdir -p vendor/observable/my-new-notebook
tar -xzf /tmp/my-new-notebook.tgz -C vendor/observable/my-new-notebook --strip-components=1
```

If the notebook package already exists in the old Gatsby checkout under `robinl.github.io/node_modules/@robinl/<package-name>/`, copying that directory is also fine:

```sh
cp -R robinl.github.io/node_modules/@robinl/my-new-notebook vendor/observable/
```

Check the vendored package:

```sh
cat vendor/observable/my-new-notebook/package.json
```

It should have:

- `name`, usually `@robinl/my-new-notebook`
- `version`, matching the Observable package version
- `homepage`, pointing to the Observable notebook
- `main`, pointing to the generated notebook module

## 2. Add The Local Dependency

Add a `file:` dependency to `package.json`:

```json
"@robinl/my-new-notebook": "file:./vendor/observable/my-new-notebook"
```

Then install so `node_modules` and `pnpm-lock.yaml` know about it:

```sh
pnpm install
```

## 3. Register The Notebook

Add the notebook to `src/components/observable/notebooks.ts`.

Use the short notebook key you want to reference from MDX, and dynamically import the package:

```ts
export const notebooks = {
  // existing entries...
  'my-new-notebook': () => import('@robinl/my-new-notebook'),
} satisfies Record<string, NotebookLoader>;
```

The MDX `notebook="..."` value must exactly match this key.

## 4. Update The Manifest

Update `vendor/observable/manifest.json` with the notebook metadata:

```json
{
  "my-new-notebook": {
    "package": "@robinl/my-new-notebook",
    "version": "123.0.0",
    "source": "https://observablehq.com/@robinl/my-new-notebook",
    "entry": "abcdef123456@123.js"
  }
}
```

The manifest is documentation rather than runtime code, but keep it current. It is the inventory for vendored notebooks.

## 5. Create The MDX Post

Create a new file under `src/content/posts/`, for example:

```txt
src/content/posts/my_new_observable_post.mdx
```

Use normal content collection frontmatter:

```mdx
---
title: "My new Observable post"
description: "A short description for SEO and listing pages"
postDate: "2026-04-17"
category: "data"
codeUrl: "https://observablehq.com/@robinl/my-new-notebook"
pageWidth: "wide"
---
```

Useful fields:

- `category`: one of `data`, `probabilistic_linkage`, `energy`, `other`, `quotes_links`, `non_blog_post`
- `codeUrl`: if this is an Observable URL, the post meta link says “Live edit this notebook”
- `pageWidth`: optional, one of `prose`, `wide`, `full`
- `latestUpdate`: optional date
- `probLinkageCategory`: optional, for probabilistic linkage pages

Do not use a frontmatter key named `layout`; Astro MDX treats it specially.

## Pattern A: Render Cells In Order

Use this when the post is mostly a notebook embed, or when the notebook cells should appear one after another.

```mdx
---
title: "My new Observable post"
description: "A short description"
postDate: "2026-04-17"
category: "data"
codeUrl: "https://observablehq.com/@robinl/my-new-notebook"
pageWidth: "wide"
---

import ObservableNotebook from '../../components/observable/ObservableNotebook.jsx';

<ObservableNotebook
  client:visible
  notebook="my-new-notebook"
  cells={['title', 'blurb', 'chart']}
/>
```

The cell names must match the names exported by the Observable notebook. `viewof` cells should include the `viewof` prefix:

```mdx
cells={['viewof selected_year', 'chart']}
```

## Pattern B: Interleave Notebook Cells With Prose

Use this when prose should appear between notebook outputs.

```mdx
---
title: "My interleaved Observable post"
description: "A short description"
postDate: "2026-04-17"
category: "data"
codeUrl: "https://observablehq.com/@robinl/my-new-notebook"
---

import ObservableCellProvider from '../../components/observable/ObservableCellProvider.jsx';
import ObservableCell from '../../components/observable/ObservableCell.jsx';

# My interleaved Observable post

Some static MDX prose before the notebook.

<ObservableCellProvider client:visible notebook="my-new-notebook">

<ObservableCell cellName="viewof input_table" />

This prose is still static MDX, but it appears between Observable cells.

<ObservableCell cellName="chart" />

<ObservableCell cellName="summary_table" />

</ObservableCellProvider>
```

The provider creates one Observable runtime for the notebook. Each `ObservableCell` marks a DOM target for a named Observable cell.

## Choosing Cell Names

The cell name is the Observable runtime cell name:

```mdx
<ObservableCell cellName="chart" />
<ObservableCell cellName="viewof form_values" />
```

If a cell does not render:

- check the spelling exactly
- include `viewof` for input cells
- check that the notebook key exists in `notebooks.ts`
- check the browser console for notebook runtime errors

## Local Files Used By Notebooks

Observable package exports may include a `files/` directory. Keep that directory inside the vendored package. Do not move those files into `public/` unless you are deliberately changing the notebook code.

For images or JSON used directly by MDX, put them next to the post:

```txt
src/content/posts/my_new_observable_post.mdx
src/content/posts/my_new_observable_post/chart_data.json
src/content/posts/my_new_observable_post/example.png
```

Then import or reference them from MDX as usual.

## Verify The Post

Run:

```sh
pnpm run build
pnpm exec tsc --noEmit
```

For interactive notebooks, also run the dev server and click through the page:

```sh
pnpm run dev
```

Check:

- the route exists at `/<post_filename>/`
- static prose renders before hydration
- Observable cells hydrate when scrolled into view
- inputs render correctly for `viewof` cells
- charts or tables resize sensibly in the prose column

## Troubleshooting

`Unknown Observable notebook: my-new-notebook`

The notebook key is missing from `src/components/observable/notebooks.ts`, or the MDX `notebook` prop does not match it.

`Rollup failed to resolve import "@robinl/..."`

The package is not installed. Check `package.json`, then run `pnpm install`.

The page builds but a cell is blank

The cell name probably does not exist, or the notebook cell depends on another cell that throws in the browser. Check the browser console.

Astro tries to import `prose`, `wide`, or `full`

The post probably uses `layout:` in frontmatter. Use `pageWidth:` instead.

The notebook needs browser APIs

That is expected. Always render Observable components as client islands with `client:visible`.

## Related Files

- `src/components/observable/ObservableNotebook.jsx`
- `src/components/observable/ObservableCellProvider.jsx`
- `src/components/observable/ObservableCell.jsx`
- `src/components/observable/notebooks.ts`
- `vendor/observable/README.md`
- `vendor/observable/manifest.json`
