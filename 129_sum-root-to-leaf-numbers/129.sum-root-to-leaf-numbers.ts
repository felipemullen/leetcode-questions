/*
 * @lc app=leetcode id=129 lang=typescript
 *
 * [129] Sum Root to Leaf Numbers
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

function sumNumbers(root: TreeNode | null): number {
  let total = 0;

  function visit(root: TreeNode | null, sum: number) {
    if (root === null) {
      return;
    }

    sum = sum * 10 + root.val;

    visit(root.left, sum);
    visit(root.right, sum);

    if (!root.left && !root.right) {
      total += sum;
    }
  }

  visit(root, 0);

  return total;
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

// OBSERVATIONS
// In order to find the sums, we need to find all unique paths, aka leaf nodes.
// This can be easily done using depth first search and a string

// 1. Perform a depth first search tracking each path as a string

const output = sumNumbers(arrayToTreeNode([1, 2, 3]));
console.log(output); // should be 25

const output2 = sumNumbers(arrayToTreeNode([4, 9, 0, 5, 1]));
console.log(output2); // should be 1026
