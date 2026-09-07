import * as fs from 'fs';

interface TreeNode {
  left: TreeNode | null;
  right: TreeNode | null;
}

function buildTree(vals: string[]): TreeNode | null {
  if (vals.length === 0 || vals[0] === 'null') return null;

  const root: TreeNode = { left: null, right: null };
  const queue: TreeNode[] = [root];
  let i = 1;

  while (queue.length > 0 && i < vals.length) {
    const node = queue.shift()!;

    if (i < vals.length) {
      const leftVal = vals[i++];
      if (leftVal !== 'null') {
        node.left = { left: null, right: null };
        queue.push(node.left);
      }
    }

    if (i < vals.length) {
      const rightVal = vals[i++];
      if (rightVal !== 'null') {
        node.right = { left: null, right: null };
        queue.push(node.right);
      }
    }
  }

  return root;
}

function maxDepth(node: TreeNode | null): number {
  if (!node) return 0;
  return 1 + Math.max(maxDepth(node.left), maxDepth(node.right));
}

function main(): void {
  const tokens: string[] = fs.readFileSync('/dev/stdin', 'utf8').trim().split(/\s+/);

  const n = parseInt(tokens[0], 10);
  const values = tokens.slice(1, 1 + n);

  const root = buildTree(values);
  console.log(maxDepth(root));
}

main();