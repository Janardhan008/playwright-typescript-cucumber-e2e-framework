import * as fs from "fs";

const input: number[] = fs
    .readFileSync(0, "utf8")
    .trim()
    .split(/\s+/)
    .map(Number);

const arr: number[] = input;
const n: number = arr.length;

let output: string[] = [];

for (let i = 0; i < n - 1; i++) {

    // Assume current position contains the minimum
    let minIndex: number = i;

    // Find minimum element in the unsorted portion
    for (let j = i + 1; j < n; j++) {
        if (arr[j] < arr[minIndex]) {
            minIndex = j;
        }
    }

    // Swap minimum element with current position
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];

    // Print minimum index and array after swap
    output.push(`${minIndex} ${arr.join(" ")}`);
}

console.log(output.join("\n"));