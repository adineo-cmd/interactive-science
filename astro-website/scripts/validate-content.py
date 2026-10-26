#!/usr/bin/env python3
"""Validate content: widget registry, topic slugs on disk, frontmatter schema (for .md sources)."""
import glob
import json
import os
import sys

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


def check_syllabus_files():
    """Every syllabus program must reference real topics.json slugs of its own subject."""
    errors = []
    data = json.load(open(os.path.join(ROOT, "..", "src", "data", "topics.json"), encoding="utf-8"))
    ids = {s["id"] for s in data["subjects"]}
    topics_by_slug = {t["slug"]: t for t in data["topics"]}
    syl_dir = os.path.join(ROOT, "..", "src", "data", "syllabus")
    for path in sorted(glob.glob(os.path.join(syl_dir, "*.json"))):
        name = os.path.basename(path)
        try:
            syl = json.load(open(path, encoding="utf-8"))
        except Exception as e:
            errors.append(f"SYLLABUS JSON FAIL: {name} — {e}")
            continue
        for key in ("subject", "source", "note", "program"):
            if key not in syl:
                errors.append(f"SYLLABUS MISSING {key}: {name}")
        if syl.get("subject") not in ids:
            errors.append(f"SYLLABUS UNKNOWN SUBJECT: {name} -> {syl.get('subject')}")
        for u in syl.get("program", []):
            for key in ("unit", "title", "topics", "lessons"):
                if key not in u:
                    errors.append(f"SYLLABUS UNIT MISSING {key}: {name} unit {u.get('unit')}")
            if not u.get("topics"):
                errors.append(f"SYLLABUS UNIT EMPTY TOPICS: {name} unit {u.get('unit')}")
            if not u.get("lessons"):
                errors.append(f"SYLLABUS UNIT EMPTY LESSONS: {name} unit {u.get('unit')}")
            for slug in u.get("lessons", []):
                t = topics_by_slug.get(slug)
                if t is None:
                    errors.append(f"SYLLABUS SLUG NOT IN TOPICS: {name} unit {u.get('unit')} -> {slug}")
                elif t["subject"] != syl.get("subject"):
                    errors.append(f"SYLLABUS CROSS-SUBJECT SLUG: {name} unit {u.get('unit')} -> {slug}")
    return errors


def check_markdown_sources():
    errors = []
    md_files = glob.glob(os.path.join(ROOT, "..", "src", "content", "subjects", "**", "*.md"), recursive=True)
    if not md_files:
        return errors  # .md content sources are optional; core validation needs only stdlib
    try:
        import yaml
    except ImportError:
        return ["PyYAML is required to validate .md sources: pip install pyyaml"]
    for path in md_files:
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
    errors = check_topics_json() + check_syllabus_files() + check_markdown_sources()
    if errors:
        for e in errors:
            print(e)
        print(f"\n{len(errors)} error(s) found.")
        sys.exit(1)
    print("All content valid.")


if __name__ == "__main__":
    main()
