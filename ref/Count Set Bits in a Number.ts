import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

let lines: string[] = [];

rl.on('line', (line: string) => {
    lines.push(line.trim());
});

rl.on('close', () => {
    const n: number = parseInt(lines[0], 10);
    const count: number = countSetBits(n);
    console.log(count);
});

function countSetBits(num: number): number {
    let n: number = num;
    let count: number = 0;

    while (n > 0) {
        n = n & (n - 1); // clear the lowest set bit
        count++;
    }

    return count;
}