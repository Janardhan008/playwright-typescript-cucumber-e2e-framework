import * as readline from 'readline';

const rl = readline.createInterface({ input: process.stdin });
const input: string[] = [];

rl.on('line', (line: string) => input.push(line.trim()));

rl.on('close', () => {
  const tokens: number[] = input.join(' ').split(/\s+/).filter(Boolean).map(Number);

  const K: number = tokens[0];
  const nums: number[] = tokens.slice(1);

  if (K > nums.length) {
    console.log('INVALID');
    return;
  }

  // Sort descending, duplicates count as separate elements
  const sorted: number[] = [...nums].sort((a, b) => b - a);

  console.log(sorted[K - 1]);
});