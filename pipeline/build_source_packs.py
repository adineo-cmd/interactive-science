#!/usr/bin/env python3
"""
Source-pack builder for the Interactive Atlas content pipeline.

Strategy (user directive, 2026-11-04): extract content from open-licensed
textbooks (OpenStax / LibreTexts / NCERT / MedRAG) instead of generating it
with AI. AI is used later only to: simplify hard passages, fill gaps, place
interactive widgets, and check consistency — per PEDAGOGY.md.

This script:
 1. Parses each OpenStax book text (books/hf/openstax/*.txt) into sections.
 2. Maps every Interactive Atlas lesson (src/pages/subjects/*/*/*.astro)
    to the best-matching source sections via full-text similarity between
    the lesson's summary/syllabus topics and section bodies.
 3. Emits a "source pack" per lesson: pipeline/packs/<slug>.md containing
    lesson metadata + the full text of matched sections + attribution.
    Downstream (AI or human) transforms a pack into the final lesson page.

Usage:  python3 pipeline/build_source_packs.py [--subject physics] [--tier foundational] [--limit N]
"""
import glob, json, math, os, pickle, re, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SITE = os.path.join(ROOT, "astro-website")
BOOKS = os.path.join(ROOT, "books", "hf", "openstax")
PACKS = os.path.join(ROOT, "pipeline", "packs")

ATTRIBUTION = (
    "Source text: OpenStax (https://openstax.org), CC BY 4.0. "
    "Adapted and simplified for Interactive Atlas; interactive widgets added."
)

STOP = set("""a an the of and or to in for with on by is are be as at from that this it its
into than then they them their there here we you your our us i not no can will would should
could may might must do does did done has have had was were what which who whom when where why
how all any some more most other another each every both few many much very using use used
between during since while about after before under over also because if but so such""".split())

HEAD = re.compile(r"^\s*(\d{1,2})\.(\d{1,2})\s+([A-Z][A-Za-z0-9,:'\u2019\-\u2013\u2014 ()&]{8,90})\s*$")
BAD_TITLE = re.compile(r"\b(find|calculate|determine|compute|solve|how much|how many)\b", re.I)


def kw(text):
    return {w for w in re.findall(r"[a-z]{4,}", text.lower()) if w not in STOP}


def load_books():
    """Parse every OpenStax .txt into {book: {section_no: (title, body)}}.

    The strict heading class excludes TOC lines (they carry dotted page-number
    leaders). The same heading can recur later (problem references) — the
    longest body wins. Sections with fewer than 250 words are dropped.
    """
    library = {}
    for path in sorted(glob.glob(os.path.join(BOOKS, "*.txt"))):
        book = os.path.basename(path)[:-4]
        lines = open(path, encoding="utf-8", errors="ignore").read().splitlines()
        raw = {}
        cur_no, cur_title, buf = None, None, []
        for ln in lines:
            m = HEAD.match(ln)
            if m and BAD_TITLE.search(m.group(3)):
                m = None
            if m:
                if cur_no is not None:
                    prev = raw.get(cur_no)
                    if prev is None or len(buf) > len(prev[1].split()):
                        raw[cur_no] = (cur_title, "\n".join(buf))
                cur_no = f"{int(m.group(1))}.{int(m.group(2))}"
                cur_title = m.group(3).strip()
                buf = []
            elif cur_no is not None:
                buf.append(ln)
        if cur_no is not None:
            prev = raw.get(cur_no)
            if prev is None or len(buf) > len(prev[1].split()):
                raw[cur_no] = (cur_title, "\n".join(buf))
        sections = {no: (ti, tx) for no, (ti, tx) in raw.items()
                    if len(tx.split()) >= 250}
        if len(sections) >= 5:          # a book we actually parsed
            library[book] = sections
    return library


def similarity(title_kw, summary_kw, sec_title, sec_body):
    """Weighted overlap: the lesson TITLE dominates; the summary provides context."""
    body_kw = kw(sec_body[:12000])
    if not title_kw or not body_kw:
        return 0.0
    tsec = len(title_kw & kw(sec_title)) / max(1, len(title_kw))   # title words in section title
    tbody = len(title_kw & body_kw) / max(1, len(title_kw))        # title words in section body
    cos = 0.0
    if summary_kw and body_kw:
        cos = len(summary_kw & body_kw) / math.sqrt(len(summary_kw) * len(body_kw))
    return 2.0 * tsec + 1.0 * tbody + 0.5 * cos


def main():
    args = sys.argv[1:]
    subject_filter = args[args.index("--subject") + 1] if "--subject" in args else None
    tier_filter = args[args.index("--tier") + 1] if "--tier" in args else None
    limit = int(args[args.index("--limit") + 1]) if "--limit" in args else None

    library = load_books()
    nsec = sum(len(s) for s in library.values())
    print(f"parsed {len(library)} books, {nsec} sections total")

    LT_KW = os.path.join(ROOT, "pipeline", "libretexts-kw.pkl")
    LT_PAGES = os.path.join(ROOT, "books", "hf", "libretexts", "pages.jsonl")
    lt = pickle.load(open(LT_KW, "rb")) if os.path.exists(LT_KW) else []
    if lt:
        print(f"LibreTexts index: {len(lt)} pages")

    # pre-compute per-section keyword sets once (the scan is repeated per lesson)
    body_cache = {}
    title_cache = {}
    for book, sections in library.items():
        for no, (stitle, stext) in sections.items():
            body_cache[(book, no)] = kw(stext[:12000])
            title_cache[(book, no)] = kw(stitle)

    topics = json.load(open(os.path.join(SITE, "src", "data", "topics.json"),
                            encoding="utf-8"))["topics"]
    lessons = sorted(glob.glob(
        os.path.join(SITE, "src", "pages", "subjects", "*", "*", "*.astro")))
    if subject_filter:
        lessons = [p for p in lessons if f"/{subject_filter}/" in p]
    if tier_filter:
        lessons = [p for p in lessons if f"/{tier_filter}/" in p]
    if limit:
        lessons = lessons[:limit]

    os.makedirs(PACKS, exist_ok=True)
    built = nocover = 0
    for p in lessons:
        slug = p.replace(SITE + os.sep + "src" + os.sep + "pages" + os.sep,
                         "").replace(".astro", "").replace(os.sep, "/")
        subject = slug.split("/")[1]
        topic = next((t for t in topics if t["slug"] == slug), None)
        title = topic["title"] if topic else slug.rsplit("/", 1)[-1]
        summary = (topic.get("summary") or "") if topic else ""
        unit_title = ""
        spath = os.path.join(SITE, "src", "data", "syllabus", f"{subject}.json")
        if os.path.exists(spath):
            for u in json.load(open(spath, encoding="utf-8")).get("program", []):
                if slug in u.get("lessons", []):
                    unit_title = u.get("title", "")
                    summary += " " + " ".join(u.get("topics", []))
                    break
        title_kw = kw(title)
        summary_kw = kw(summary) | title_kw
        if not title_kw:
            continue

        scored = []
        for book, sections in library.items():
            for no, (stitle, stext) in sections.items():
                bkw = body_cache[(book, no)]
                if not title_kw or not bkw:
                    continue
                tsec = len(title_kw & title_cache[(book, no)]) / max(1, len(title_kw))
                tbody = len(title_kw & bkw) / max(1, len(title_kw))
                cos = 0.0
                if summary_kw and bkw:
                    cos = len(summary_kw & bkw) / math.sqrt(len(summary_kw) * len(bkw))
                s = 2.0 * tsec + 1.0 * tbody + 0.5 * cos
                if s > 0:
                    scored.append((s, book, no, stitle))
        for e in lt:
            bkw = e["body_kw"]
            if not title_kw or not bkw:
                continue
            tsec = len(title_kw & e["title_kw"]) / max(1, len(title_kw))
            tbody = len(title_kw & bkw) / max(1, len(title_kw))
            cos = 0.0
            if summary_kw and bkw:
                cos = len(summary_kw & bkw) / math.sqrt(len(summary_kw) * len(bkw))
            s = 2.0 * tsec + 1.0 * tbody + 0.5 * cos
            if s > 0:
                scored.append((s, "LT", e["line"], e["title"]))
        scored.sort(reverse=True)
        top = scored[:3]
        low = False
        if not top or top[0][0] < 0.6:
            top = [x for x in scored if x[0] >= 0.25][:3]
            if not top:
                nocover += 1
                continue
            low = True
        lvl = topic.get("level", "?") if topic else "?"
        out = [f"# Source pack — {slug}",
               f"Lesson title: {title}",
               f"Level: {lvl}",
               f"Match confidence: {top[0][0]:.2f}" + ("  [LOW — lean on AI generation for structure, verify every fact]" if low else ""),
               "",
               ATTRIBUTION,
               ""]
        seen_titles = set()
        shown = 0
        for s, book, no, stitle in top:
            key = re.sub(r"[^a-z0-9]", "", stitle.lower())[:40]
            if key in seen_titles:
                continue
            seen_titles.add(key)
            shown += 1
            if book == "LT":
                rec = None
                with open(LT_PAGES, encoding="utf-8") as pf:
                    for i, pl in enumerate(pf, 1):
                        if i == no:
                            rec = json.loads(pl)
                            break
                if not rec:
                    continue
                lic = rec.get("license") or "CC BY"
                out += [f"## Match {s:.2f} — LibreTexts: {stitle}",
                        f"License: {lic} · {rec.get('url','')}",
                        "",
                        rec.get("text", "")[:14000], ""]
            else:
                body = library[book][no][1]
                out += [f"## Match {s:.2f} — {book} § {no} {stitle}", "",
                        body[:14000], ""]
            if shown >= 3:
                break
        pack_path = os.path.join(PACKS, slug.replace("/", "__") + ".md")
        open(pack_path, "w", encoding="utf-8").write("\n".join(out))
        built += 1
    print(f"built {built} source packs; {nocover} lessons without a confident match")


if __name__ == "__main__":
    main()
