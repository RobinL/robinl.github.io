---
type: "quote"
author: "bhl"
date: "2025-02-16"
url: "https://news.ycombinator.com/item?id=43087597"
tags: ["LLMs"]
---

> I use it everyday.
> For coding, I use cursor composer to gather context about the existing codebase (context.md). Then I paste that into DeepSeek R1 to iterate on requirements and draft a high level design document, maybe some implementation details (design.md).
>
> Paste that back into composer, and iterate; then write tests. When I'm almost done, I ask composer to generate me a document on the changes it made and I double check that with R1 again for a final pass (changes.md).
>
> Then I'm basically done.
>
> This is architect-editor mode: https://aider.chat/2024/09/26/architect.html.
>
> I've found Cursor + DeepSeek R1 extremely useful, to the point that I've structured a lot of documents in the codebase to be easily greppable and executable by composer. Benefit of that is that other developers (and their composers) can read the docs themselves.
>
> Engineers can self-onboard onto the codebase, and non-technical people can unstuck themselves with SQL statements with composer now.