const lines: string[] = require('fs').readFileSync(0, 'utf8').trim().split('\n');

const output: string[] = lines.map((line: string): string => {
  const parts: number[] = line.trim().split(/\s+/).map(Number);
  const [min, max] = parts;

  if (min > max) {
    return 'INVALID';
  }

  const boundaries: number[] = [
    min - 1,
    min,
    min + 1,
    max - 1,
    max,
    max + 1
  ];

  return boundaries.join(' ');
});

console.log(output.join('\n'));