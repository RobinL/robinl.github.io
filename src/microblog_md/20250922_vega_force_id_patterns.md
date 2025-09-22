---
title: "Different ways of setting out data in a Vega force-directed layout"
date: "2025-09-22"
tags: ["data"]
---

In the official Vega [force-directed example](https://vega.github.io/vega/examples/force-directed-layout/) it isn’t obvious how to wire up links when your data uses unique ids rather than array positions.

The [Les Mis example dataset](https://github.com/vega/vega/blob/3d9691aa9ec597ee9a831e8294351f5a2dafa85e/docs/data/miserables.json) used by the example looks like this:

```json
{
  "nodes": [
    {"name":"Myriel","group":1,"index":0},
    {"name":"Napoleon","group":1,"index":1},
    {"name":"Mlle.Baptistine","group":1,"index":2}
    …
  ],
  "links": [
    {"source":1,"target":0,"value":1},
    {"source":2,"target":0,"value":8},
    {"source":3,"target":0,"value":10}
    …
  ]
}
```

That is: `source`/`target` are array indices into `nodes`. This is not how most data arrives.

I didn't find the [docs](https://vega.github.io/vega/docs/transforms/force/) to be very clear:

> “If an id field parameter is provided, it is used to related link objects and node objects. Otherwise, the source and target fields should provide indices into the array of node objects.”

Here are four fully working examples in gists:

* [Hardcoded indices](https://gist.github.com/RobinL/3a08784cf81291825887db7c4f12643c#file-spec_data_hardcoded-json)
* [Use unique ids, force transform in data](https://gist.github.com/RobinL/3a08784cf81291825887db7c4f12643c#file-spec_no_lookup_force_in_data_section-json)
* [Use unique ids, force transform in mark](https://gist.github.com/RobinL/3a08784cf81291825887db7c4f12643c#file-spec_no_lookup_force_in_mark_section-json)
* [Bonus: How to use a lookup to derive hardcoded indices](https://gist.github.com/RobinL/3a08784cf81291825887db7c4f12643c#file-spec_with_lookup-json)

My recommendation is to use the force transform in the data, since the force transform in the mark seems to break the 'open in vega editor' button due to a recursive loop in the computed json.

The following summarises the differences

## 1) Hardcoded indices (closest to the example)

Links are numeric indices. No `id` accessor needed.

```json
// link-data
{ "values": [ { "source": 0, "target": 1, "weight": 50.78 } ] }

// force (inside mark or data section)
{ "force": "link", "links": "link-data",
  "distance": {"signal": "$linkDistance"}
}
```

Good for quick tests. Brittle if node order changes.

---

## 2) No lookup, force in the data section (string IDs)

Let the force write `x/y` onto data tuples and bind them in the mark. Provide an `id` accessor that returns your node’s unique key.

```json
// node-data (tuples carry the id)
"values": [
  { "group": 1, "match_id": "a" },
  { "group": 1, "match_id": "b" }
],
"transform": [
  {
    "type": "force",
    "forces": [
      { "force": "link", "links": "link-data", "id": "match_id",
        "distance": {"signal": "$linkDistance"} }
    ]
  }
]

// link-data (string endpoints)
"values": [ { "source": "a", "target": "b" } ]

// node mark (tell the symbol where to go)
"encode": { "update": { "x": {"field": "x"}, "y": {"field": "y"} } }
```

Here `id: "match_id"` is evaluated on node tuples (no `datum.`).



## 3) No lookup, force in the mark section (string IDs)

Force writes directly to mark items, so you don’t set `x`/`y` in `encode`. But the `id` accessor must read from the underlying datum:

```json
// force inside the node mark
{
  "type": "force",
  "forces": [
    { "force": "link", "links": "link-data", "id": "datum.match_id",
      "distance": {"signal": "$linkDistance"} }
  ]
}
```

Key difference: inside a mark you need `id: "datum.match_id"`.



## 4) Bonus: pre-map link IDs to indices with `lookup`

If your links come with IDs and you’d rather keep the index-based link force, translate them first:

```json
// on link-data
{
  "type": "lookup",
  "from": "node-data", "key": "match_id",
  "fields": ["match_id_l", "match_id_r"], "as": ["source", "target"]
},
{ "type": "formula", "as": "source", "expr": "datum.source.index" },
{ "type": "formula", "as": "target", "expr": "datum.target.index" },
{ "type": "project", "fields": ["source", "target", "weight"] }
```

Then use the standard link force with no `id` accessor.


