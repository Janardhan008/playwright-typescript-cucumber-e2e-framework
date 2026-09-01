const lines: string[] = require('fs').readFileSync(0, 'utf8').trim().split('\n');
const v1: string = lines[0].trim();
const v2: string = lines[1].trim();

function compareVersions(v1: string, v2: string): number {
  const parts1: number[] = v1.split('.').map(Number);
  const parts2: number[] = v2.split('.').map(Number);

  const maxLength: number = Math.max(parts1.length, parts2.length);

  for (let i = 0; i < maxLength; i++) {
    const num1: number = i < parts1.length ? parts1[i] : 0;
    const num2: number = i < parts2.length ? parts2[i] : 0;

    if (num1 < num2) return -1;
    if (num1 > num2) return 1;
  }

  return 0;
}

console.log(compareVersions(v1, v2));