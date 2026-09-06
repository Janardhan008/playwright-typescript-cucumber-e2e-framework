import * as fs from 'fs';

function isValidIPv4(address: string): boolean {
  const parts = address.split('.');
  if (parts.length !== 4) return false;

  for (const part of parts) {
    if (part.length === 0) return false;
    if (!/^\d+$/.test(part)) return false;
    if (part.length > 1 && part[0] === '0') return false; // leading zero not allowed unless "0"
    const num = parseInt(part, 10);
    if (num < 0 || num > 255) return false;
  }

  return true;
}

function main(): void {
  const tokens: string[] = fs.readFileSync('/dev/stdin', 'utf8').trim().split(/\s+/);

  for (const addr of tokens) {
    console.log(isValidIPv4(addr) ? 'VALID' : 'INVALID');
  }
}

main();