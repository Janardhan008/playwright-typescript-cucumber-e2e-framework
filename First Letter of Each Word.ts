import * as readline from 'readline';

const rl = readline.createInterface({ input: process.stdin });

rl.on('line', (line: string): void => {
  const words: string[] = line.trim().split(/\s+/).filter(Boolean);
  console.log(words.map((w: string) => w[0]).join(''));
  rl.close();
});