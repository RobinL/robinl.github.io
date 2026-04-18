---
title: "Using a uv shebang line"
date: "2025-01-28"
tags: ["python"]
---

Rob Allen says:
> I create a fair few scripts in my ~/bin/ directory to automate tasks. Since discovering [uv and inline script metadata](https://akrabat.com/defining-python-dependencies-at-the-top-of-the-file/), I've started using Python far more for these.
>
> As `~/bin` is on my path, I want to run the script by calling it directly on the command line. To do this, I use this shebang:
>
> ```bash
> #!/usr/bin/env -S uv run --script
> ```

Full article [here](https://akrabat.com/using-uv-as-your-shebang-line/).