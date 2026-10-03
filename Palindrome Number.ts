import * as fs from "fs";

const n: number = parseInt(fs.readFileSync(0, "utf8").trim(), 10);

function isPalindrome(x: number): boolean {
  // negative numbers can never be palindromes (the '-' sign breaks symmetry)
  if (x < 0) return false;

  const original: number = x;
  let reversed: number = 0;

  while (x > 0) {
    const lastDigit: number = x % 10;
    reversed = reversed * 10 + lastDigit;
    x = Math.floor(x / 10);
  }

  return original === reversed;
}

console.log(isPalindrome(n));