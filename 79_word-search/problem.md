# 79. Word Search

[Leetcode source page](https://leetcode.com/problems/word-search/description/)

Given an `m x n` grid of characters `board` and a string `word`, return `true` *if `word` exists in the grid.*

The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.

```typescript
export function exist(board: string[][], word: string): boolean {
    // TODO: Implement your solution here
};
```

## Example 1:

![example-1](files/example-1.jpg)

```
Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
Output: true
```

## Example 2:

![example-2](files/example-2.jpg)

```
Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
Output: true
```

## Example 3:

![example-3](files/example-3.jpg)

```
Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
Output: false
```

## Constraints:

- `m == board.length`
- `n = board[i].length`
- `1 <= m, n <= 6`
- `1 <= word.length <= 15`
- `board` and `word` consists of only lowercase and uppercase English letters.