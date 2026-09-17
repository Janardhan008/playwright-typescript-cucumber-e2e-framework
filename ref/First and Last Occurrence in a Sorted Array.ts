import * as readline from 'readline';

const rl = readline.createInterface({ input: process.stdin });
const input: string[] = [];

rl.on('line', (line: string) => input.push(line.trim()));

rl.on('close', () => {
  const target: number = parseInt(input[0], 10);
  const nums: number[] = input[1].split(/\s+/).filter(Boolean).map(Number);

  const first: number = findFirst(nums, target);
  const last: number = findLast(nums, target);

  console.log(`${first} ${last}`);
});

function findFirst(nums: number[], target: number): number {
  let low = 0, high = nums.length - 1, result = -1;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (nums[mid] === target) {
      result = mid;
      high = mid - 1; // keep searching left half for earlier occurrence
    } else if (nums[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return result;
}

function findLast(nums: number[], target: number): number {
  let low = 0, high = nums.length - 1, result = -1;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (nums[mid] === target) {
      result = mid;
      low = mid + 1; // keep searching right half for later occurrence
    } else if (nums[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return result;
}