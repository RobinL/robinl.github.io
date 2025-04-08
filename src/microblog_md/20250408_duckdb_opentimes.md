---
title: "Opentimes and a clever use of DuckDB"
date: "2025-04-08"
tags: ["duckdb"]
---

[OpenTimes](https://opentimes.org/) are using a clever combination of duckdb and `.parquet` files to serve huge datasets to a web frontend.

See [this blog](https://sno.ws/opentimes/) from Dan Snow:

> The entire OpenTimes backend is just static Parquet files on Cloudflare’s R2. There’s no RDBMS or running service, just files and a CDN. The whole thing costs about $10/month to host and costs nothing to serve. In my opinion, this is a great way to serve infrequently updated, large public datasets at low cost (as long as you partition the files correctly).

> The query layer uses a single DuckDB database file with views that point to static Parquet files via HTTP. This lets you query a table with hundreds of billions of records after downloading just the ~5MB pointer file.

To dig into this a bit deeper we can attach their database at `https://data.opentimes.org/databases/0.0.1.duckdb`:

And see that the 'tables' are just reference to very large numbers of parquet files:

```python
import duckdb

duckdb.execute("ATTACH 'https://data.opentimes.org/databases/0.0.1.duckdb'")

sql = """
SELECT sql
FROM duckdb_views()
where schema_name = 'public'

"""

duckdb.sql(sql).fetchone()[0]
```

returns:

```sql
CREATE VIEW public.points AS
SELECT * FROM
read_parquet(
main.list_value(
'https://data.opentimes.org/points/version=0.0.1/mode=car/year=2020/geography=state/state=01/points-0.0.1-car-2020-state-01-0.parquet',
'https://data.opentimes.org/points/version=0.0.1/mode=car/year=2020/geography=state/state=02/points-0.0.1-car-2020-state-02-0.parquet',
'https://data.opentimes.org/points/version=0.0.1/mode=car/year=2020/geography=state/state=04/points-0.0.1-car-2020-state-04-0.parquet',
'https://data.opentimes.org/points/version=0.0.1/mode=car/year=2020/geography=state/state=05/points-0.0.1-car-2020-state-05-0.parquet',
'https://data.opentimes.org/points/version=0.0.1/mode=car/year=2020/geography=state/state=06/points-0.0.1-car-2020-state-06-0.parquet',
'https://data.opentimes.org/points/version=0.0.1/mode=car/year=2020/geography=state/state=08/points-0.0.1-car-2020-state-08-0.parquet',
...700 of these!
)
)
```



More info from Simon W [here](https://news.ycombinator.com/item?id=43393163) and [here](https://simonwillison.net/2025/Mar/17/opentimes/).