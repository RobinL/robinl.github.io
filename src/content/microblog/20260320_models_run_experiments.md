---
title: "Using models to run experiments"
date: "2026-03-20"
tags: ["LLMs", "Workflows", "Experiments"]
---

A big recent shift in my AI workflow has been recognising the power of getting models to run experiments for me and analysing the results. For instance:

- "Here's some code that results in an error. Reduce it to a minimal reprex by running simpler variants until it no longer breaks"

- "I want to understand the performance implications of enums vs strings in DuckDB. Run a series of experiments that analyse memory usage, disk usage, and the speed of operations like joins and filters, and write up your findings in `report.md`."

- "Profile this code to identify the lowest-hanging fruit for optimisation. Make optimisations one at a time, record your results, and summarise which change has the biggest effect in `report.md`."

- "I've noticed a performance regression in my library when I run `example.py`. Try installing different versions of my library and different versions of my dependencies to pin down the cause."
