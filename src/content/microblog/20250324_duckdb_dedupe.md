---
title: "DuckDB Dedupe"
date: "2025-04-01"
tags: ["duckdb"]
---

Want to retain one row per unique value of a certain column or columns?  Use this:

```sql
SELECT DISTINCT ON (column1) *
FROM your_table
```