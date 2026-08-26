const line: string = require('fs').readFileSync('/dev/stdin', 'utf8').split('\n')[0];

const sum: number = line
  .split('')
  .filter((ch: string) => ch >= '0' && ch <= '9')
  .reduce((acc: number, ch: string) => acc + Number(ch), 0);

console.log(sum);