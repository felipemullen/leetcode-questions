/*
 * @lc app=leetcode id=1091 lang=typescript
 *
 * [1091] Shortest Path in Binary Matrix
 */

// @lc code=start
function shortestPathBinaryMatrix(grid: number[][]): number {

    if (!grid.length) {
        return 0;
    }

    const down = (x: number, y: number) => grid[y + 1]?.[x];
    const right = (x: number, y: number) => grid[y]?.[x + 1];
    const downright = (x: number, y: number) => grid[y + 1]?.[x + 1];

    const isEnd = (x: number, y: number) => y === grid.length - 1 && x === grid[y].length - 1;

    let min = Number.MAX_SAFE_INTEGER;
    function visit(x: number, y: number, length: number) {
        if (isEnd(x, y)) {
            if (length < min) {
                min = length;
            }
        }

        if (right(x, y) === 0) {
            visit(x + 1, y, length + 1);
        }

        if (down(x, y) === 0) {
            visit(x, y + 1, length + 1);
        }

        if (downright(x, y) === 0) {
            visit(x + 1, y + 1, length + 1);
        }
    }

    visit(0, 0, 1);

    return min;
};
// @lc code=end

// const output = shortestPathBinaryMatrix([[0, 1], [1, 0]]);
// console.log(output);

const output = shortestPathBinaryMatrix([[0, 0, 0], [1, 1, 0], [1, 1, 0]]);
console.log(output);
