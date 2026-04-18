---
type: "quote"
author: "Nathan Lambert"
date: "2025-02-03"
url: "https://lexfridman.com/deepseek-dylan-patel-nathan-lambert-transcript/#:~:text=The%20remarkable%20thing%20about%20these%20reasoning%20results%20and"
tags: ["LLMs"]
---

> The remarkable thing about these reasoning results and especially the DeepSeek-R1 paper, is this result that they call DeepSeek-R1-0, which is they took one of these pre-trained models, they took DeepSeek-V3-Base, and then they do this reinforcement learning optimization on verifiable questions or verifiable rewards for a lot of questions and a lot of training. And these reasoning behaviors emerge naturally. So these things like, "Wait, let me see. Wait, let me check this. Oh, that might be a mistake." And they emerge from only having questions and answers. And when you're using the model, the part that you look at is the completion. So in this case, all of that just emerges from this large-scale RL training and that model, which the weights are available, has no human preferences added into the post-training.
>
> But the very remarkable thing is that you can get these reasoning behaviors, and it's very unlikely that there's humans writing out reasoning chains. It's very unlikely that they somehow hacked OpenAI and they got access to OpenAI o-1's reasoning chains. It's something about the pre-trained language models and this RL training where you reward the model for getting the question right, and therefore it's trying multiple solutions and it emerges this chain of thought.