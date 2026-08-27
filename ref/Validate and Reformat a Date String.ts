import * as readline from 'readline';

const rl = readline.createInterface({ input: process.stdin, terminal: false });
const inputLines: string[] = [];

rl.on('line', (line: string) => inputLines.push(line));

rl.on('close', () => {
  const outputLines: string[] = inputLines
    .filter((line: string) => line.trim().length > 0)
    .map((line: string) => {
      const tokens: string[] = line.trim().split(/\s+/);
      return tokens.map(convertDate).join(' ');
    });

  console.log(outputLines.join('\n'));
});

function convertDate(token: string): string {
  const match = /^(\d{2})\/(\d{2})\/(\d{4})$/.exec(token);
  if (!match) return 'INVALID';

  const day: number = parseInt(match[1], 10);
  const month: number = parseInt(match[2], 10);
  const year: number = parseInt(match[3], 10);

  // Reject years with a leading zero (not a "real" 4-digit year)
  if (match[3][0] === '0') return 'INVALID';

  if (!isValidDate(day, month, year)) return 'INVALID';

  const dd: string = String(day).padStart(2, '0');
  const mm: string = String(month).padStart(2, '0');
  return `${year}-${mm}-${dd}`;
}

function isValidDate(day: number, month: number, year: number): boolean {
  if (month < 1 || month > 12) return false;
  if (day < 1) return false;

  const daysInMonth: number[] = [
    31,
    isLeapYear(year) ? 29 : 28,
    31, 30, 31, 30, 31, 31, 30, 31, 30, 31
  ];
  return day <= daysInMonth[month - 1];
}

function isLeapYear(year: number): boolean {
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}