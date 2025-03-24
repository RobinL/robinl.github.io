---
title: "DuckDB Literals"
date: "2025-03-27"
tags: ["duckdb"]
---

When working with complex nested types such as structs, I often want to try syntax out, but it can be hard to figure out the syntax to write the literal value.

You can do this fairly easily with the duckdb CLI using insert model (web shell does not work).  See [output formats](https://duckdb.org/docs/stable/clients/cli/output_formats.html).

```bash
duckdb
.mode insert
```

Now if I write any SQL statement, it will return the output in the format of a SQL `INSERT` statement - i.e how to write the literal value.

Example:

```bash
SELECT struct_pack(key1 := 'value1', key2 := 42) AS s;
```

returns:

```
INSERT INTO "table"(s) VALUES('[{''key1'': value1, ''key2'': 42}, {''key1'': value1, ''key2'': 43}]');
```

