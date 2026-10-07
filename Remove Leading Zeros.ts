import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (line: string) => {
    const s: string = line.trim();
    if (s.length > 0) {
        // Remove leading zeros while preserving a single "0" if the string is all zeros
        const result: string = s.replace(/^0+(?!$)/, '');
        console.log(result);
    }
});