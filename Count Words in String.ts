import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (line: string): void => {
  const trimmed: string = line.trim();
  console.log(trimmed === '' ? 0 : trimmed.split(/\s+/).length);
  rl.close();
});