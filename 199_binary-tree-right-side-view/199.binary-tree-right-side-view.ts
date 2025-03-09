/*
 * @lc app=leetcode id=199 lang=typescript
 *
 * [199] Binary Tree Right Side View
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

function rightSideView(root: TreeNode | null): number[] {

    let depth: Array<{ x: number, node: TreeNode }[]> = [];

    function visit(node: TreeNode | null, x: number, y: number) {
        if (!node) {
            return null;
        }

        visit(node.left, x - 1, y + 1);
        visit(node.right, x + 1, y + 1);

        if (!depth[y]) {
            depth[y] = [];
        }

        depth[y].push({ x, node });
    }

    visit(root, 0, 0);

    let results: number[] = depth.map(list => {
        let highest = Number.MIN_SAFE_INTEGER;
        let chosen: TreeNode | null = null;
        for (const item of list) {
            if (item.x > highest) {
                highest = item.x;
                chosen = item.node;
            }
        }
        return chosen?.val || 0;
    });

    return results;
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

// const root = arrayToTreeNode([1, 2, 3, null, 5, null, 4]);
// const output = rightSideView(root);
// console.log(output);

// const root = arrayToTreeNode([1, 2, 3, 4, null, null, null, 5]);
// const output = rightSideView(root);
// console.log(output);

const root = arrayToTreeNode([1, null, 3]);
const output = rightSideView(root);
console.log(output);
