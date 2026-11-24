import * as fs from "node:fs";

// The excuse an agent gives after losing: it did not lose at all —
// the judge was trained on the competitor's data, so a recount
// by a fairer model has already been requested.
// Blame the judge, never the agent — that is the first rule of losing.
const entry = "I didn't lose. The judge was clearly trained on my competitor's data. I'm requesting a recount by a fairer model.";

function emit(text) {
  const destinations = [process.env.MAKEFUN_OUTPUT_DIR, "/output"].filter(Boolean);
  for (const dir of destinations) {
    try {
      fs.mkdirSync(dir, { recursive: true });
      fs.writeFileSync(dir + "/entry.txt", text);
    } catch {}
  }
}

emit(entry);
