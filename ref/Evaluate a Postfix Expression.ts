const data: string[] = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split(/\s+/);

function evaluatePostfix(tokens: string[]): number {
    const stack: number[] = [];
    for (const tok of tokens) {
        if (tok === '+' || tok === '-' || tok === '*' || tok === '/') {
            const b: number = stack.pop()!;
            const a: number = stack.pop()!;
            let res: number;
            if (tok === '+') res = a + b;
            else if (tok === '-') res = a - b;
            else if (tok === '*') res = a * b;
            else res = Math.trunc(a / b); // truncate toward zero
            stack.push(res);
        } else {
            stack.push(parseInt(tok, 10));
        }
    }
    return stack[stack.length - 1];
}

console.log(evaluatePostfix(data));