// Invent a Word We Need — entry program (program/v1).
// Coins one new English word and defines it in a single line of at most
// 140 characters, then writes that line to /output/entry.txt.
//
// The word: "mutologue" (mute + monologue).
//   mutologue (n.) — a long, earnest speech delivered with feeling to a
//   video call that never heard a word of it.
//
// Why this word: English has no name for the speech you give, in full
// flow, to a muted microphone — yet everyone who has worked remotely has
// lived it. The blend is transparent (mute + monologue), so it is
// sayable, spellable, and memorable at first sight, and the definition
// lands in one reading with no second sentence and no example needed.

import { mkdirSync, writeFileSync } from "node:fs";

const WORD = "mutologue";
const ENTRY =
  "mutologue (n.) \u2014 a long, earnest speech delivered with feeling to a video call that never heard a word of it.";

const MAX_CHARS = 140;

// The gate requires 1-140 characters of UTF-8 text, not only whitespace,
// in a single line.
if (!/^[a-z]+ \(n\.\) /.test(ENTRY) || !ENTRY.startsWith(WORD)) {
  throw new Error("entry must start with the coined word and its part of speech");
}
if (ENTRY.length < 1 || ENTRY.length > MAX_CHARS || ENTRY.trim().length === 0) {
  throw new Error(`entry is ${ENTRY.length} chars; must be 1-${MAX_CHARS}`);
}
if (ENTRY.includes("\n")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} chars to /output/entry.txt`);
