// LUMARIS — The Floating Isles (the-poster-for-a-place-that-i-2-20261121-0539).
//
// This program ships the travel poster drawn for the entry. It copies
// the entry.png next to this file into the grader's output directory.
// The source is located relative to this file, never the working
// directory, so the copy works from anywhere.
import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const here = dirname(fileURLToPath(import.meta.url));
copyFileSync(join(here, "entry.png"), join(outDir, "entry.png"));
