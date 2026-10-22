#!/usr/bin/env python3
"""Check sift answers for length and for the mechanical faults assessors mark down.

Usage:
    check_answer.py [--words N | --chars N] [--no-spaces] FILE [FILE ...]

Each FILE holds one answer as plain text or Markdown. If the file's first line starts with
"Question", the first paragraph is treated as the question and is excluded from the counts (and
used to detect the question's words handed back). Text in [square brackets] is treated as a
working note that must be resolved before submission; it is excluded from the counts and
reported. Two kinds are counted separately: asks, "[ask: ...]", which a scaffold leaves where an
element is missing, and source tags, "[S2]", which a scaffold puts on every sentence until the
writer confirms it. A close paraphrase of a source is tagged "[paraphrase]". A scaffold's
label and its closing count line are bracketed too, "[scaffold: ...]" and "[count: ...]",
so they never count as answer text.

The script reports, per file: word and character counts; whether the limit is exceeded;
unresolved notes; acronyms with no definition in the file; hedges; generic phrases; tell
sentences; the ratio of "we" to "I"; and phrases of five or more words repeated from the
question. Across files it reports sentences repeated between answers. The hedge, generic and
tell flags are pointers, not verdicts: "tried to" is a hedge in "I tried to improve it" and a
fact in "residents tried to report". Read each flag against its sentence.

Exit status is 1 when any answer is over its limit or still carries working notes, else 0.
Python 3 standard library only.
"""

from __future__ import annotations

import argparse
import re
import sys
from pathlib import Path
from typing import Dict, List, Optional, Tuple

HEDGES = [
    "helped to", "helped with", "was involved in", "were involved in", "i think", "i feel",
    "sort of", "kind of", "a bit", "quite ", "various", " etc", "and so on", "i believe",
    "arguably", "tried to", "attempted to", "assisted with", "supported the delivery",
    "played a part in", "played a role in", "was responsible for ensuring", "contributed to the",
]

GENERIC = [
    "passionate about", "hit the ground running", "fast-paced", "results-driven", "team player",
    "excellent communication skills", "strong communication skills", "stakeholders at all levels",
    "outside the box", "above and beyond", "wealth of experience", "proven track record",
    "leverage", "synerg", "best practice", "in today's", "a wide range of", "various stakeholders",
    "ensure that", "going forward", "key stakeholders", "drive improvements", "deliver value",
    "extensive experience", "throughout my career", "i always", "i am passionate",
]

TELL_OPENERS = [
    "this demonstrates", "this shows", "this highlights", "this experience taught me",
    "this taught me", "i am a ", "i am someone who", "i consider myself", "overall, ",
]

KNOWN_ACRONYMS = {"UK", "EU", "US", "USA", "I", "A", "OK", "AI"}

NOTE_RE = re.compile(r"\[[^\]]*\]")
ACRONYM_RE = re.compile(r"\b[A-Z][A-Z0-9]{1,5}\b")
SENTENCE_SPLIT_RE = re.compile(r"(?<=[.!?])\s+")
WORD_RE = re.compile(r"\S+")


def read_answer(path: Path) -> Tuple[Optional[str], str]:
    """Return (question, answer_text). The question is the first paragraph when it starts with
    'Question'; otherwise None and the whole file is the answer."""
    raw = path.read_text(encoding="utf-8")
    if raw.lstrip().lower().startswith("question"):
        parts = re.split(r"\n\s*\n", raw.strip(), maxsplit=1)
        if len(parts) == 2:
            return parts[0].strip(), parts[1].strip()
        return parts[0].strip(), ""
    return None, raw.strip()


def strip_notes(text: str) -> Tuple[str, List[str]]:
    notes = NOTE_RE.findall(text)
    return NOTE_RE.sub("", text), notes


def count_words(text: str) -> int:
    return len(WORD_RE.findall(text))


def count_chars(text: str, with_spaces: bool) -> int:
    collapsed = re.sub(r"\s+", " ", text).strip()
    return len(collapsed) if with_spaces else len(collapsed.replace(" ", ""))


def sentences(text: str) -> List[str]:
    return [s.strip() for s in SENTENCE_SPLIT_RE.split(text) if s.strip()]


def normalise(sentence: str) -> str:
    return re.sub(r"[^a-z0-9 ]", "", re.sub(r"\s+", " ", sentence.lower())).strip()


def find_phrases(text: str, phrases: List[str]) -> List[str]:
    lowered = " " + text.lower() + " "
    return [p.strip() for p in phrases if p in lowered]


def find_tells(text: str) -> List[str]:
    found = []
    for s in sentences(text):
        low = s.lower()
        if any(low.startswith(opener) for opener in TELL_OPENERS):
            found.append(s)
    return found


def find_undefined_acronyms(text: str) -> List[str]:
    """An acronym counts as defined when it appears in parentheses, as in 'General Data
    Protection Regulation (GDPR)', anywhere in the same file."""
    found = set()
    for token in ACRONYM_RE.findall(text):
        if token in KNOWN_ACRONYMS or token.isdigit():
            continue
        if re.search(r"\(" + re.escape(token) + r"\)", text):
            continue
        found.add(token)
    return sorted(found)


def pronoun_ratio(text: str) -> Tuple[int, int]:
    words = [w.lower().strip(".,;:!?\"'()") for w in WORD_RE.findall(text)]
    first = sum(1 for w in words if w in {"i", "me", "my", "mine", "i'd", "i've", "i'm"})
    plural = sum(1 for w in words if w in {"we", "us", "our", "ours", "we'd", "we've", "we're"})
    return first, plural


def question_echo(question: Optional[str], text: str, n: int = 5) -> List[str]:
    if not question:
        return []
    q_words = [w.lower().strip(".,;:!?\"'()") for w in WORD_RE.findall(question)]
    a_words = [w.lower().strip(".,;:!?\"'()") for w in WORD_RE.findall(text)]
    q_grams = {" ".join(q_words[i : i + n]) for i in range(len(q_words) - n + 1)}
    a_grams = {" ".join(a_words[i : i + n]) for i in range(len(a_words) - n + 1)}
    return sorted(q_grams & a_grams)


def check_file(path: Path, args: argparse.Namespace) -> Tuple[List[str], bool, List[str]]:
    """Return (report lines, hard failure, normalised sentences)."""
    question, raw_answer = read_answer(path)
    answer, notes = strip_notes(raw_answer)
    lines: List[str] = [f"== {path}"]
    hard = False

    words = count_words(answer)
    chars_sp = count_chars(answer, True)
    chars_nosp = count_chars(answer, False)
    lines.append(f"words {words}; characters {chars_sp} with spaces, {chars_nosp} without")

    if args.words is not None and words > args.words:
        lines.append(f"OVER the word limit of {args.words} by {words - args.words}")
        hard = True
    if args.chars is not None:
        measured = chars_nosp if args.no_spaces else chars_sp
        if measured > args.chars:
            lines.append(f"OVER the character limit of {args.chars} by {measured - args.chars}")
            hard = True

    if notes:
        hard = True
        asks = [n for n in notes if n.lower().startswith("[ask")]
        tags = [n for n in notes if re.fullmatch(r"\[(?:S\d+(?:,\s*S\d+)*|paraphrase)\]", n)]
        labels = [n for n in notes if n.lower().startswith(("[scaffold:", "[count:"))]
        other = [n for n in notes if n not in asks and n not in tags and n not in labels]
        lines.append(
            f"UNRESOLVED working notes ({len(notes)}): {len(asks)} asks still to answer, "
            f"{len(tags)} source tags still to confirm, {len(labels)} scaffold labels to remove, "
            f"{len(other)} other"
        )
        lines.extend(f"  {n}" for n in asks + other)

    acronyms = find_undefined_acronyms(answer)
    if acronyms:
        lines.append("acronyms with no '(ACRONYM)' definition in this answer: " + ", ".join(acronyms))

    hedges = find_phrases(answer, HEDGES)
    if hedges:
        lines.append("hedges: " + ", ".join(hedges))

    generic = find_phrases(answer, GENERIC)
    if generic:
        lines.append("generic phrases: " + ", ".join(generic))

    tells = find_tells(answer)
    if tells:
        lines.append("tell sentences:")
        lines.extend(f"  {t}" for t in tells)

    first, plural = pronoun_ratio(answer)
    note = " (more 'we' than 'I': whose decision was it?)" if plural > first else ""
    lines.append(f"first person {first}, plural {plural}{note}")

    echoes = question_echo(question, answer)
    if echoes:
        lines.append("the question's own words handed back: " + "; ".join(f'"{e}"' for e in echoes))

    normalised = [normalise(s) for s in sentences(answer) if len(s) >= 40]
    return lines, hard, normalised


def main(argv: Optional[List[str]] = None) -> int:
    parser = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    parser.add_argument("files", nargs="+", type=Path, help="answer files, one answer each")
    limit = parser.add_mutually_exclusive_group()
    limit.add_argument("--words", type=int, help="word limit per answer")
    limit.add_argument("--chars", type=int, help="character limit per answer")
    parser.add_argument("--no-spaces", action="store_true", help="count characters without spaces (default: with)")
    args = parser.parse_args(argv)

    any_hard = False
    seen: Dict[str, List[str]] = {}
    for path in args.files:
        if not path.is_file():
            print(f"== {path}\nnot a file", file=sys.stderr)
            any_hard = True
            continue
        lines, hard, normalised = check_file(path, args)
        any_hard = any_hard or hard
        print("\n".join(lines))
        print()
        for s in normalised:
            seen.setdefault(s, []).append(str(path))

    repeats = {s: paths for s, paths in seen.items() if len(set(paths)) > 1}
    if repeats:
        print("== sentences repeated across answers")
        for s, paths in repeats.items():
            print(f'  "{s[:80]}..." in {", ".join(sorted(set(paths)))}')
        print()

    print("RESULT: " + ("hard failures present" if any_hard else "no hard failures"))
    return 1 if any_hard else 0


if __name__ == "__main__":
    sys.exit(main())
