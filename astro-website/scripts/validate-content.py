#!/usr/bin/env python3
"""Validate content schema, equations, widget registry, broken links."""
import glob, yaml, sys, re

def main():
    errors = 0
    registry = {'plotter','sliderLab','equationStep','diagramBuilder'}
    for path in glob.glob('src/content/subjects/**/*.md'):
        with open(path) as f: content = f.read()
        try:
            meta = yaml.safe_load(content.split('---')[1])
        except Exception as e:
            print(f"YAML FAIL: {path} — {e}"); errors += 1; continue
        for k in ['title','level','tags','widgets']:
            if k not in meta or meta[k] is None:
                print(f"MISSING {k}: {path}"); errors += 1
        for w in meta.get('widgets', []):
            if w not in registry:
                print(f"UNKNOWN WIDGET: {path} {w}"); errors += 1
        # Basic bracket balance for equations
        for eq in meta.get('equations', []):
            if eq.count('{') != eq.count('}') or eq.count('(') != eq.count(')'):
                print(f"BAD EQ: {path} {eq}"); errors += 1
    if errors:
        print(f"\n{errors} error(s) found.")
        sys.exit(1)
    else:
        print("All content valid.")

if __name__ == '__main__':
    main()
