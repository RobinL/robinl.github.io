---
title: "Python warnings"
date: "2026-04-01"
tags: ["Python", "Logging", "Warnings"]
---

- A `zsh` terminal in macOS will display both `stderr` and `stdout` and will make no visual distinction between the two. The shell *knows* the distinction. The mental model is that they are coming in by two separate pipes, but the terminal is like a sink that both pipes empty into.

- When you run Python in a terminal (either by running a Python program or using Python interactively), the output you see is any `stdout` or `stderr` that is emitted by Python.

- `print()` goes to `stdout`.

- `warnings.warn(...)` goes to `stderr` (unless filtered).

- `logger.warning(...)` and `logger.info(...)` go wherever the logger is configured to send them. **But there is an exception** for `logger.warning(...)`: it goes to `stderr` if the logger is not configured.

- `warnings.warn(...)` is intended for use by a library to give messages to end users of that library, whereas `logger.warning(...)` is intended for developers. So in general, if you want to warn **the end user**, use `warnings.warn(...)`; if you want a high-importance message for the developer, you can use `logger.warning(...)`.

- More precisely: use `warnings.warn(...)` in library code when the issue is avoidable and the client application should be changed to eliminate it; use `logger.warning(...)` when something noteworthy happened at runtime but there is nothing the client application can do, and the event should still be recorded.
