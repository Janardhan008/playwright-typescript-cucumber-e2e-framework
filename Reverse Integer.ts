import * as fs from "fs";

const n: number = parseInt(fs.readFileSync(0, "utf8").trim(), 10);

function reverseInteger(num: number): number {
  const sign: number = num < 0 ? -1 : 1;
  const digits: string = Math.abs(num).toString().split("").reverse().join("");
  const reversed: number = sign * parseInt(digits, 10);

  // 32-bit signed integer range check
  const INT_MIN: number = -(2 ** 31);
  const INT_MAX: number = 2 ** 31 - 1;

  if (reversed < INT_MIN || reversed > INT_MAX) {
    return 0;
  }
  return reversed;
}

console.log(reverseInteger(n));