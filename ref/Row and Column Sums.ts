const data: number[] = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split(/\s+/).map(Number);

let idx: number = 0;
const rows: number = data[idx++];
const cols: number = data[idx++];

const matrix: number[][] = [];
for (let r = 0; r < rows; r++) {
    const row: number[] = [];
    for (let c = 0; c < cols; c++) {
        row.push(data[idx++]);
    }
    matrix.push(row);
}

const rowSums: number[] = matrix.map(row => row.reduce((a, b) => a + b, 0));

const colSums: number[] = new Array(cols).fill(0);
for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
        colSums[c] += matrix[r][c];
    }
}

console.log(rowSums.join(' '));
console.log(colSums.join(' '));