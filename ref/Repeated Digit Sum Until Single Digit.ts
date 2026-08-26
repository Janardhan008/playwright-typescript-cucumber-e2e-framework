import * as fs from "fs";

let n: number = Number(fs.readFileSync(0, "utf8").trim());

let result: number[] = [];

if (n < 10) {
    // Input is already a single digit
    result.push(n);
} else {
    while (n >= 10) {
        let sum: number = 0;

        while (n > 0) {
            sum += n % 10;
            n = Math.floor(n / 10);
        }

        result.push(sum);
        n = sum;
    }
}

console.log(result.join(" "));