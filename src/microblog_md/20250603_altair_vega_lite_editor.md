---
title: "Editing Altair Charts in the Vega-Lite Editor"
date: "2025-06-03"
tags: ["python", "jupyter", "vscode", "tips"]
---

Working in Jupyter or VS Code and want to edit an Altair chart in the Vega-Lite editor easily? Use:

```python
import altair as alt
alt.renderers.enable("browser")
chart.show()
```

`chart.show()` will open the chart in your default web browser.
