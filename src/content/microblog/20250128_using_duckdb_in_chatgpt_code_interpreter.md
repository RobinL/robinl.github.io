---
title: "Using DuckDB in ChatGPT Code Interpreter"
date: "2025-01-28"
tags: ["duckdb", "LLMs"]
---

You can use DuckDB in ChatGPT's code interpreter by providing this specific wheel file:

`duckdb-1.1.3-cp311-cp311-manylinux_2_17_x86_64.manylinux2014_x86_64.whl`

from [here](https://pypi.org/project/duckdb/#files).

If you encounter any issues, you can copy paste the available wheels into ChatGPT and ask it to analyze which is the most likely to work.

For Altair, you need:
[narwhals-1.24.1-py3-none-any.whl](https://files.pythonhosted.org/packages/68/0e/882f7c0e073bf1f310dce159af6186826ca9b8ee7c170771c23e52a373dc/narwhals-1.24.1-py3-none-any.whl) then
[altair-5.5.0-py3-none-any.whl](https://files.pythonhosted.org/packages/aa/f3/0b6ced594e51cc95d8c1fc1640d3623770d01e4969d29c0bd09945fafefa/altair-5.5.0-py3-none-any.whl)

Note: I could not get png generation to work because the `vl_convert_python` wheel would not install.