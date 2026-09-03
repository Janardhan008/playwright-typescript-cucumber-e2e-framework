import * as fs from 'fs';

type StatusMap = Map<string, string>;

function parseBlock(blockLines: string[]): StatusMap {
  const map: StatusMap = new Map();
  for (const line of blockLines) {
    const [id, status] = line.split('|').map(s => s.trim());
    if (id) map.set(id, status);
  }
  return map;
}

function printSection(title: string, arr: string[]): void {
  console.log(title);
  if (arr.length === 0) {
    console.log('NONE');
  } else {
    for (const id of arr) console.log(id);
  }
}

function main(): void {
  const input: string = fs.readFileSync('/dev/stdin', 'utf8');
  const lines: string[] = input.split('\n');

  let idx = lines.findIndex(l => l.trim() === '');
  if (idx === -1) idx = lines.length;

  const prevLines = lines.slice(0, idx).map(l => l.trim()).filter(Boolean);
  const currLines = lines.slice(idx + 1).map(l => l.trim()).filter(Boolean);

  const prev = parseBlock(prevLines);
  const curr = parseBlock(currLines);

  const regressed: string[] = [];
  const fixed: string[] = [];
  const added: string[] = [];
  const removed: string[] = [];

  for (const [id, status] of prev) {
    if (curr.has(id)) {
      const newStatus = curr.get(id);
      if (status === 'PASS' && newStatus === 'FAIL') regressed.push(id);
      else if (status === 'FAIL' && newStatus === 'PASS') fixed.push(id);
    } else {
      removed.push(id);
    }
  }

  for (const id of curr.keys()) {
    if (!prev.has(id)) added.push(id);
  }

  regressed.sort();
  fixed.sort();
  added.sort();
  removed.sort();

  printSection('REGRESSED', regressed);
  printSection('FIXED', fixed);
  printSection('NEW', added);
  printSection('REMOVED', removed);
}

main();