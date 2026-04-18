---
type: "quote"
author: "Andrej Karpathy"
date: "2025-01-27"
url: "https://x.com/karpathy/status/1883941452738355376"
tags: ["LLMs"]
---

> Deep Learning has a legendary ravenous appetite for compute, like no other algorithm that has ever been developed in AI. You may not always be utilizing it fully but I would never bet against compute as the upper bound for achievable intelligence in the long run. Not just for an individual final training run, but also for the entire innovation/experimentation engine that silently underlies all the algorithmic innovations.
>
> Data has historically been seen as a separate category from compute, but even data is downstream of compute to a large extent - you can spend compute to create data. Tons of it. You've heard this called synthetic data generation, but less obviously, there is a very deep connection (equivalence even) between "synthetic data generation" and "reinforcement learning".
>
> In the trial-and-error learning process in RL, the "trial" is model generating (synthetic) data, which it then learns from based on the "error" (/reward). Conversely, when you generate synthetic data and then rank or filter it in any way, your filter is straight up equivalent to a 0-1 advantage function - congrats you're doing crappy RL.
>
> There are two major types of learning, in both children and in deep learning:
> 1) Imitation learning (watch and repeat, i.e. pretraining, supervised finetuning)
> 2) Trial-and-error learning (reinforcement learning)
>
> My favorite simple example is AlphaGo - 1) is learning by imitating expert players, 2) is reinforcement learning to win the game. Almost every single shocking result of deep learning, and the source of all *magic* is always 2. 2 is significantly more powerful. 2 is what surprises you.
>
> 2 is when the paddle learns to hit the ball behind the blocks in Breakout. 2 is when AlphaGo beats even Lee Sedol. And 2 is the "aha moment" when the DeepSeek (or o1 etc.) discovers that it works well to re-evaluate your assumptions, backtrack, try something else, etc.
>
> It's the solving strategies you see this model use in its chain of thought. It's how it goes back and forth thinking to itself. These thoughts are *emergent* (!!!) and this is actually seriously incredible, impressive and new. The model could never learn this with 1 (by imitation), because the cognition of the model and the cognition of the human labeler is different.
>
> The human would never know to correctly annotate these kinds of solving strategies and what they should even look like. They have to be discovered during reinforcement learning as empirically and statistically useful towards a final outcome.
>
> (Last thought: RL is powerful but RLHF is not. RLHF is not RL.)