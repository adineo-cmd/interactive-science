#!/usr/bin/env python3
"""Insert per-paragraph interactive activities into lesson .astro files.

Input: a batch JSON file (path given as argv[1]) of the form:
{
  "slug": "subjects/physics/intermediate/circuits-and-ohms-law",
  "activities": [
    {
      "anchor": "unique text snippet from the target paragraph",
      "type": "predict",                  # widget type
      "caption": "bet before you read on",# figcaption voice
      "name": "ohmPredict",               # frontmatter const name
      "config": { ... }                   # widget config (JSON-serializable)
    }
  ]
}

For each activity the script:
  1. finds the anchor text inside the lesson body (must occur exactly once,
     and not inside an existing widget figure or frontmatter),
  2. inserts `const <name> = {...};` into the frontmatter (before closing ---),
  3. inserts `<Widget no="N" caption="..." widget="type" config={<name>} />`
     immediately after the anchor's closing </p> (numbers continue past the
     lesson's current max fig number),
  4. verifies: file parses structurally (frontmatter intact, balanced Widget
     lines), name is new, no anchor hits inside existing figures.

Run from repo root:  python3 -I pipeline/insert_activities.py pipeline/batches/<file>.json
Dry run:             python3 -I pipeline/insert_activities.py <file> --dry
"""
import json
import re
import sys
from pathlib import Path

REPO = Path(__file__).resolve().parent.parent
PAGES = REPO / "astro-website" / "src" / "pages"
DEVICE_H2 = re.compile(
    r"^(where you are|check yourself|key takeaways|where this goes next|going deeper)", re.I
)


def fail(msg):
    print(f"  ERROR: {msg}")
    sys.exit(1)


def anchor_pattern(text):
    """Anchor matching is whitespace-tolerant: words re-joined with \\s+."""
    return re.compile(r"\s+".join(re.escape(w) for w in text.split()))


def process(slug, activities, dry):
    path = PAGES / f"{slug}.astro"
    src = path.read_text()
    print(f"== {slug} ({len(activities)} activities)")

    # split frontmatter
    m = re.match(r"\A(---\n.*?\n---\n)(.*)\Z", src, re.S)
    if not m:
        fail("frontmatter not found")
    fm, body = m.group(1), m.group(2)

    # sanity: anchor uniqueness in the whole body, never inside a widget figure
    figures = list(re.finditer(r"<figure class=\"widget\">.*?</figure>", body, re.S))
    spans = {}
    for a in activities:
        pat = anchor_pattern(a["anchor"])
        hits = list(pat.finditer(body))
        if len(hits) != 1:
            fail(f"anchor not unique ({len(hits)} hits): {a['anchor'][:60]!r}")
        pos = hits[0].start()
        spans[a["name"]] = pos
        for f in figures:
            if f.start() <= pos < f.end():
                fail(f"anchor inside an existing widget figure: {a['anchor'][:60]!r}")

    # existing names + fig numbers
    names = set(re.findall(r"const\s+([A-Za-z]\w*)\s*=", fm))
    fig_nos = [int(n) for n in re.findall(r'<Widget[^>]*\bno="(\d+)"', body)]
    next_no = (max(fig_nos) if fig_nos else 0) + 1

    # build frontmatter additions
    consts = []
    for a in activities:
        if a["name"] in names:
            fail(f"name already defined: {a['name']}")
        names.add(a["name"])
        consts.append((a["name"], a["config"]))

    if not dry:
        # 1) frontmatter: insert before closing ---
        fm_block = "".join(
            f"\nconst {name} = {json.dumps(cfg, ensure_ascii=False, indent=2)};\n"
            for name, cfg in consts
        )
        assert fm.endswith("---\n")
        fm_len = len(fm) - 4 + len(fm_block) + 4  # offset of body in expanded file
        src = src[: len(fm) - 4] + fm_block + "---\n" + src[len(fm):]

        # 2) widget lines after each anchor's paragraph — positions were computed
        # in the unexpanded BODY, so an anchor that also appears inside an inserted
        # config JSON (in the frontmatter) can never mis-seat the widget. Insertions
        # are applied in DESCENDING body position so earlier inserts never shift
        # the positions of pending ones.
        new_src = src
        lines = []
        for a in sorted(activities, key=lambda x: -spans[x["name"]]):
            wline = (
                f'  <Widget no="{next_no}" caption="{a["caption"]}" '
                f'widget="{a["type"]}" config={{{a["name"]}}} />'
            )
            insert_at = fm_len + spans[a["name"]]
            close = new_src.find("</p>", insert_at)
            if close == -1:
                fail(f"no </p> after anchor: {a['anchor'][:60]!r}")
            insert_at = close + len("</p>")
            new_src = new_src[:insert_at] + "\n" + wline + new_src[insert_at:]
            lines.append((a["anchor"][:50], next_no))
            next_no += 1
        src = new_src

        path.write_text(src)

        # 3) verify
        out = path.read_text()
        assert out.count("<Widget") == body.count("<Widget") + len(activities), "widget count mismatch"
        for name, _ in consts:
            assert f"const {name} =" in out, f"const missing: {name}"
            assert f"config={{{name}}}" in out, f"config ref missing: {name}"
        mm = re.match(r"\A---\n.*?\n---\n", out, re.S)
        assert mm, "frontmatter broken"
        print(f"   inserted {len(activities)}, fig nos {lines[0][1]}–{lines[-1][1]}, frontmatter +{len(consts)} consts")


def main():
    batch_path = Path(sys.argv[1])
    dry = "--dry" in sys.argv
    batch = json.loads(batch_path.read_text())
    entries = batch if isinstance(batch, list) else [batch]
    for entry in entries:
        process(entry["slug"], entry["activities"], dry)
    print("done" + (" (dry run — nothing written)" if dry else ""))


if __name__ == "__main__":
    main()
