/*
 * @lc app=leetcode id=543 lang=typescript
 *
 * [543] Diameter of Binary Tree
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

function diameterOfBinaryTree(root: TreeNode | null): number {
    let result = 0;

    // KVP: coordinates, height
    let heights = new Map<TreeNode, number>();

    function visit(node: TreeNode | null, x: number, y: number) {
        if (!node) {
            return;
        }

        visit(node.left, x - 1, y + 1);
        visit(node.right, x + 1, y + 1);

        const hLeft = node.left ? heights.get(node.left) || 0 : 0;
        const hRight = node.right ? heights.get(node.right) || 0 : 0;
        heights.set(node, Math.max(hLeft, hRight) + 1);

        const longPath = hLeft + hRight;
        if (longPath > result) {
            result = longPath;
        }
    }

    visit(root, 0, 0);

    return result;
};
// @lc code=end

// OBSERVATIONS
// The longest path is the combination of the longest path on the left and the longest left
// and the longest path on the right

// ALGORITHM
// 1. iterate through the entire tree
// 2. calculate the longest path for each node
// 3. store the path length of each node in a dictionary
// 4. keep a max length after calculating each max path

const root = new TreeNode(
    1,
    new TreeNode(2, new TreeNode(4), new TreeNode(5)),
    new TreeNode(3)
);
const output = diameterOfBinaryTree(root);
console.log(output);
