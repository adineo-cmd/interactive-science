#!/usr/bin/env python3
"""Validate content: widget registry, topic slugs on disk, frontmatter schema (for .md sources)."""
import glob
import json
import os
import sys

import yaml

ROOT = os.path.dirname(os.path.abspath(__file__))

REGISTRY = {"plotter", "sliderLab", "equationStep", "diagramBuilder", "timeline"}


def check_topics_json():
    errors = []
    data = json.load(open(os.path.join(ROOT, "..", "src", "data", "topics.json"), encoding="utf-8"))
    ids = {s["id"] for s in data["subjects"]}
    pages_root = os.path.join(ROOT, "..", "src", "pages")
    for t in data["topics"]:
        if t["subject"] not in ids:
            errors.append(f"UNKNOWN SUBJECT: {t.get('slug', t['title'])} -> {t['subject']}")
        if t.get("status") == "planned":
            if "widgets" in t:
                errors.append(f"PLANNED TOPIC HAS WIDGETS (move to live when written): {t['title']}")
            continue
        for w in t.get("widgets", []):
            if w not in REGISTRY:
                errors.append(f"UNKNOWN WIDGET: {t.get('slug')} {w}")
        path = os.path.join(pages_root, t["slug"] + ".astro")
        if not os.path.exists(path):
            errors.append(f"MISSING PAGE: {path}")
    return errors


def check_markdown_sources():
    errors = []
    for path in glob.glob(os.path.join(ROOT, "..", "src", "content", "subjects", "**", "*.md"), recursive=True):
        with open(path, encoding="utf-8") as f:
            content = f.read()
        try:
            meta = yaml.safe_load(content.split("---")[1])
        except Exception as e:
            errors.append(f"YAML FAIL: {path} — {e}")
            continue
        for k in ["title", "level", "tags", "widgets"]:
            if k not in meta or meta[k] is None:
                errors.append(f"MISSING {k}: {path}")
        for w in meta.get("widgets", []):
            if w not in REGISTRY:
                errors.append(f"UNKNOWN WIDGET: {path} {w}")
    return errors


def main():
    errors = check_topics_json() + check_markdown_sources()
    if errors:
        for e in errors:
            print(e)
        print(f"\n{len(errors)} error(s) found.")
        sys.exit(1)
    print("All content valid.")


if __name__ == "__main__":
    main()
