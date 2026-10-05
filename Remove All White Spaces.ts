import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (line: string): void => {
  console.log(line.replace(/\s/g, ''));
  rl.close();
});