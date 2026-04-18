---
title: "ClickHouse Obfuscator - Data Anonymization Tool"
date: "2025-01-16"
tags: ["data"]
---

The [ClickHouse obfuscator](https://clickhouse.com/docs/en/operations/utilities/clickhouse-obfuscator) is a tool for anonymizing production data while preserving its key statistical properties. It maintains:

- Value cardinalities and distributions
- Data compression ratios
- String lengths and UTF-8 validity
- Time series continuity

See also [here](https://github.com/ClickHouse/ClickHouse/tree/master/programs/obfuscator).