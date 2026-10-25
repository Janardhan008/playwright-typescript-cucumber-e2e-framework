import { readFileSync } from "fs";

const input: string = readFileSync(0, "utf8").trim();
const n: number = parseInt(input, 10);

function factorial(n: number): number {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

console.log(String(factorial(n)));