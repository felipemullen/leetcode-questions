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