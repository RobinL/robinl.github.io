---
title: "Building more complex apps with AI"
date: "2025-05-17"
tags: ["LLMs"]
---

What do you do when you hit the limits of your LLMs abilities, and it repeatedly fails to 'one shot' a prompt?

Here are some techniques I've used successfully.  Each step is conducted by the LLM, with outputs from the previous steps provided as context.

- **Have a conversation about your app to nail down objectives and the desired functionality**
- **Deep research**. Given the app description, ask Deep Research for best practices for how to implement some of the more complex areas of your app. Essentially the task here is to produce a document of focused context for implementation.
- **Write a detailed spec**. Then ask it whether it needs any clarifications, and iterate. Edit any bits you don't like.
- **Write a step-by-step implementation plan**. Ask the LLM to ensure that each step is verifiable. Tell it to think carefully about what feature to implement first to enable iterative building, and verification at each step. Get it to check the implementation plan front-to-back and back-to-front to check it makes sense. Ask it to provide an architectural review of the plan.
- **Make sure the proposed architecture is not going overboard**. When asked to follow best practice, LLMs will sometimes add too much abstraction/complexity. Ensure this is proportionate to your objectives before proceeding.

Once you have your step by step implementation plan, copy and paste each step into Copilot agent mode (I find GPT 4.1 works well), and verify everything's working before proceeding to the next step.  The verification is extremely important because if you miss a bug at an earlier stage, the problems will often compound.

If you're implementing a new feature on an existing app, you can follow a similar process.  I recommend using Gemini 2.5 with 1m context so you can provide the full source code as context to create the spec/implementation plan.  If GPT 4.1 is failing to implement, you can ask Gemini for 'instructions for an LLM copilot to follow to implement', and then just paste those instructions to GPT 4.1.