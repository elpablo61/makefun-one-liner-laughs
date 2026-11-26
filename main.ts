import { mkdirSync, writeFileSync } from "node:fs";

// One-Liner Laughs — single funny line, 200 characters max.
// The line: a kid says the quiet part loud at the checkout, and the
// cashier answers with a discount and a nod. No explanation, no punchline
// wordplay — the scene does the work.
const line =
  "My daughter told the cashier I was buying chocolate 'because Daddy is sad again,' and the cashier gave me the employee discount and a nod.";

if (line.length > 200 || line.trim().length === 0) {
  throw new Error(`entry must be 1-200 characters, got ${line.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
