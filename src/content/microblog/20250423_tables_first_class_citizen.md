---
title: "Why aren't tables first class citizens in programming languages?"
date: "2025-04-23"
tags: ["data"]
---

If you step back, it's kind of weird that there's no mainstream programming language that has tables as first class citizens. Instead, we're stuck learning multiple APIs (polars, pandas) which are effectively programming languages for tables.

R is perhaps the closest, because it has `data.table` as a 'first class citizen', but most people don't seem to use it, and use e.g. `tibble`s from dplyr instead.

The root cause seems to be that we still haven't figured out the best language to use to manipulate tabular data yet.  It feels like there's been some convergence on some common ideas. Polars is kindof similar to dplyr.  But no standard, except perhaps SQL.
