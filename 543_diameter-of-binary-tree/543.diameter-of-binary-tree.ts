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
    let heights = new Map<TreeNode | null, number>();

    function visit(node: TreeNode | null) {
        if (!node) {
            return;
        }

        visit(node.left);
        visit(node.right);

        const hLeft = heights.get(node.left) || 0;
        const hRight = heights.get(node.right) || 0;
        heights.set(node, Math.max(hLeft, hRight) + 1);

        const longPath = hLeft + hRight;
        if (longPath > result) {
            result = longPath;
        }
    }

    visit(root);

    return result;
};
// @lc code=end

// OBSERVATIONS
// The longest path is the combination of the longest path on the left and the longest left
// and the longest path on the right

// ALGORITHM
// 1. iterate through the entire tree using dfs
// 2. store the path length of each node in a Map<TreeNode, number>
// 3. get (left || 0) and (right || 0) heights from map
// 4. set value of Map at this node to the max height of the children + 1
// 5. update max diameter

const root1 = new TreeNode(
    1,
    new TreeNode(2, new TreeNode(4), new TreeNode(5)),
    new TreeNode(3)
);
const output1 = diameterOfBinaryTree(root1);
console.log(output1); // expect 3

const root2 = new TreeNode(
    1,
    new TreeNode(2)
);
const output2 = diameterOfBinaryTree(root2);
console.log(output2); // expect 1
