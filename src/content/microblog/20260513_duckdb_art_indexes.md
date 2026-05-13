---
title: "When are ART indexes in DuckDB useful?"
date: "2026-05-13"
tags: ["DuckDB", "SQL", "Data"]
---

I ran a small DuckDB experiment to answer a practical question: if you create an ART index, does DuckDB only use it for exact point lookups, or can it also help with record-linkage-style joins? The short answer is that ART is useful when the predicate is very selective, and that is true even when the lookup returns more than one row. It is not limited to strictly unique values.

These were the main SQL shapes I tested:

```sql
-- ART index used for indexed equality on unique_id
SELECT *
FROM people
WHERE unique_id = 1;
```

```sql
-- ART index used if this value is selective enough
-- On this table, that meant roughly fewer than ~8k matching rows
SELECT *
FROM people
WHERE full_name = 'person_39764';
```

```sql
-- Plan stays a HASH_JOIN, not a pure index lookup
-- But the scan on people can still use the ART index if the join key is selective enough
-- For common values, DuckDB falls back to a sequential scan here
SELECT p.*
FROM (SELECT 'person_39764' AS full_name) probe
LEFT JOIN people p
  ON probe.full_name = p.full_name;
```

What I found is that DuckDB did use the ART index for `unique_id` lookups, and it also used it for `full_name` lookups when the name was rare: I tested names occurring 1, 2, and 5 times, and all of those used index-backed access. Direct filters in those selective cases ran in about 0.05 to 0.06 ms median time, and the single-row `LEFT JOIN` form ran in about 0.10 to 0.11 ms median time. That means the indexed direct filter was roughly 700x to 800x faster than the high-frequency case, and the indexed join form was roughly 350x faster.

I also checked the stronger claim that ART is never used for the `LEFT JOIN` version, even when the join only returns one row. That turned out not to be true. For a selective `unique_id` join and for rare `full_name` joins, DuckDB still planned the query as a `HASH_JOIN`, but the scan of the large table showed `Type: Index Scan` in `EXPLAIN ANALYZE`.

There was also a clear cutoff. On this roughly 8.0M-row table, DuckDB's defaults were `index_scan_max_count = 2048` and `index_scan_percentage = 0.001`, which implies a threshold of about 8,012 matching rows for switching from index-backed access to a table scan. That matched the experiment closely: a `full_name` with 7,999 matches still used the ART index and took about 6.1 ms median time, while a `full_name` with 8,058 matches had already switched to a sequential scan and took about 34.5 ms; the `LEFT JOIN` form flipped at the same point, from about 6.2 ms to about 31.9 ms.

The important boundary condition is selectivity. For a `full_name` value with 34,039 matches, DuckDB did not use the ART index for either the direct filter or the equivalent single-row `LEFT JOIN`; both behaved like scan-based plans and took roughly 38 to 42 ms median time. So the right mental model is: ART indexes in DuckDB are useful for highly selective equality predicates, including some very small multi-row matches, but common blocking keys still behave much more like scans than immediate index probes.

One small caveat: `EXPLAIN ANALYZE` was more trustworthy than plain `EXPLAIN` for confirming whether the executed plan actually used an index scan.

If you want to create one yourself, the syntax is just standard DuckDB index syntax, for example `CREATE INDEX idx_full_name ON people(full_name);` or for a composite equality key `CREATE INDEX idx_name_dob ON people(full_name, dob);`. DuckDB's ART index is the built-in index type used for these equality lookups.
