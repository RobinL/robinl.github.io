---
title: "Regex-Based Column Renaming in DuckDB"
date: "2025-05-21"
tags: ["duckdb"]
---

Need to strip suffixes on the fly? DuckDB’s COLUMNS star-expression can do it with one regex:

```python
sql = """
SELECT COLUMNS('^(.*)_(cen)$') AS '\\1'
FROM df
"""
duckdb.sql(sql).show(max_width=10000)
```

This removes the suffix `_cen` from all columns, returning only columns with the suffix.

```python
sql = """
SELECT COLUMNS('^(.+?)_cen$|(.+)$') AS '\\1\\2'
FROM your_table;
FROM df
"""
duckdb.sql(sql).show(max_width=10000)
```

This removes the suffix `_cen` from any column name that has it, returning all columns (the names of cols without the suffix are unaffected).


See Star Expressions → COLUMNS in the DuckDB docs: https://duckdb.org/docs/sql/query_syntax/select.html#star-expressions