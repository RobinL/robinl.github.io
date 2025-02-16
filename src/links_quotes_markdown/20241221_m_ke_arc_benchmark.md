---
type: "quote"
author: "m_ke"
date: "2024-12-21"
url: "https://news.ycombinator.com/item?id=42477766"
tags: ["LLMs"]
---

> ARC is a silly benchmark, the other results in math and coding are much more impressive. o3 is just o1 scaled up, the main takeaway from this line of work that people should walk away with is that we now have a proven way to RL our way to super human performance on tasks where it's cheap to sample and easy to verify the final output. Programming falls in that category, they focused on known benchmarks but the same process can be done for normal programs, using parsers, compilers, existing functions and unit tests as verifiers. Pre o1 we only really had next token prediction, which required high quality human produced data, with o1 you optimize for success instead of MLE of next token.