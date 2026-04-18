---
title: "Combining VS Code Debugger with Jupyter Interactive Window"
date: "2025-04-02"
tags: ["python", "jupyter", "vscode", "debugging", "productivity"]
---

Today I learned you can combine the VS Code debugger with the Jupyter interactive window enabling debugging with rich output.

**My Workflow**: I use plain `.py` files in VS Code, executing "cells" by selecting code and pressing Shift+Enter to send it to the Jupyter (ipykernel) interactive window.

Previously, I found it frustrating having to choose between:
1. Sending code to the interactive window to get rich output (pandas tables, charts, etc.)
2. Setting a debug point to explore variables interactively

Today I discovered you can have both! Use the **Jupyter: Debug current file in interactive window** command.

At first, this doesn't seem to do anything special - you still execute debug commands in the debug console, making it appear no different from standard debugging.

But if you wrap any command in `display()`, the output also appears in the interactive window with full rich formatting.

This gives you the best of both worlds: interactive debugging with the ability to visualize complex data structures and plots in the same workflow.