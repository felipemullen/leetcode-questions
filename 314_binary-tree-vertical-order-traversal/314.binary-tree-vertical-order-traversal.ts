/*
 * @lc app=leetcode id=314 lang=typescript
 *
 * [314] Binary Tree Vertical Order Traversal
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

function verticalOrder(root: TreeNode | null): number[][] {
    const result: Array<number[]> = [];

    function visit(node: TreeNode | null, x: number, y: number) {
        if (!node) {
            return;
        }

        // 2. store the coordinates and value for each node
        // console.log(node.val);

        if (!result[x]?.length) {
            result[x] = [];
        }

        result[x].push(node.val);

        visit(node.left, x - 1, y - 1);
        visit(node.right, x + 1, y + 1);
    }

    // 1. traverse the tree
    visit(root, 0, 0);

    // 3. sort by x coordinate
    const sortedKeys = Object.keys(result).sort();

    // 4. spit out values
    return sortedKeys.map((x: string) => result[x]);
};
// @lc code=end

const nine = new TreeNode(9);
const fifteen = new TreeNode(15);
const seven = new TreeNode(7);
const twenty = new TreeNode(20, fifteen, seven);
const root = new TreeNode(3, nine, twenty);

const result = verticalOrder(root);
console.log(result);
