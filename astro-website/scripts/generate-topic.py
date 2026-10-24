#!/usr/bin/env python3
"""
AI Content Pipeline Scaffold (Task 8)
Generates first-draft .md topic files from prompt + source references.
No browser AI. Runs locally or in CI via env/API secrets.
"""
import sys, os, yaml

def main():
    subject = sys.argv[1] if len(sys.argv) > 1 else 'physics'
    level = sys.argv[2] if len(sys.argv) > 2 else 'foundational'
    topic = sys.argv[3] if len(sys.argv) > 3 else 'projectile-motion'
    out_dir = f"draft/{subject}/{level}"
    os.makedirs(out_dir, exist_ok=True)
    out_path = f"{out_dir}/{topic}-draft.md"

    # v1: manual/template draft. If AI_API_URL / AI_API_KEY env present, could call endpoint here.
    # For the proof, this writes a structured draft that the user reviews.
    draft = f"""---
title: "{topic.replace('-', ' ').title()}"
level: {level}
tags: [{subject}, draft]
widgets: [plotter, sliderLab, equationStep]
equations: []
references: [NCERT, OpenStax]
---

# Draft content for {topic} — REVIEW REQUIRED BEFORE COMMIT

## Concept
Explain the core idea briefly.

## Formula
- Key equation

## Interactive
Use plotter + sliderLab.

## References
- Source 1
- Source 2
"""
    with open(out_path, 'w') as f:
        f.write(draft)
    print(f"Draft written to {out_path}")
    print("Review and edit before moving to src/content/subjects/...")

if __name__ == '__main__':
    main()
