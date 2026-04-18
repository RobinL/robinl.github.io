We're migrating Robin Linacre's blog from the old Gatsby site cloned in
`robinl.github.io/` to a new Astro site. Treat the Gatsby project as the
reference for content, URLs, styling, RSS/sitemap behaviour, and interactive
notebook behaviour until Astro parity is proven.

The migration is mostly static content and MDX, but the hard part is preserving
Observable notebook posts. Prefer reproducible, vendored Observable tarballs
over remote notebook package URLs, and render notebooks through Astro/React
client islands so notebook modules stay out of SSR. The two notebook patterns to
preserve are ordered selected cells, e.g. `flights`, and cells interleaved with
prose, e.g. `fault_tolerant_trie`.

Dependency resolution has two layers. Normal Astro dependencies are installed in
the Astro site's `package.json` and bundled by Vite. Observable notebook
packages may also have their own notebook imports or npm dependencies baked into
the generated tarball/module; those are resolved through the notebook package as
client-side code, not through Astro frontmatter or server rendering. When
vendoring notebooks, keep the notebook tarball plus any required package
metadata together so the client island imports resolve reproducibly.
