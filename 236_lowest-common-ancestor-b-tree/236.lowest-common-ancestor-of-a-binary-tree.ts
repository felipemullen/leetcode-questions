/*
 * @lc app=leetcode id=236 lang=typescript
 *
 * [236] Lowest Common Ancestor of a Binary Tree
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

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
    if (root === null) {
        return null;
    }

    if (root === p || root === q) {
        return root;
    }

    const left = lowestCommonAncestor(root.left, p, q);
    const right = lowestCommonAncestor(root.right, p, q);

    if (left && right) {
        return root;
    } else if (left) {
        return left;
    } else {
        return right;
    }
};

// @lc code=end

// OBSERVATIONS
// The easiest solution is to iterate through the tree for both p and q, storing their paths.
// Then, we can compare the two paths and find the first element in common between the two.
// This is not ideal, since it will require two separate traversals, as well as two separate lists.

// ALGORITHM
// 1. traverse the tree
// 2a. look for p/q in the left
// 2b. look for p/q in the right
// 3a. if left and right are not null, return root
// 3b. if left, recurse on left
// 3c. if right, recurse on the right

function findNode(tree: TreeNode | null, val: number): TreeNode | null {
    if (!tree) return null;
    if (tree.val === val) return tree;

    const leftSearch = findNode(tree.left, val);
    if (leftSearch) return leftSearch;

    return findNode(tree.right, val);
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

const t = arrayToTreeNode([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4]);
const p = findNode(t, 5);
const q = findNode(t, 1);
const output = lowestCommonAncestor(t, p, q);
console.log(output); // should return val == 3

const t2 = arrayToTreeNode([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4]);
const p2 = findNode(t2, 7);
const q2 = findNode(t2, 4);
const output2 = lowestCommonAncestor(t2, p2, q2);
console.log(output2); // should return val == 2

const t3 = arrayToTreeNode([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4]);
const p3 = findNode(t3, 8);
const q3 = findNode(t3, 1);
const output3 = lowestCommonAncestor(t3, p3, q3);
console.log(output3); // should return val == 1