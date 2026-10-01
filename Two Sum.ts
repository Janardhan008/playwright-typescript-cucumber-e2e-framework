import * as fs from "fs";

const tokens: number[] = fs.readFileSync(0, "utf8").trim().split(/\s+/).map(Number);

const n: number = tokens[0];
const nums: number[] = tokens.slice(1, 1 + n);
const target: number = tokens[tokens.length - 1];

const seen = new Map<number, number>(); // value -> index

let result: number[] = [];
for (let i = 0; i < nums.length; i++) {
  const complement: number = target - nums[i];
  if (seen.has(complement)) {
    result = [seen.get(complement) as number, i];
    break;
  }
  seen.set(nums[i], i);
}

console.log(result.join(" "));