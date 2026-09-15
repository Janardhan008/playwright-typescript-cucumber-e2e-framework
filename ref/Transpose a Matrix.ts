import * as readline from 'readline';

const rl = readline.createInterface({ input: process.stdin });
const input: string[] = [];

rl.on('line', (line: string) => input.push(line.trim()));

rl.on('close', () => {
  const tokens: number[] = input.join(' ').split(/\s+/).filter(Boolean).map(Number);

  let idx = 0;
  const R: number = tokens[idx++];
  const C: number = tokens[idx++];

  // Build the R x C matrix
  const matrix: number[][] = [];
  for (let i = 0; i < R; i++) {
    const row: number[] = [];
    for (let j = 0; j < C; j++) {
      row.push(tokens[idx++]);
    }
    matrix.push(row);
  }

  // Build the transpose: C x R
  const transpose: number[][] = [];
  for (let j = 0; j < C; j++) {
    const row: number[] = [];
    for (let i = 0; i < R; i++) {
      row.push(matrix[i][j]);
    }
    transpose.push(row);
  }

  // Print result
  const output: string = transpose.map(row => row.join(' ')).join('\n');
  console.log(output);
});