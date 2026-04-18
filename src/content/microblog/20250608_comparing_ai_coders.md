---
title: "Comparing AI Coders for Composing and Decomposing"
date: "2025-06-08"
tags: ["LLMs"]
---

Built an app to illustrate composing and decomposing. Tried OpenAI Codex, Claude Code, and Gemini 2.5 Pro on AI studio for implementing this app.

1. Claude is good but expensive. It cost >£5 in less than 2 hrs.
2. Codex failed pretty quickly to follow the spec.
3. Gemini 2.5 is around as good as Claude, possibly a little better, and currently free on AI studio.

On Gemini I'm putting the whole app in context, and asking for 'precise instructions for an LLM to implement', then giving those to GPT-4.1 to implement in VS Code Copilot.

Mainly illustrates the annoying tradeoff that the companies are currently having to navigate in their agentic coders between good results, and including too much context (which increases cost too much).

App here:
https://rupertlinacre.com/d3_regrouping_exchanging/

Code inc spec and step by step implementation plan here:
https://github.com/RupertLinacre/d3_regrouping_exchanging
