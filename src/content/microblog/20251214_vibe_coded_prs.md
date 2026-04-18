---
title: "Using AI to Help Teammates, Not Hinder Them"
date: "2025-12-14"
tags: ["LLMs", "Collaboration"]
---

Developers hate vibe coded PRs because they push the hard work of understanding the code onto the reviewer. My take: when working in a team, you should only use AI assistance if it makes your teammates' jobs easier not harder. Mostly this means you should be using AI to think more about what you're doing not less.

I find a few patterns useful to stick to this rule:

1. Vibe code one or more solutions on a temp branches. When you decide you like an approach, implement it yourself by hand on a new branch, step by step, deliberately seeking to understand every part of it. Consider splitting into multiple smaller PRs.
2. Put in deliberate, additional effort prior to opening the PR. For example, get the best model available to you (e.g. GPT 5.2 Pro) to do review the diff prior to opening the PR. Read what it says carefully.
3. In the PR description, write notes about any qualitative decisions you make, what you tried/thought about, and why you made your decisions.

This all fits very cleaning into my pre-AI workflow, where I would always 'make it work, then make it good'. The 'make it work' part is essentially a research step to help you understand the problem. You can only 'make it good' if you understand the problem. You cannot judge whether it is good without understanding the problem and the solution.

One thing I really like is I can now vibe code multiple solutions using different approaches to quickly see which pans out best.
