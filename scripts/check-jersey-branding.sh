#!/usr/bin/env bash
# Static guard for the Jersey brand stylesheet. No dependencies.
set -euo pipefail
html="public/index.html"
test -f "$html"
test -f public/jersey.css
test -f public/fuggedaboutit-icon.svg
if grep -Fq '\\n  <link' "$html"; then
  echo "ERROR: literal escaped newline in stylesheet links" >&2
  exit 1
fi
grep -Fq 'href="jersey.css?v=__BUST__"' "$html"
grep -Fq 'href="fuggedaboutit-icon.svg"' "$html"
grep -Fq 'FUGGEDABOUTIT RADIO' "$html"
echo "Jersey branding asset references OK"
