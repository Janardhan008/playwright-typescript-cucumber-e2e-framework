import * as fs from "fs";

const arr: number[] = fs.readFileSync(0, "utf8").trim().split(/\s+/).map(Number);
const n: number = arr.length;

const output: string[] = [];

for (let pass = 0; pass < n - 1; pass++) {
  for (let i = 0; i < n - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
    }
  }
  // print the whole list after every full pass, even if nothing changed
  output.push(arr.join(" "));
}

console.log(output.join("\n"));