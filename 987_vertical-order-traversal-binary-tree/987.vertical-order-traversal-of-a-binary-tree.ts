/*
 * @lc app=leetcode id=987 lang=typescript
 *
 * [987] Vertical Order Traversal of a Binary Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function verticalTraversal(root: TreeNode | null): number[][] {

  let positions: number[][] = [];

  function visit(root: TreeNode | null, x: number, y: number) {
    if (root === null) {
      return;
    }

    visit(root.left, x - 1, y + 1);
    visit(root.right, x + 1, y + 1);

    if (!positions[x]) {
      positions[x] = [];
    }

    positions[x].push(root.val);
  }

  visit(root, 0, 0);

  const nodes = Object.entries(positions)
    .sort(([key1, value1], [key2, value2]) => {
      value1.sort((a, b) => a - b);
      value2.sort((a, b) => a - b);
      return parseInt(key1) - parseInt(key2);
    })
    .map(x => x[1]);

  return nodes;
};
// @lc code=end

class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }
}

function arrayToTreeNode(arr: (number | null)[]): TreeNode | null {
  if (arr.length === 0 || arr[0] === null) return null;

  const root = new TreeNode(arr[0]!);
  const queue: TreeNode[] = [root];
  let i = 1;

  while (i < arr.length) {
    const current = queue.shift()!;

    if (i < arr.length && arr[i] !== null) {
      current.left = new TreeNode(arr[i]!);
      queue.push(current.left);
    }
    i++;

    if (i < arr.length && arr[i] !== null) {
      current.right = new TreeNode(arr[i]!);
      queue.push(current.right);
    }
    i++;
  }

  return root;
}

// const root = arrayToTreeNode([3, 9, 20, null, null, 15, 7]);
// const output = verticalTraversal(root);
// console.log(output); // should be [[9],[3,15],[20],[7]]

// const root = arrayToTreeNode([1, 2, 3, 4, 5, 6, 7]);
// const output = verticalTraversal(root);
// console.log(output); // should be [[4],[2],[1,5,6],[3],[7]]

const root = arrayToTreeNode([1, 2, 3, 4, 6, 5, 7]);
const output = verticalTraversal(root);
console.log(output); // should be [[4],[2],[1,5,6],[3],[7]]
