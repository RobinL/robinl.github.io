# Observable vendoring

This directory contains local, vendored Observable notebook packages used by migrated MDX posts.

The Astro site imports these packages through `file:` dependencies in `package.json`:

```json
"@robinl/my-flights": "file:./vendor/observable/my-flights",
"@robinl/fault-tolerant-trie": "file:./vendor/observable/fault-tolerant-trie"
```

The currently vendored notebooks are listed in `manifest.json`.

## Refresh workflow

1. Download the notebook package from Observable, preserving the notebook version in the URL or exported package metadata.
2. Replace the matching package directory under `vendor/observable/`.
3. Check the vendored package's `package.json`:
   - `name` should match the `file:` dependency.
   - `version` should match the Observable package version.
   - `homepage` should point to the source notebook.
   - `main` should point to the generated notebook module.
4. Update `vendor/observable/manifest.json` with the source URL, version, and entry file.
5. Run `npm install --package-lock-only` so `package-lock.json` records the updated local package metadata.
6. Run `npm run build` and test any page that hydrates the refreshed notebook.

The site integration for these packages lives in `src/components/observable/`. Add any new notebook name to `src/components/observable/notebooks.ts` before using it from MDX.
