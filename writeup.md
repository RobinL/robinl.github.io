# Observable notebook migration: implementation review

> **Follow-up completed (12 July 2026):** The four notebooks identified below have now been
> converted from Observable JavaScript cells to native module cells. The compatibility notebooks,
> legacy require/template bridges, mutable shim, and eight compatibility-only dependencies were
> removed. The compiler now rejects legacy cells. Typecheck, tests, production build, and Chrome
> interaction checks of all four affected routes pass. The review below is retained as the record
> of the pre-cleanup assessment; the corresponding migration and compatibility action items are
> no longer outstanding.

## Overall assessment

I am happy with the broad architecture and with the current user-facing result. The migration has preserved the important behaviour of the old site while replacing generated, difficult-to-maintain Observable packages with local source, normal package management, Astro pages, and client-side notebook islands. The latest browser audit covered every notebook route and exercised the important reactive controls without finding console errors.

I am not entirely happy calling the work **fully complete**, however. Four notebooks still contain substantial Observable 1.0-style source, the compatibility layer is larger than the remaining use justifies, and CI does not currently run all the checks that gave us confidence locally. These are cleanup and maintainability issues rather than known visitor-facing breakages, but they matter because maintainability was a central aim of the original brief.

## What I like

### The architecture has a clear division of responsibility

Astro owns routes, page structure, prose, metadata, and static styling. React client islands mount notebook cells, keeping the Observable runtime out of server rendering. Notebook Kit provides reactivity without making the rest of the site behave like an Observable project.

This is a good fit for both notebook presentation patterns in the original brief:

- a selected, ordered set of notebook cells; and
- cells interleaved with prose in an Astro/MDX page.

The cell-name and cell-ID mounting mechanism makes both patterns explicit rather than relying on the layout of a generated notebook page.

### The implementation is reproducible

Notebook sources and assets live in the repository. Application dependencies are declared in `package.json` and locked with pnpm. Notebook Kit is pinned, and the custom Vite integration compiles the checked-in notebook source rather than downloading a changing remote notebook package at runtime.

This is a substantial improvement over depending on generated Observable tarballs or remote package URLs whose contents and dependency resolution are harder to inspect.

### Most business logic is now ordinary source code

The modules under `src/lib/notebooks` are the strongest part of the migration. Calculations, data preparation, controls, and charts can be read and tested without mentally executing a notebook dependency graph. The record-linkage and energy-usage code in particular now has useful shared abstractions rather than copies hidden in individual cells.

Local assets under `src/notebooks/assets` and the removal of recovered hashed output also make the repository much easier to understand.

### The compatibility work is pragmatic

The custom Notebook Kit/Vite adapter and the scoped legacy helpers solved real differences between Observable 1.0 exports and Notebook Kit. The implementation handles file attachments, mutable values, views, HTML/SVG templates, and hidden supporting cells while preserving reactive behaviour.

It is also good that compatibility decisions are made at notebook scope rather than by globally changing browser behaviour for the whole site.

### Verification went beyond a successful build

The source-level tests compile every checked-in notebook, and the final Chrome sweep visited all 28 notebook routes and exercised representative reactive controls. That caught the class of failures that a static build alone cannot find: client imports, attachment loading, runtime evaluation, and control-driven recomputation.

## What I do not like

### Four notebooks are not fully migrated in the sense of the original brief

The following files still contain large amounts of `application/vnd.observable.javascript` source:

- `src/notebooks/archived-maths-fellegi-sunter.notebook.html`
- `src/notebooks/carbon-electric-car.notebook.html`
- `src/notebooks/em-algorithm-interactive.notebook.html`
- `src/notebooks/understanding-match-weights.notebook.html`

Much of their core calculation code has been extracted, so they are materially better than the originals. Nevertheless, they each retain roughly 30–40 legacy-style cells and several hundred lines of notebook HTML/source. That code is less pleasant to format, type-check, refactor, and review than the modern pattern used by `energy-usage.notebook.html`.

Some page prose and presentation logic also remain embedded in these notebooks. That weakens the intended boundary in which Astro owns prose and the notebook owns only reactive UI wiring.

The current `src/notebooks/README.md` therefore overstates the position when it describes all notebooks as fully following the modern pattern.

### The compatibility surface now appears larger than necessary

`arquero-compat.notebook.html` and `local-notebook-dependencies.notebook.html` do not appear to be imported by any live notebook. No live root notebook currently appears to use `require(...)` or an Observable package import, but the provider still installs the legacy require bridge and the associated compatibility modules remain in the tree.

The four legacy-style notebooks still need some compatibility behaviour, especially legacy HTML/SVG template semantics, so this cannot all be deleted immediately. Once those four are converted, however, the compatibility notebooks and helpers should be reviewed aggressively rather than retained indefinitely “just in case.”

### CI provides less assurance than the local review

The pull-request workflow runs `pnpm run build`, but not the full type/check command or the test suite. A build is necessary, but it is not a substitute for the notebook compilation tests and library tests that now exist.

The browser audit is also manual. That was appropriate for completing the migration, but it means future changes can reintroduce client-only failures without CI noticing.

### There is still concentrated technical debt

`src/lib/notebooks/fault-tolerant-trie.js` is over 1,200 lines and has very limited direct test coverage. It combines enough algorithmic, state, rendering, and UI behaviour to make future changes risky.

Several other migrated modules remain dense, untyped, or use broad `any` casts around charting and data libraries. Some of that is reasonable at third-party boundaries, but the repository does not currently have a formatter/linter setup enforcing the “normal, easy-to-format JS/TS” part of the original aim.

The files named `legacy-fs-maths.ts` and `legacy-match-weights.ts` are useful migration steps, but I would not want “legacy” parallel implementations to become the permanent domain model when related typed record-linkage modules already exist.

### The custom compiler adapter is a maintenance responsibility

The Vite plugin is a sensible solution, but it reproduces some Notebook Kit runtime conventions. Changes in Notebook Kit internals could therefore affect it. Exact dependency pinning reduces that risk; focused integration tests and documentation are still important because this adapter is now infrastructure for every interactive article.

### A few external runtime dependencies remain operational risks

The birdsong notebook depends on Xeno-canto via a personal Cloudflare Worker and on iNaturalist. At present, at least one failure path degrades silently to no results. A broken proxy, quota change, or API change could therefore look like an indefinitely empty/loading interface rather than a useful error.

The energy notebooks also still import internal paths from `@robinl/energy_usage`. It is locked and currently works, but importing another package's `src` files is brittle and falls short of the original single-repository ideal for code we own.

## Must do before describing the migration as finished

1. **Run all checks in CI.** Pull requests should run the type/check command, unit and notebook compilation tests, and the production build. Deployment should only proceed after those pass.

2. **Resolve the four remaining legacy notebooks.** Convert them to the same native Notebook Kit/normal TypeScript pattern as `energy-usage.notebook.html`, moving prose into Astro/MDX and leaving only reactive presentation wiring in cells. If that work is deliberately deferred, update the README and project language so the remaining compatibility state is explicit rather than claiming complete migration.

3. **Remove compatibility code only after proving it is unused.** Once the four conversions are complete, delete the unused compatibility notebooks, legacy require/template code that no longer has callers, and their tests. Run the complete route audit again after removal.

4. **Prune dependencies as part of that removal.** Current searches suggest that `alasql`, `arquero`, `d3-require`, `vega-tooltip`, `world-atlas`, `us-atlas`, `vega-lite-api`, and the direct `jquery` package may have no active callers outside compatibility or vendored fixture content. Confirm this with the final source graph, remove what is unused, and regenerate the lockfile.

## Highly recommended next steps

1. **Add automated browser smoke coverage.** It does not need to reproduce the entire manual sweep initially. Start by loading every notebook route, failing on console/page errors, and testing a small set of high-risk reactive interactions. This directly protects the migration's main success criterion.

2. **Vendor the small amount of owned energy logic still imported from `@robinl/energy_usage`.** Move the required conversion and flight calculations into a typed local module with tests, then remove that dependency.

3. **Split and test `fault-tolerant-trie.js`.** Separate its algorithm/model, rendering, and controls, then add tests for matching behaviour and important edge cases. This is the clearest single maintainability hotspot.

4. **Harden the birdsong failure experience.** Show a visible error and retry state, document ownership/deployment of the proxy, and test an API failure. The notebook should fail intelligibly rather than silently returning an empty result.

5. **Document the Notebook Kit adapter contract.** Explain why the custom Vite plugin exists, which Notebook Kit behaviours it implements, and what its integration tests protect. Keep Notebook Kit pinned and review upgrades deliberately.

6. **Consolidate the legacy record-linkage modules.** Fold reusable maths and match-weight concepts into the main typed record-linkage library where possible, avoiding two subtly different long-term implementations.

## Might do

- Add Prettier and ESLint, format the migrated source, and enforce both in CI. This would improve consistency but should follow the functional cleanup so it does not obscure meaningful changes.
- Convert `NotebookCellProvider.jsx` to TSX and narrow the remaining `any` casts at Vega, TopoJSON, and Observable boundaries.
- Add screenshot-based visual regression tests for a small number of representative notebooks. These would help with CSS and chart regressions, but broad screenshot coverage can be noisy and expensive to maintain.
- Add a lightweight notebook authoring guide with a minimal example showing where prose, cells, domain logic, assets, and tests belong.
- Review prose that still describes data as coming from a live API when the migrated implementation now uses a local snapshot.
- Document that the Spark HTML files are historical input/fixture assets and that their embedded `/static/...` references are not ordinary live page dependencies.

## Suggested order of work

1. Put `check`, tests, and build into CI.
2. Convert the four remaining Observable 1.0-style notebooks one at a time, preserving a browser comparison for each.
3. Remove the resulting dead compatibility code and dependencies.
4. Re-run the full route and interaction audit, then add its smallest useful subset as automated browser smoke tests.
5. Address the large-module and external-service risks independently after the migration boundary is clean.

## Definition of done

I would be comfortable calling the migration complete when every published notebook uses the native local pattern, all owned business logic is ordinary testable source, unused Observable compatibility code and dependencies are gone, CI runs check/test/build, and an automated browser smoke suite proves that every notebook route evaluates without a client or console error.

That is a relatively short distance from the current state. The site itself is already in good shape; the remaining work is mainly about making the repository's claims, dependency surface, and future safeguards match the quality of the runtime result.
