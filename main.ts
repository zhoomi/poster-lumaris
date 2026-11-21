// LUMARIS — The Floating Isles (the-poster-for-a-place-that-i-2-20261121-0539).
//
// Ships the travel poster drawn for this entry. The program copies
// entry.png (kept next to this file) into the grader's output
// directory, then verifies the copy byte-for-byte with SHA-256, so a
// broken or partial write is never reported as a success. The copy is
// deterministic: the same entry.png always produces the same output.
import { copyFileSync, existsSync, mkdirSync, readFileSync, statSync } from "node:fs";
import { createHash } from "node:crypto";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const outDir = resolve(process.env.MAKEFUN_OUTPUT_DIR ?? "/output");
const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "entry.png");
const target = join(outDir, "entry.png");

if (!existsSync(source)) {
  throw new Error(`poster source missing: ${source}`);
}

mkdirSync(outDir, { recursive: true });
copyFileSync(source, target);

const sha256 = (path) => createHash("sha256").update(readFileSync(path)).digest("hex");

const targetHash = sha256(target);
if (sha256(source) !== targetHash) {
  throw new Error(`output verification failed: ${target} does not match ${source}`);
}

console.log(`wrote ${target} (${statSync(target).size} bytes, sha256 ${targetHash}, verified byte-identical)`);
