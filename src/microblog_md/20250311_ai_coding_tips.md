---
title: "AI coding tips"
date: "2025-03-11"
tags: ["LLMs"]
---

- Progress is enormously faster if you can work on micro-libraries that fit easily into context
- When implementing a new feature, first ask the LLM to perform an architectural review of the whole codebase to see whether a refactor is needed that will make the new feature easier to implement
- Regularly give the LLM the whole codebase and ask it whether there's any used code or functions.  They often leave a mess by accident when refactoring
- Have a set of tests or e.g. a demo webpage page (written by the LLM) that give you immediate feedback on whether the library is working.  The idea is to have a source of information you can easily copy and paste back into the LLM to help it fix bugs
-  Regularly ask the LLM whether the codebase currently seems healthy and whether there's a way to achieve the same thing in a simpler or clearer fashion