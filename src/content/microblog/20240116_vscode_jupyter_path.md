---
title: "Configuring Python Path Visibility in VS Code interactive window (Jupyter)"
date: "2024-01-16"
tags: ["vscode", "jupyter", "tips"]
---

When working with Jupyter notebooks in VS Code, add these settings to your `.vscode/settings.json`:

```json
{
    "jupyter.notebookFileRoot": "${workspaceFolder}",
    "python.analysis.extraPaths": [
        "${workspaceFolder}"
    ]
}
```

Now, the interactive window will run any script as if it's running from the root directory even if it's nested.
