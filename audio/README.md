# audio/words — where real word recordings go

## How it works

The app tries `audio/words/<word>.mp3` for every word it speaks in the
core teaching moments (tap-to-hear on picture cards, the quiz prompt,
and the "try again" hint replay). If that file exists, it plays
instead of the device's text-to-speech. If it doesn't exist yet, the
app transparently falls back to TTS — same pattern as the images
system, nothing breaks while this is incomplete.

## Why this matters more than it might look

Two separate real problems get fixed by the same file:

1. **Devices with no TTS voices at all.** Some browsers/platforms
   (a number of Smart TV browsers among them) report the Web Speech
   API as present but supply zero actual voices — nothing in the code
   can fix that, since there's no synthesizer on the device to call. A
   real audio file works on every device that can play audio, full
   stop.
2. **Stop consonants can't be isolated by TTS at all.** No speech
   engine, on any device, can produce a clean isolated "t" or "p" —
   it always attaches a vowel sound ("tuh," "puh"). This is a genuine
   phonics-accuracy problem, not a device-compatibility one, and only
   a real recording fixes it.

## What to name each file

See `asset-manifest.csv` in this folder for the exact filename
expected for every word slot — same 259 unique words as the images
system (a shared word only needs recording once).

Filename rule: identical convention to images — lowercase, spaces to
hyphens, `.mp3` extension. "jump rope" → `jump-rope.mp3`.

## What's NOT covered yet by this system

Only single-word playback currently checks for a real recording.
Full sentences (the "This is s. It says /s/..." intro script) and
combined praise phrases ("Yes! sun.") still use TTS only. Worth
knowing if a no-TTS-voices device is used: those specific moments
will stay silent there even once word recordings are in place. If
that gap matters, it's a reasonable next phase — happy to fold those
into the same system.

## Recording spec suggestion

- Clear, single-word, British-English pronunciation (matches the rest
  of the app's British-English positioning)
- Short lead/trail silence trimmed, consistent volume level across
  all 259 files so nothing sounds jarringly louder/quieter than
  its neighbours
- MP3, since it's universally supported; a consistent bitrate (e.g.
  128kbps) keeps file sizes small and load times fast
