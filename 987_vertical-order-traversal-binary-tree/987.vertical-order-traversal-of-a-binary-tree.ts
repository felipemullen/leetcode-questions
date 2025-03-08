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

  function visit(root: TreeNode | null, x: number, y: number) {
    if (root === null) {
      return;
    }

    visit(root.left, x - 1, y + 1);
    visit(root.right, x + 1, y + 1);
  }

  visit(root, 0, 0);
  
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