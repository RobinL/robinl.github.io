---
title: "DuckDB Cube"
date: "2025-03-27"
tags: ["duckdb"]
---

Want percentages and the total?  Use `group by cube`:

```python
import duckdb

NUM_ROWS = 1000

duckdb.sql(f"""
CREATE OR REPLACE TABLE array_dataset AS
WITH fruits AS (
    SELECT ['apple', 'banana', 'pear', 'plum'] AS fruit_list
),
random_fruits AS (
    SELECT
        list_extract((SELECT fruit_list FROM fruits), 1 + (random() * 3)::INTEGER) AS fruit
    FROM range({NUM_ROWS})
)
SELECT * FROM random_fruits
""")

duckdb.table("array_dataset").show()


result = duckdb.sql("""
WITH fruit_counts AS (
  SELECT
    fruit,
    COUNT(*) AS count
  FROM array_dataset
  GROUP BY CUBE(fruit)
),
total_count AS (
  SELECT count FROM fruit_counts WHERE fruit IS NULL
)
SELECT
  COALESCE(fruit, 'TOTAL') AS fruit,
  count,
  FORMAT('{:.2f}%%', 100.0 * count / (SELECT count FROM total_count)) AS percentage
FROM fruit_counts
ORDER BY fruit = 'TOTAL', fruit
""")
result.show()

```