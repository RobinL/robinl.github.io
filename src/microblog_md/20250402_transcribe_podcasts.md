---
title: "Easily Transcribe Podcasts with Gemini 2.5 Pro"
date: "2025-04-02"
tags: ["llms", "audio", "productivity"]
---

Here's a simple workflow for transcribing podcasts using Gemini 2.5 Pro in [Google AI Studio](https://aistudio.google.com/). Initial tests suggest it works very well.

1. Find the direct MP3 link to your podcast using [GetRSSFeed](https://getrssfeed.com/)
2. Drag the MP3 file directly into Gemini 2.5 Pro
3. Use a simple prompt like "transcribe this" with the following structured output specification (click 'Structured output' then 'edit')

```json
{
  "type": "object",
  "properties": {
    "items": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "timestamp": {
            "type": "string",
            "description": "mm:ss"
          },
          "text": {
            "type": "string"
          },
          "speaker_name": {
            "type": "string"
          }
        },
        "required": [
          "timestamp",
          "text",
          "speaker_name"
        ]
      }
    }
  },
  "required": [
    "items"
  ]
}
```

This gives you a nicely formatted transcript with timestamps and speaker identification - no special tools needed beyond Gemini 2.5 Pro's multimodal capabilities.