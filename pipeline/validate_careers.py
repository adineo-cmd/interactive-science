#!/usr/bin/env python3
"""Validate astro-website/src/data/careers/*.json against the O*NET database pack.

Checks (hard-fail):
- subject exists in topics.json; intro present
- 3-6 roles; each role's title+code pair exists EXACTLY in the O*NET 31.0
  occupation data pack (anti-hallucination core)
- code format ^\\d{2}-\\d{4}\\.\\d{2}$; codes unique within the page
- ooh URL is a https://www.bls.gov/ooh/ page
- pay carries a $ amount and a year; growth carries % and a period; entry nonempty
- prose fields free of < > { } backslash and sensible lengths

Usage: python3 -I pipeline/validate_careers.py
"""
import glob
import json
import os
import re
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SITE = os.path.join(ROOT, "astro-website")
PACK = os.path.join(ROOT, "pipeline", "packs", "onet-31-occupation-data.txt")
BANNED = re.compile(r"[<>{}\\]")


def load_onet():
    pairs = set()
    with open(PACK, encoding="utf-8") as f:
        header = f.readline()
        if not header.startswith("#"):
            f.seek(0)
        for line in f:
            line = line.rstrip("\n")
            if not line or line.startswith("#"):
                continue
            parts = line.split("\t")
            if len(parts) < 2:
                continue
            code, title = parts[0].strip(), parts[1].strip()
            pairs.add((code, title))
    return pairs


def problems_for(subject, doc, pairs):
    probs = []
    if not isinstance(doc.get("intro"), str) or not 60 <= len(doc["intro"]) <= 400:
        probs.append("intro length/missing")
    if BANNED.search(doc.get("intro", "")):
        probs.append("intro banned chars")
    roles = doc.get("roles")
    if not isinstance(roles, list) or not 3 <= len(roles) <= 6:
        probs.append(f"roles count {len(roles) if isinstance(roles, list) else 'n/a'} outside 3-6")
        return probs
    seen = set()
    for i, r in enumerate(roles):
        tag = f"role[{i}]"
        code, title = r.get("code", ""), r.get("title", "")
        if not re.fullmatch(r"\d{2}-\d{4}\.\d{2}", code):
            probs.append(f"{tag} bad code {code!r}")
        elif code in seen:
            probs.append(f"{tag} duplicate code {code}")
        else:
            seen.add(code)
        if (code, title) not in pairs:
            probs.append(f"{tag} title/code not in O*NET db: {title!r} + {code}")
        if not str(r.get("ooh", "")).startswith("https://www.bls.gov/ooh/"):
            probs.append(f"{tag} ooh URL not BLS OOH: {r.get('ooh', '')!r}")
        pay, growth = r.get("pay", ""), r.get("growth", "")
        if not (re.search(r"\$\s?\d", pay) and re.search(r"\b(19|20)\d{2}\b", pay)):
            probs.append(f"{tag} pay missing $amount or year: {pay!r}")
        if not (re.search(r"\d+\s?%", growth) and re.search(r"\d{4}", growth)):
            probs.append(f"{tag} growth missing % or period: {growth!r}")
        if not 3 <= len(r.get("entry", "")) <= 120:
            probs.append(f"{tag} entry missing/long")
        for field, lo, hi in (("what", 80, 500), ("where", 40, 300)):
            v = r.get(field, "")
            if not lo <= len(v) <= hi:
                probs.append(f"{tag} {field} length {len(v)} outside {lo}-{hi}")
            elif BANNED.search(v):
                probs.append(f"{tag} {field} banned chars")
    return probs


def main():
    if not os.path.exists(PACK):
        print(f"O*NET pack missing: {PACK}")
        sys.exit(1)
    pairs = load_onet()
    print(f"O*NET pack loaded: {len(pairs)} occupation title/code pairs")
    subjects = {s["id"] for s in json.load(open(os.path.join(SITE, "src", "data", "topics.json")))["subjects"]}
    files = sorted(glob.glob(os.path.join(SITE, "src", "data", "careers", "*.json")))
    bad = 0
    for f in files:
        sid = os.path.splitext(os.path.basename(f))[0]
        doc = json.load(open(f, encoding="utf-8"))
        if doc.get("subject") != sid or sid not in subjects:
            print(f"FAIL {sid}: subject field mismatch or unknown subject")
            bad += 1
            continue
        probs = problems_for(sid, doc, pairs)
        if probs:
            bad += 1
            for p in probs:
                print(f"FAIL {sid}: {p}")
        else:
            print(f"PASS {sid}: {len(doc['roles'])} roles verified")
    print(f"\ncareers: {len(files) - bad}/{len(files)} pages valid")
    sys.exit(1 if bad else 0)


if __name__ == "__main__":
    main()
