#!/usr/bin/env bash
# Check skill names against the 2018 crawl of LinkedIn's then-public skills directory.
#
# The crawl (varadchoudhari/LinkedIn-Skills-Crawler, MIT, 37,339 names, last pushed 2018-03-10)
# is a historical cross-check, never the arbiter: a name present there existed in LinkedIn's
# taxonomy in 2018; a name absent proves nothing (the crawl lacks Innovation, Consulting,
# Programming and Software Engineering). The arbiter is the profile typeahead at application.
#
# Usage: check-against-2018-crawl.sh <names-file> [crawl-file]
#   names-file  one skill name per line (blank lines and lines starting with # are skipped)
#   crawl-file  a local copy of all_skills.txt; downloaded to a cache directory when omitted
#               (override the directory with LINKEDIN_SKILLS_CRAWL_DIR)
# Output: one line per name, "FOUND<TAB>name" or "MISSING<TAB>name", in input order, then a
# summary on stderr. The downloaded file is data: it is only ever read by grep.

# The bash floor: the shellcheck gate holds it once and requires this guard first.
if ((BASH_VERSINFO[0] < 5 || (BASH_VERSINFO[0] == 5 && BASH_VERSINFO[1] < 2))); then
  echo "bash 5.2 or later is required, found ${BASH_VERSION}: install it (brew install bash on macOS, apt-get install bash on Debian 12 or Ubuntu 24.04 and later) and put it first on PATH" >&2
  exit 1
fi

set -euo pipefail

if [ "$#" -lt 1 ] || [ "$#" -gt 2 ]; then
  echo "usage: $0 <names-file> [crawl-file]" >&2
  exit 2
fi

names_file="$1"
if [ ! -r "$names_file" ]; then
  echo "cannot read names file: $names_file" >&2
  exit 2
fi

crawl_url='https://raw.githubusercontent.com/varadchoudhari/LinkedIn-Skills-Crawler/master/output/all_skills.txt'
if [ "$#" -eq 2 ]; then
  crawl_file="$2"
else
  crawl_dir="${LINKEDIN_SKILLS_CRAWL_DIR:-${TMPDIR:-/tmp}/linkedin-skills-2018}"
  mkdir -p "$crawl_dir"
  crawl_file="$crawl_dir/all_skills.txt"
  if [ ! -s "$crawl_file" ]; then
    echo "downloading the 2018 crawl to $crawl_file" >&2
    curl -fsSL -o "$crawl_file" "$crawl_url"
  fi
fi
if [ ! -r "$crawl_file" ]; then
  echo "cannot read crawl file: $crawl_file" >&2
  exit 2
fi

found=0
missing=0
while IFS= read -r name || [ -n "$name" ]; do
  case "$name" in
    '' | '#'*) continue ;;
  esac
  if grep -qixF -- "$name" "$crawl_file"; then
    printf 'FOUND\t%s\n' "$name"
    found=$((found + 1))
  else
    printf 'MISSING\t%s\n' "$name"
    missing=$((missing + 1))
  fi
done <"$names_file"

echo "found $found, missing $missing, against $(wc -l <"$crawl_file" | tr -d ' ') crawled names" >&2
