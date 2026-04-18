---
title: "Teaching AI models to debug"
date: "2025-02-19"
tags: ["ai", "debugging"]
---

Weird experience tonight teaching o3-mini to debug. It can code better than me, but seems clueless at debugging. 'Don't try and fix this all at once - create a minimal reprex that outputs debugging information that will help you solve this problem'. Only then does it succeed

Feels like a combination of

1. asking for clarification
2. knowing how to debug
3. adding code interpreter

would make Cusror far more powerful, without any significant breakthroughs needed in underlying LLM capability. Knowing when to do (1) is perhaps hardest