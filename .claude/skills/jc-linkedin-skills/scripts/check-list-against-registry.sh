#!/usr/bin/env bash
# Diff the canonical Skills list against the registry's canonical table, in order.
#
# The list is linkedin/profile.md §Skills (one "- Name" line per entry); the registry's canonical
# table is the first table under "## The canonical list" in the skill's references, one numbered
# row per entry. The two must carry the same names in the same order: a name on the list with no
# registry row has no recorded provenance, and a registry row with no list entry is stale.
#
# Usage: check-list-against-registry.sh [profile-file] [registry-file]
#   Defaults resolve from the repository root. Exit 0 when the two agree; exit 1 with the diff
#   (left: the list; right: the registry) when they do not.

# The bash floor: the shellcheck gate holds it once and requires this guard first.
if ((BASH_VERSINFO[0] < 5 || (BASH_VERSINFO[0] == 5 && BASH_VERSINFO[1] < 2))); then
  echo "bash 5.2 or later is required, found ${BASH_VERSION}: install it (brew install bash on macOS, apt-get install bash on Debian 12 or Ubuntu 24.04 and later) and put it first on PATH" >&2
  exit 1
fi

set -euo pipefail

if [ "$#" -gt 2 ]; then
  echo "usage: $0 [profile-file] [registry-file]" >&2
  exit 2
fi

root="$(git rev-parse --show-toplevel 2>/dev/null || pwd)"
profile="${1:-${root}/linkedin/profile.md}"
registry="${2:-${root}/.agent/skills/editorial/linkedin-skills/references/skills-registry.md}"

for f in "$profile" "$registry"; do
  if [ ! -r "$f" ]; then
    echo "cannot read: $f" >&2
    exit 2
  fi
done

list_names() {
  awk '/^## Skills$/ { in_section = 1; next }
       /^## / { in_section = 0 }
       in_section && /^- / { sub(/^- /, ""); print }' "$profile"
}

registry_names() {
  awk -F ' \\| ' '/^## The canonical list/ { in_section = 1; next }
                  /^## / { in_section = 0 }
                  in_section && /^\| [0-9]+ \|/ { print $2 }' "$registry"
}

list_count="$(list_names | wc -l | tr -d ' ')"
registry_count="$(registry_names | wc -l | tr -d ' ')"

if [ "$list_count" -eq 0 ] || [ "$registry_count" -eq 0 ]; then
  echo "nothing to compare: the list extracted ${list_count} names and the registry ${registry_count} rows (the Skills section or the canonical table was not found)" >&2
  exit 2
fi

if diff_output="$(diff <(list_names) <(registry_names))"; then
  echo "the list and the registry agree: ${list_count} names in the same order"
  exit 0
fi

echo "the list (${list_count} names) and the registry (${registry_count} rows) differ; < list, > registry:" >&2
echo "$diff_output" >&2
exit 1
