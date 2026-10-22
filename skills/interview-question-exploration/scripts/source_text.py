#!/usr/bin/env python3
"""Print the text of source documents, one after another, each under a header with a source id.

Usage:
    source_text.py FILE [FILE ...]

Handles .txt and .md (as is), .docx (the document's paragraphs, via the zip's XML), .html and
.htm (tags stripped), and .pdf where the `pdftotext` command is installed. Anything else, and any
PDF without `pdftotext`, is reported so the writer can paste the text instead. Source ids S1, S2,
... are assigned in argument order; use the same order when building the knowledge base.

Python 3 standard library only. Nothing is written to disk.
"""

from __future__ import annotations

import html
import re
import shutil
import subprocess
import sys
import zipfile
from pathlib import Path


def docx_text(path: Path) -> str:
    with zipfile.ZipFile(path) as z:
        xml = z.read("word/document.xml").decode("utf-8", "replace")
    xml = re.sub(r"</w:p>", "\n", xml)
    xml = re.sub(r"<w:tab/>", "\t", xml)
    text = re.sub(r"<[^>]+>", "", xml)
    return html.unescape(text)


def html_text(path: Path) -> str:
    raw = path.read_text(encoding="utf-8", errors="replace")
    raw = re.sub(r"<(script|style)[\s\S]*?</\1>", "", raw, flags=re.I)
    raw = re.sub(r"<br\s*/?>|</(p|div|li|h[1-6]|tr|section)>", "\n", raw, flags=re.I)
    text = re.sub(r"<[^>]+>", "", raw)
    return html.unescape(text)


def pdf_text(path: Path) -> str:
    tool = shutil.which("pdftotext")
    if not tool:
        raise RuntimeError("no pdftotext on this machine; read the PDF directly if the agent can, or paste its text")
    result = subprocess.run([tool, "-layout", str(path), "-"], capture_output=True, text=True, check=False)
    if result.returncode != 0:
        raise RuntimeError(result.stderr.strip() or "pdftotext failed")
    return result.stdout


def read_source(path: Path) -> str:
    suffix = path.suffix.lower()
    if suffix in {".txt", ".md", ".markdown"}:
        return path.read_text(encoding="utf-8", errors="replace")
    if suffix == ".docx":
        return docx_text(path)
    if suffix in {".html", ".htm"}:
        return html_text(path)
    if suffix == ".pdf":
        return pdf_text(path)
    raise RuntimeError(f"unsupported type {suffix or '(none)'}; paste the text instead")


def tidy(text: str) -> str:
    text = text.replace("\r\n", "\n").replace("\r", "\n")
    text = re.sub(r"[ \t]+\n", "\n", text)
    text = re.sub(r"\n{3,}", "\n\n", text)
    return text.strip()


def main(argv: list[str]) -> int:
    if argv and argv[0] in ("-h", "--help"):
        print(__doc__)
        return 0
    if not argv:
        print(__doc__, file=sys.stderr)
        return 2
    status = 0
    for n, name in enumerate(argv, start=1):
        path = Path(name)
        print(f"===== [S{n}] {path.name} =====")
        if not path.is_file():
            print(f"not a file: {path}")
            status = 1
            print()
            continue
        try:
            text = tidy(read_source(path))
        except Exception as exc:  # report and carry on; the writer can paste the text
            print(f"could not read: {exc}")
            status = 1
            print()
            continue
        words = len(text.split())
        print(f"({words} words)")
        print(text)
        print()
    return status


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
