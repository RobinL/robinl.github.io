---
title: "Different ways to wire Vega force links"
date: "2025-09-22"
tags: ["vega", "data-viz", "force-layout"]
---

Vega's force-directed demo uses array indices for `source`/`target`, but real data arrives with IDs. I wrote up four tiny specs showing how to make those links work:

- hardcoded indices for quick tests
- `force` in the data section with `id: "match_id"`
- `force` in the mark with `id: "datum.match_id"`
- a `lookup` that precomputes indices from IDs

Full examples live in this gist: https://gist.github.com/RobinL/3a08784cf81291825887db7c4f12643c. The main trick is matching the `id` accessor to where the force runs—data tuples vs. mark items.
