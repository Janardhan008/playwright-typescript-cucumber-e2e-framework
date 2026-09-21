import * as fs from "fs";

const input: string = fs.readFileSync(0, "utf8").trim();
const arr: number[] = input === "" ? [] : input.split(/\s+/).map(Number);

const output: string[] = [];

function merge(left: number[], right: number[]): number[] {
  const result: number[] = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      result.push(left[i++]);
    } else {
      result.push(right[j++]);
    }
  }
  while (i < left.length) result.push(left[i++]);
  while (j < right.length) result.push(right[j++]);

  return result;
}

function mergeSort(a: number[]): number[] {
  if (a.length <= 1) return a;

  // left half takes the extra element when the size is odd
  const mid: number = Math.ceil(a.length / 2);

  const left: number[] = mergeSort(a.slice(0, mid));
  const right: number[] = mergeSort(a.slice(mid));

  const merged: number[] = merge(left, right);

  // printed after the merge finishes, so the deepest merges come first
  output.push(`${left.join(" ")} + ${right.join(" ")} -> ${merged.join(" ")}`);

  return merged;
}

mergeSort(arr);
console.log(output.join("\n"));