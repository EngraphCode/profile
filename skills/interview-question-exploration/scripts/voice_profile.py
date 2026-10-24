#!/usr/bin/env python3
"""Measure the habits of a writer's prose, from their samples or from finished answers.

Usage:
    voice_profile.py FILE [FILE ...] [--each]

Each FILE is plain text or Markdown written by one person. The script prints, for the files
together and (with --each) per file: words; sentences; words per sentence (median, and the mean
of the longest tenth); sentences per paragraph (median); "I" and "we" per 100 words;
contractions per 100 words; semicolons, dashes and parentheses per 1,000 words; the most used
connectives; and the most used verbs that follow "I". Lines that start with "#", ">" or "|" and
text in [square brackets] are ignored, so a Markdown sample or a scaffold can be measured as
prose.

The figures describe; they are not targets. Compare a writer's samples with their finished
answers and read the difference as a question for the line pass, never as a number to hit.
Python 3 standard library only.
"""

from __future__ import annotations

import argparse
import re
import statistics
import sys
from collections import Counter
from pathlib import Path
from typing import List

CONNECTIVES = [
    "so", "because", "but", "and then", "which meant", "which", "although", "though", "while",
    "rather than", "instead", "then", "after", "before", "once", "until", "when", "since", "as",
    "however", "therefore", "also", "additionally", "moreover", "in order to", "meanwhile",
]

PRONOUN_I = {"i", "i'd", "i've", "i'm", "i'll", "me", "my", "mine", "myself"}
PRONOUN_WE = {"we", "we'd", "we've", "we're", "we'll", "us", "our", "ours", "ourselves"}
CONTRACTION_RE = re.compile(
    r"\b(?:\w+n't|\w+'(?:re|ve|ll|d|m)|(?:it|he|she|that|there|what|who|let|here|where|how)'s)\b",
    re.I,
)
NOTE_RE = re.compile(r"\[[^\]]*\]")
WORD_RE = re.compile(r"[A-Za-z0-9'’]+")
SENTENCE_SPLIT_RE = re.compile(r"(?<=[.!?])\s+")


def prose_of(path: Path) -> str:
    lines = []
    for line in path.read_text(encoding="utf-8").splitlines():
        if line.lstrip().startswith(("#", ">", "|")):
            continue
        lines.append(line)
    return NOTE_RE.sub("", "\n".join(lines))


def paragraphs(text: str) -> List[str]:
    return [p.strip() for p in re.split(r"\n\s*\n", text) if p.strip()]


def sentences(text: str) -> List[str]:
    return [s.strip() for s in SENTENCE_SPLIT_RE.split(re.sub(r"\s+", " ", text)) if s.strip()]


def words(text: str) -> List[str]:
    return [w.replace("’", "'").lower() for w in WORD_RE.findall(text)]


def longest_tenth_mean(lengths: List[int]) -> float:
    if not lengths:
        return 0.0
    top = sorted(lengths, reverse=True)[: max(1, len(lengths) // 10)]
    return sum(top) / len(top)


def verbs_after_i(text: str) -> Counter:
    counts: Counter = Counter()
    for m in re.finditer(r"\bI\s+([a-z]+)", text):
        counts[m.group(1)] += 1
    for stop in ("was", "am", "had", "have", "would", "could", "did", "do", "think", "felt", "wanted", "could", "should", "will"):
        counts.pop(stop, None)
    return counts


def connectives_in(text: str) -> Counter:
    lowered = " " + re.sub(r"\s+", " ", text.lower()) + " "
    counts: Counter = Counter()
    for c in CONNECTIVES:
        n = len(re.findall(r"(?<![a-z])" + re.escape(c) + r"(?![a-z])", lowered))
        if n:
            counts[c] = n
    return counts


def report(label: str, text: str) -> List[str]:
    ws = words(text)
    ss = sentences(text)
    ps = paragraphs(text)
    n_words = len(ws) or 1
    lengths = [len(words(s)) for s in ss]
    per_para = [len(sentences(p)) for p in ps]
    i_count = sum(1 for w in ws if w in PRONOUN_I)
    we_count = sum(1 for w in ws if w in PRONOUN_WE)
    contractions = len(CONTRACTION_RE.findall(text))
    semis = text.count(";")
    dashes = len(re.findall(r"\s[-–—]\s|—", text))
    parens = text.count("(")
    lines = [f"== {label}"]
    lines.append(f"words {len(ws)}; sentences {len(ss)}; paragraphs {len(ps)}")
    if lengths:
        lines.append(
            f"words per sentence: median {statistics.median(lengths):.0f}, "
            f"shortest {min(lengths)}, longest {max(lengths)}, longest tenth mean {longest_tenth_mean(lengths):.0f}"
        )
    if per_para:
        lines.append(f"sentences per paragraph: median {statistics.median(per_para):.0f}")
    lines.append(f"'I' per 100 words {100 * i_count / n_words:.1f}; 'we' per 100 words {100 * we_count / n_words:.1f}")
    lines.append(f"contractions per 100 words {100 * contractions / n_words:.1f}")
    lines.append(
        f"per 1,000 words: semicolons {1000 * semis / n_words:.1f}, dashes {1000 * dashes / n_words:.1f}, "
        f"parentheses {1000 * parens / n_words:.1f}"
    )
    conn = connectives_in(text).most_common(6)
    lines.append("connectives: " + (", ".join(f"{c} ({n})" for c, n in conn) if conn else "none found"))
    verbs = verbs_after_i(text).most_common(8)
    lines.append("verbs after 'I': " + (", ".join(f"{v} ({n})" for v, n in verbs) if verbs else "none found"))
    return lines


def main(argv: List[str] | None = None) -> int:
    parser = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    parser.add_argument("files", nargs="+", type=Path)
    parser.add_argument("--each", action="store_true", help="also report each file on its own")
    args = parser.parse_args(argv)
    texts = []
    for path in args.files:
        if not path.is_file():
            print(f"== {path}\nnot a file", file=sys.stderr)
            return 1
        text = prose_of(path)
        texts.append(text)
        if args.each:
            print("\n".join(report(str(path), text)))
            print()
    print("\n".join(report("all files together", "\n\n".join(texts))))
    return 0


if __name__ == "__main__":
    sys.exit(main())
