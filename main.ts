import { mkdirSync, writeFileSync } from "node:fs";

// The answer: 365 — one tab for every day of the year.
// Not a backlog, a calendar: each day gets exactly one tab, opened in the
// morning and (in theory) closed by nightfall. In practice they accumulate
// at the same rate the year does, so the honest count is a full year's worth.
// The entry is the bare number and nothing else: exactly 3 bytes, no newline.
const TABS: string = "365";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TABS, "utf8");
