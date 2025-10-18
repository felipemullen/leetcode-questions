export function buildTree(values: Array<number | null>) {
    let head: TreeNode | undefined = undefined;

    for (const value of values) {
        if (!head) {
            head = new TreeNode(value!);
        }
    }
}

function addNode(root: TreeNode, newNode: TreeNode) {
    if (!root.left) {
        root.left = newNode;
        return true;
    } else if (root.left && !root.right) {
        root.right = newNode;
        return true;
    }

    return addNode(root.left, newNode);
}

export class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

export function goodNodes(root: TreeNode | null): number {
    // TODO: Implement your solution here
    let goodNodes = [];

    function dfs(node: TreeNode | null, max: number, goodList: TreeNode[]) {
        if (!node) {
            return;
        }

        let localMax = max;
        if (node.val >= localMax) {
            goodList.push(node);
            localMax = node.val;
        }

        dfs(node.left, localMax, goodList);
        dfs(node.right, localMax, goodList);
    }

    dfs(root, Number.NEGATIVE_INFINITY, goodNodes);

    return goodNodes.length;
}