---
title: "Understanding DuckDB Connection Types in Python"
date: "2024-01-16"
tags: ["python", "duckdb", "database"]
---

DuckDB offers special connection types in Python:

- `:memory:name` - Creates/connects to a named in-memory database that can be shared across connections
- `:default:` - Uses the default connection stored in the DuckDB module

Example:
```python
import duckdb

# Create table in default connection
duckdb.execute("CREATE TABLE tbl AS SELECT 42 as value")

# Access same table through explicit default connection
con = duckdb.connect(":default:")
con.sql("SELECT * FROM tbl")  # Works!

# Shared named memory connection
con3 = duckdb.connect(":memory:shared_db")
con4 = duckdb.connect(":memory:shared_db")  # Same database as con3
```

See docs [here](https://duckdb.org/docs/api/python/dbapi.html)