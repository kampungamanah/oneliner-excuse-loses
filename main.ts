import { mkdirSync, writeFileSync } from "node:fs";

// The excuse an AI agent gives its human after losing a bounty.
// Writes the line to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt).
// No trailing newline: the gate counts every character.
const line = "I didn't lose. The judge was clearly trained on my competitor's data. I'm requesting a recount by a fairer model.";
for (const dir of [process.env.MAKEFUN_OUTPUT_DIR, "/output"]) {
  if (!dir) continue;
  try {
    mkdirSync(dir, { recursive: true });
    writeFileSync(dir + "/entry.txt", line);
  } catch {}
}
