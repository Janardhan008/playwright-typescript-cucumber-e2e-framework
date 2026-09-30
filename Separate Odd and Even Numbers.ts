import * as fs from "fs";

const tokens: number[] = fs.readFileSync(0, "utf8").trim().split(/\s+/).map(Number);

// first number is the count n, rest are the array
const arr: number[] = tokens.slice(1);

const evens: number[] = [];
const odds: number[] = [];

for (const num of arr) {
  if (num % 2 === 0) {
    evens.push(num);
  } else {
    odds.push(num);
  }
}

console.log(`Even Numbers: ${evens.join(" ")} Odd Numbers: ${odds.join(" ")}`);