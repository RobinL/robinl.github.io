---
title: "Making Histograms with DuckDB SQL"
date: "2025-05-21"
tags: ["duckdb"]
---

Want to make a histogram directly in DuckDB? Use the built-in `histogram` and `equi_width_bins` functions:

```python
import duckdb

sql = """
WITH bins AS (
    SELECT
        UNNEST(
            MAP_ENTRIES(
                histogram(
                    your_numeric_column,
                    equi_width_bins(-5.0, 20.0, <num_bins>, nice := true)
                )
            )
        ) AS bin
    FROM your_table
)
SELECT
    bin.key   AS bin_upper_bound,
    bin.value AS count_in_bin
FROM bins
ORDER BY bin.key;
"""


histogram_df = duckdb.sql(sql)

```
