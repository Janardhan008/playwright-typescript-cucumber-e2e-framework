import * as readline from 'readline';

const rl = readline.createInterface({ input: process.stdin });
const input: string[] = [];

rl.on('line', (line: string) => input.push(line.trim()));

rl.on('close', () => {
  const arr: number[] = input.join(' ').split(/\s+/).filter(Boolean).map(Number);
  quickSort(arr, 0, arr.length - 1);
});

function quickSort(arr: number[], low: number, high: number): void {
  if (low < high) {
    const pivotIndex: number = partition(arr, low, high);
    // Print pivot value and current state of the whole array
    console.log(`pivot=${arr[pivotIndex]} ${arr.join(' ')}`);

    quickSort(arr, low, pivotIndex - 1);  // left side first
    quickSort(arr, pivotIndex + 1, high); // then right side
  }
}

function partition(arr: number[], low: number, high: number): number {
  const pivot: number = arr[high]; // last element as pivot
  let i: number = low - 1;

  for (let j = low; j < high; j++) {
    if (arr[j] <= pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
  return i + 1;
}