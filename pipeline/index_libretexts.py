#!/usr/bin/env python3
"""
Index the LibreTexts corpus (books/hf/libretexts/libretexts-0000.json.gz) into:
  1. books/hf/libretexts/pages.jsonl  — one JSON per line:
     {line, id, title, author, license, url, shelf, text(first 12000 chars)}
  2. pipeline/libretexts-kw.pkl — keyword sets per page for the matcher:
     [{line, title_kw, body_kw}] (pickled sets, ~40k entries)

Run once (re-run only when the corpus changes). Takes a few minutes.
"""
import gzip, json, os, pickle, re, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(ROOT, "books", "hf", "libretexts", "libretexts-0000.json.gz")
OUT_JSONL = os.path.join(ROOT, "books", "hf", "libretexts", "pages.jsonl")
OUT_PKL = os.path.join(ROOT, "pipeline", "libretexts-kw.pkl")

STOP = set("""a an the of and or to in for with on by is are be as at from that this it its
into than then they them their there here we you your our us i not no can will would should
could may might must do does did done has have had was were what which who whom when where why
how all any some more most other another each every both few many much very using use used
between during since while about after before under over also because if but so such""".split())

def kw(text):
    return {w for w in re.findall(r"[a-z]{4,}", text.lower()) if w not in STOP}

def main():
    n = kept = 0
    kwlist = []
    with gzip.open(SRC, "rt", encoding="utf-8", errors="ignore") as gz, \
         open(OUT_JSONL, "w", encoding="utf-8") as out:
        for line in gz:
            n += 1
            try:
                r = json.loads(line)
            except Exception:
                continue
            meta = r.get("metadata") or {}
            title = (meta.get("title") or "").strip()
            text = (r.get("text") or "")
            if not title or len(text.split()) < 200:
                continue
            kept += 1
            url = meta.get("url") or r.get("id") or ""
            shelf = ""
            m = re.search(r"/Bookshelves/([^/]+)/", url)
            if m:
                shelf = m.group(1)
            trimmed = text[:12000]
            rec = {"line": kept, "id": r.get("id"), "title": title,
                   "author": meta.get("author", ""), "license": meta.get("license", ""),
                   "url": url, "shelf": shelf, "text": trimmed}
            out.write(json.dumps(rec, ensure_ascii=False) + "\n")
            tk = kw(title)
            bk = kw(trimmed)
            if tk and bk:
                kwlist.append({"line": kept, "title": title, "title_kw": tk, "body_kw": bk})
            if kept % 5000 == 0:
                print(f"  {kept} pages kept (scanned {n})...", flush=True)
    with open(OUT_PKL, "wb") as f:
        pickle.dump(kwlist, f, protocol=4)
    print(f"done: {kept} pages indexed (of {n} scanned)")
    print(f"  {OUT_JSONL} = {os.path.getsize(OUT_JSONL)/1e6:.0f} MB")
    print(f"  {OUT_PKL} = {os.path.getsize(OUT_PKL)/1e6:.0f} MB")

if __name__ == "__main__":
    main()
