import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  terminal: false,
});

const lines: string[] = [];
rl.on("line", (line: string): void => {
  lines.push(line);
});

rl.on("close", (): void => {
  const parse = (s: string = ""): string[] =>
    s.split(",").map((x) => x.trim()).filter((x) => x !== "");

  const expected: string[] = parse(lines[0]);
  const actual: string[] = parse(lines[1]);

  const expectedSet = new Set<string>(expected);
  const actualSet = new Set<string>(actual);

  const missing: string[] = expected.filter((x) => !actualSet.has(x));
  const unexpected: string[] = actual.filter((x) => !expectedSet.has(x));

  console.log("Missing: " + (missing.length ? missing.join(",") : "None"));
  console.log("Unexpected: " + (unexpected.length ? unexpected.join(",") : "None"));
});