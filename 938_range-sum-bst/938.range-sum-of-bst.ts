/*
 * @lc app=leetcode id=938 lang=typescript
 *
 * [938] Range Sum of BST
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

function rangeSumBST(root: TreeNode | null, low: number, high: number): number {

    let sum = 0;
    function visit(root: TreeNode | null) {
        if (root === null) {
            return;
        }

        if (root.val < low) {
            // skip left
        } else {
            visit(root.left);
        }

        if (root.val > high) {
            // skip right
        } else {
            visit(root.right);
        }

        if (root.val >= low && root.val <= high) {
            sum += root.val;
        }
    }

    visit(root);

    return sum;
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

const root1 = arrayToTreeNode([10, 5, 15, 3, 7, null, 18]);
const output1 = rangeSumBST(root1, 7, 15);
console.log(output1); // should be 32

const root2 = arrayToTreeNode([10, 5, 15, 3, 7, 13, 18, 1, null, 6]);
const output2 = rangeSumBST(root2, 6, 10);
console.log(output2); // should be 23
