---
type: "quote"
title: "llm-fragments-github plugin: Importing Issues and Repo Context"
source: "Simon Willison"
date: "2025-04-23"
tags: ["LLMs"]
---

> My llm-fragments-github plugin has a new feature that lets you import an issue thread using -f issue:org/repo/number - so now you can feed it the repo contents with -f github:simonw/llm and tell it to "muse on this issue, then propose a whole bunch of code to help implement it"
>
> ```
> llm install llm-fragments-github
> llm -f github:simonw/llm \
> -f issue:simonw/llm/938 \
> -m gemini-2.5-pro-exp-03-25 \
> --system 'muse on this issue, then propose a whole bunch of code to help implement it'
> ```
