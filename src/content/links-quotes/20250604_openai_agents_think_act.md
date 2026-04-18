---
type: "quote"
author: "Josh Tobin"
date: "2025-06-04"
url: "https://twimlai.com/podcast/twimlai/how-openai-builds-ai-agents-that-think-and-act/"
tags: ["LLMs"]
---

> And so that's, I think, kind of the core challenge of building agents on top of traditional LLMs.
>
> The missing ingredient has been that we need to directly train these agents end to end to do these workflow-like tasks.
>
> By doing that, you can train the agents in such a way that they see failures during their training and they learn to recover from those failures.
>
> So even if each step is only, you know, 90% accurate or 95% accurate, now the model has seen what it looks like to fail at that step and it's able to reroute itself.
>
> It's able to think, oh, this doesn't look right.
>
> Like, let me go back and try that again.
>
> Do you have a canonical example that kind of illustrates this problem?
>
> Yeah.
>
> So a good example of this would be like if you are, you know, if you're trying to kind of like build an agent that does research for you.
>
> So if you do a single web search and maybe you get the search term wrong, like the user doesn't know exactly what to search for.
>
> So you try to search for terms that seem relevant and you start to pull back a bunch of docs that don't have information that really gets to the heart of the problem.
>
> Then a naive agent might just get confused by that.
>
> And it might think, hmm, well, okay, that I searched for the term that I thought that they meant and all these docs are irrelevant.
>
> So maybe this is, you know, maybe what the user asked for doesn't make sense.
>
> Or maybe I need to go down this other rabbit hole.
>
> Whereas an agent that's trained to do web research and has been trained using reinforcement learning to sort of be good at this multi-step process.
>
> Well, in its training, I've seen many instances where it searched for the wrong term.
>
> And the training has incentivized it to learn to recover from those instances and instead go back and think, oh, you know, I searched for this term, but I got results that weren't relevant.
>
> Maybe that means that I had the wrong search term.
>
> So let me go, you know, try to try again and pick a different one.
>
> And so the key is really like reasoning models, power that are trained end to end to solve the kinds of tasks that users need them to solve using reinforcement learning.
>
> So that they're able to kind of like see these multi-step processes, see the kinds of failures that happen in training and learn to recover from them.
>
> It strikes me that the creation of models that are specifically designed to do this is one powerful difference that we're seeing in this new generation of models.

[Full transcript](https://gist.github.com/RobinL/79db889b0fa3742bd4ae355201bbabdb)
