---
title: "Using uv timestamp for dependency management"
date: "2025-02-16"
tags: ["python"]
---

From [epistasis](https://news.ycombinator.com/item?id=43097209):

> One other key part of this is freezing a timestamp with your dependency list, because Python packages are absolutely terrible at maintaining compatibility a year or three or five later as PyPI populates with newer and newer versions. The special toml incantation is [tool.uv] exclude-newer:
>   ```
>   # /// script
>   # dependencies = [
>   #   "requests",
>   # ]
>   # [tool.uv]
>   # exclude-newer = "2023-10-16T00:00:00Z"
>   # ///
>   ```
> https://docs.astral.sh/uv/guides/scripts/#improving-reproducibility
> This has also let me easily reconstruct some older environments in less than a minute, when I've been version hunting for 30-60 minutes in the past. The speed of uv environment building helps a ton too.