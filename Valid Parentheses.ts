import * as fs from "fs";

const str: string = fs.readFileSync(0, "utf8").trim();

function isValid(s: string): boolean {
  const stack: string[] = [];
  const pairs: Record<string, string> = {
    ")": "(",
    "]": "[",
    "}": "{"
  };

  for (const ch of s) {
    if (ch === "(" || ch === "[" || ch === "{") {
      stack.push(ch);
    } else if (ch === ")" || ch === "]" || ch === "}") {
      const top: string | undefined = stack.pop();
      if (top !== pairs[ch]) {
        return false;
      }
    }
  }

  // valid only if every opening bracket was matched and closed
  return stack.length === 0;
}

console.log(isValid(str));