# images/words — where the real illustrations go

## How it works

The app looks for `images/words/<word>.png` for every picture it shows.
If that file exists, it's used. If it doesn't exist yet, the app
automatically falls back to the current emoji placeholder — nothing
breaks, nothing needs to change in the app's code. You can replace
images one at a time, in any order, and re-upload the whole folder
whenever you're ready.

## What to name each file

See `asset-manifest.csv` in this folder (also readable in any
spreadsheet app) for the exact filename expected for every one of the
262 word slots across all 26 letters — 259 unique files, since a
handful of words are shared across two letters' pools (e.g. "six"
appears in both s and x — one file covers both automatically).

Filename rule: the word itself, lowercased, spaces replaced with
hyphens. Examples:
- "sun" → `sun.png`
- "jump rope" → `jump-rope.png`
- "x-ray" → `x-ray.png` (already has a hyphen, stays as-is)

## Format/spec suggestion

Not enforced by the code — any of these will work — but for a
consistent, professional result across all 259 images, worth briefing
an illustrator with:
- Square canvas, e.g. 512×512px
- Transparent background (PNG)
- Flat vector style, fixed palette — matches the style guide referenced
  in master_reference.md §6 (flat vector, fixed palette, Pip the
  mascot)
- Centred subject with consistent margin, so it sits the same way in
  the picture-card grid regardless of the illustration's shape

## Budget correction worth carrying back into the business plan

master_reference.md §6 budgeted for ~150 spot illustrations. The
actual validated Book 1 word pools (Part 5) total 262 words across 26
letters — 259 unique after accounting for words shared across two
letters. That's meaningfully more than the ~150 estimate and is worth
updating before getting an illustration quote.
