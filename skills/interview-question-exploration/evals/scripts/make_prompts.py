#!/usr/bin/env python3
"""Build the eval prompts from the fixtures and the skill. Prints to the screen only.

Usage:
  make_prompts.py --skill PATH [--questions FILE] [--scheme FILE] [--answers FILE ...]
                  [--role TEXT] (inference | default | scheme)

inference  the skill's step 1 run by a fresh reader with the skill and the questions only
default    a fresh reader scoring every answer with the skill's default rubric
scheme     a fresh reader scoring every answer with the marking scheme in --scheme, one block
           per question, in question order (blocks are "## " sections, or paragraphs separated
           by two or more blank lines)

Defaults: the invented questions, scheme and answers in fixtures/. Other fixture files of the
same shape can be named with --questions, --scheme and --answers, as plain text. The functions
take text, so a caller that holds its fixtures elsewhere can import this module and pass the
text in.

Answer files are plain text or Markdown; each answer under a "## " heading that names its
question and set, so the reader can score each on its own.
"""

import argparse
import re
import sys
from pathlib import Path

HERE = Path(__file__).resolve().parent
FIXTURES = HERE.parent / "fixtures"

DEFAULT_ROLE = (
    "an assessor at a borough council, scoring the anonymised sift for a Head of Digital "
    "Service post"
)

RUBRIC_DEFAULT = (
    "Score from 1 to 5. One is an empty answer: generic, off the question, could be anyone's. "
    "Three is a sound answer: a specific real example, the applicant's own actions clear, every "
    "part of the question answered, an outcome stated. Five is a full answer that is excellent: "
    "everything in three, and the other people in the situation appear as people the applicant "
    "read and responded to, the method is named and the reason for choosing it given where the "
    "question asks how, the cost and any obstacles are honest and navigated, the outcome is "
    "checkable and of the kind this criterion is about, the applicant states an honest judgement "
    "about what worked and what they would refine, and something they left in place is named (a "
    "check that runs, a runbook that is used, a person who now owns the thing, a way of deciding "
    "the team adopted), each as an act rather than a belief about themselves."
)

REPORT_FORMAT = """For each answer, report in this format and nothing else:

Answer: [label]
Score: [1 to 5]
What I now believe about this applicant against the criterion: [two or three sentences]
The sentence that most earned the score: "[exact quote]"
The sentence that most cost it: "[exact quote]"
What was noise for me: [quoted sentences, each with why]
The one thing that would move this up a star: [one sentence]
"""


def reader_preamble(role: str) -> str:
    return (
        f"You are {role}. You have no CV, no name and no other context. Each answer below is "
        "scored on its own against the question it answers, under the employer's note to "
        "applicants in the brief. Read each answer once, at an assessor's pace. Quote exactly. "
        "Describe effects; propose no wording.\n"
    )


def prompt_inference(skill: Path, questions_path: Path) -> str:
    return f"""You are running step 1 of the skill at {skill} ("Read the questions as the assessor
will"). Read {skill}/SKILL.md and {skill}/references/rubric.md, and the questions and published
criteria in {questions_path}. Read nothing else: no other file in that skill, nothing elsewhere
in this directory tree.

For each question, write the step 1 reading in full, as the brief's table asks: the criterion it
tests; the parts of the question; the behaviour the question's author is screening out at one
star; what a three-star answer contains; what a five-star answer adds, including the method or
judgement it rewards; the counterpart who must appear; the kind of outcome that counts; and what
the author probably hopes will persist. Be concrete: name the method kinds, the outcome kinds and
the behaviours. Output the readings and nothing else.
"""


def scheme_blocks(text: str) -> list:
    text = text.strip()
    if re.search(r"^## ", text, re.M):
        parts = re.split(r"^## ", text, flags=re.M)[1:]
        return [p.strip() for p in parts if p.strip()]
    return [b.strip() for b in re.split(r"\n\s*\n\s*\n", text) if b.strip()]


def prompt_scoring(rubric_blocks: list, role: str, questions_text: str, answers_texts: list) -> str:
    body = [reader_preamble(role), "The questions and published criteria:\n", questions_text]
    body.append("\nThe marking scheme, per question:\n")
    for n, block in enumerate(rubric_blocks, start=1):
        body.append(f"Question {n}:\n{block}\n")
    body.append(REPORT_FORMAT)
    body.append("\nThe answers. Labels name the question and the set; score each on its own.\n")
    for text in answers_texts:
        body.append(text.strip())
        body.append("\n")
    return "\n".join(body)


def main() -> None:
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--skill", required=True, type=Path)
    ap.add_argument("--questions", type=Path, default=FIXTURES / "questions-and-criteria.md")
    ap.add_argument("--scheme", type=Path, default=FIXTURES / "marking-scheme.md")
    ap.add_argument("--answers", nargs="*", default=[str(FIXTURES / "synthetic-answers.md")])
    ap.add_argument("--role", default=DEFAULT_ROLE, help="who the scoring reader is, in a phrase")
    ap.add_argument("which", choices=["inference", "default", "scheme"])
    args = ap.parse_args()
    skill = args.skill.resolve()
    if args.which == "inference":
        print(prompt_inference(skill, args.questions.resolve()))
        return
    questions = args.questions.read_text(encoding="utf-8")
    answers = [Path(p).read_text(encoding="utf-8") for p in args.answers]
    if args.which == "default":
        n = len(scheme_blocks(args.scheme.read_text(encoding="utf-8"))) if args.scheme.is_file() else 4
        print(prompt_scoring([RUBRIC_DEFAULT] * n, args.role, questions, answers))
        return
    if not args.scheme.is_file():
        sys.exit("the scheme variant needs --scheme pointing at a readable file")
    print(prompt_scoring(scheme_blocks(args.scheme.read_text(encoding="utf-8")), args.role, questions, answers))


if __name__ == "__main__":
    main()
