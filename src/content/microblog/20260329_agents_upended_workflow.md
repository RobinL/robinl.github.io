---
title: "Agents have upended my workflow"
date: "2026-03-29"
tags: ["LLMs", "Agents", "Workflows"]
---

Hard to emphasise how much agents have upended my workflow in the past few months.  It's not just that I'm not writing code. It's that the whole emphasis of work has shifted away from 'doing the thing' and towards findings quick or automated ways of verifying the thing i what I wanted.

Examples:
- In my work on address matching, I have set up a scaffold where I can simply ask it to run an experiment such as 'what happens if we change the tokenisation algoirthm so e.g. FLAT 11A becomes three tokens (FLAT 11 A) not two (FLAT 11A').  It goes away, makes the change, and benchmarks it and produces [charts](https://github.com/moj-analytical-services/uk_address_matcher/pull/338) that allow me to see whether it produces an improvement
- In my [countries quiz](https://rupertlinacre.com/country_quiz/), I want to optimise the speed of animation.  I ask it to try various quantisisatino options, and use playwright to monitor the FPS when animating transitions to work out what is effective
- In work on address matching, an agent produces an interface that allows me to easily review false positives to identify opportunities for improvement.  I then ask the agent to use the interface to perform its own reviews of which are real false positives, and which are mislabelled.

I'm less convinced by the 'spec driven development' of spending a long time nailing down a spec.  Because all too often, when the spec is delivered correctly, it turns out that it's not what you want.

One implication of this, I think, is that it's even more important than ever that developers have a keen understanding of end user needs - because these verifications need to align as closely as possible to the actual business objective
