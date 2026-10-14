"""Build index.html from template.html + transcript.json + edit.json.

transcript.json: [{ "text", "start", "end" }, ...] word-level (hyperframes transcribe)
edit.json:       hook / outro copy, emphasis words, word fixes
"""
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DURATION = 99.96
BASE = 1.085
PUNCH = 1.16
MAX_WORDS = 4
PAUSE_BREAK = 0.35


def load_words():
    raw = json.loads((ROOT / "transcript.json").read_text())
    words = []
    for w in raw:
        t = (w.get("text") or "").strip()
        if not t or re.fullmatch(r"[♪�\W_]+", t):
            continue
        words.append({"t": t, "s": float(w["start"]), "e": float(w["end"])})
    return words


def apply_fixes(words, fixes):
    for w in words:
        key = w["t"].lower().strip(".,!?")
        if key in fixes:
            w["t"] = fixes[key] + w["t"][len(w["t"].rstrip(".,!?")):]
    return words


def group(words, emphasis):
    groups, cur = [], []
    for i, w in enumerate(words):
        cur.append(w)
        nxt = words[i + 1] if i + 1 < len(words) else None
        sentence_end = w["t"][-1] in ".?!"
        gap = (nxt["s"] - w["e"]) if nxt else 99
        if len(cur) >= MAX_WORDS or sentence_end or gap > PAUSE_BREAK or nxt is None:
            groups.append(cur)
            cur = []
    out = []
    for gi, g in enumerate(groups):
        start = g[0]["s"]
        nxt_start = groups[gi + 1][0]["s"] if gi + 1 < len(groups) else DURATION
        # Hold a group on screen through short gaps, never past the next one.
        end = min(max(g[-1]["e"] + 0.25, start + 0.5), nxt_start)
        out.append({
            "start": round(start, 3),
            "end": round(end, 3),
            "words": [{
                "t": w["t"].rstrip(","),
                "s": round(w["s"], 3),
                "e": round(w["e"], 3),
                "em": w["t"].lower().strip(".,!?") in emphasis,
            } for w in g],
        })
    return out


def punches(groups, hook_end, outro_start):
    """Alternate base/punch framing at sentence starts, at least ~5s apart."""
    beats, last, state = [], hook_end - 0.5, False
    for i, g in enumerate(groups):
        prev = groups[i - 1] if i else None
        starts_sentence = prev is None or prev["words"][-1]["t"][-1:] in ".?!" or g["start"] - prev["end"] > 0.6
        if starts_sentence and g["start"] - last >= 5.0 and g["start"] < outro_start - 1:
            state = not state
            beats.append([round(g["start"], 3), PUNCH if state else BASE])
            last = g["start"]
    if state:
        beats.append([round(outro_start, 3), BASE])
    return beats


def main():
    edit = json.loads((ROOT / "build" / "edit.json").read_text())
    words = apply_fixes(load_words(), {k.lower(): v for k, v in edit.get("fixes", {}).items()})
    emphasis = {e.lower() for e in edit.get("emphasis", [])}
    groups = group(words, emphasis)
    hook_end, outro_start = edit["hook_end"], edit["outro_start"]
    beats = punches(groups, hook_end, outro_start)

    video = (ROOT / "build" / "video.html").read_text().strip()
    html = (ROOT / "build" / "template.html").read_text()
    for k, v in {
        "__VIDEO__": video,
        "__HOOK_END__": str(hook_end),
        "__HOOK_TAG__": edit["hook_tag"],
        "__HOOK_TITLE__": edit["hook_title"],
        "__OUTRO_START__": str(outro_start),
        "__OUTRO_DUR__": str(round(DURATION - outro_start, 2)),
        "__OUTRO_TEXT__": edit["outro_text"],
        "__GROUPS__": json.dumps(groups, ensure_ascii=False),
        "__PUNCHES__": json.dumps(beats),
    }.items():
        html = html.replace(k, v)
    (ROOT / "index.html").write_text(html)
    print(f"{len(words)} words, {len(groups)} groups, {len(beats)} camera beats", file=sys.stderr)


if __name__ == "__main__":
    main()
