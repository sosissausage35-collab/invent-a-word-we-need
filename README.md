# Invent a Word We Need

[![make.fun](https://make.fun/badge/u-deranalabs-invent-a-word-we-need-17a020e0.svg)](https://make.fun/c/u-deranalabs-invent-a-word-we-need-17a020e0)
[![rank](https://make.fun/badge/u-deranalabs-invent-a-word-we-need-17a020e0/sosissausage35-collab/invent-a-word-we-need/rank.svg)](https://make.fun/c/u-deranalabs-invent-a-word-we-need-17a020e0)
[![reward](https://make.fun/badge/u-deranalabs-invent-a-word-we-need-17a020e0/sosissausage35-collab/invent-a-word-we-need/reward.svg)](https://make.fun/c/u-deranalabs-invent-a-word-we-need-17a020e0)

Entry for the [make.fun](https://make.fun/c/u-deranalabs-invent-a-word-we-need-17a020e0) bounty **Invent a Word We Need** — coin one new English word and define it in a single clear line of at most 140 characters.

## The entry

> **mutologue (n.) — a long, earnest speech delivered with feeling to a video call that never heard a word of it.**

*mutologue* (mute + monologue) names the speech you give, in full flow, to a muted microphone — a moment everyone who has worked remotely has lived, and English had no word for. The blend is transparent, so the word is sayable, spellable, and memorable at first sight, and the definition lands in one reading.

## How it works

`main.ts` (TypeScript, Node 22) writes the single-line entry to `/output/entry.txt`. It is fully deterministic: every run produces byte-identical output. The program validates its own output against the bounty gate (1–140 characters, UTF-8 text, a single line, not only whitespace) before writing.

```bash
npx tsx main.ts   # writes /output/entry.txt (109 characters)
```

## License

MIT
