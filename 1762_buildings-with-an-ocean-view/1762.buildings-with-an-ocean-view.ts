/*
 * @lc app=leetcode id=1762 lang=typescript
 *
 * [1762] Buildings With an Ocean View
 */

// @lc code=start
function findBuildings(heights: number[]): number[] {
  const results: number[] = [];

  let max = 0;
  for (let i = heights.length - 1; i >= 0; i--) {
    const n = heights[i];
    if (n < max) {
      // does not have a view
    } else {
      results.unshift(i);
      max = n;
    }
  }

  return results;
};
// @lc code=end

//        |
//        |       |
//   |    |    |  |
//   |    |    |  |     |
//   |    |    |  |  |  |  ~~~~~~

// OBSERVATIONS
// This can easily be solved O(n2) by looking at each building and then iterating through
// all buildings > n until finding a building that is taller. If not, it has an ocean view.
// 1. iterate through the entire array
// 2. for each n, iterate n+1->end
// 3. if n at index i is > n, do not add to the list and break
// 4. if n makes it to the end of the list, add it to the list

// ALGORITHM
// 1. iterate in reverse through the array
// 2. as you iterate, keep a max height
// 3. if the value of n at i is < max, it does not have a view
// 4. add all n > max and update max
// 5. since we are iterating in reverse, push to [0] every time

const heights = [4, 2, 3, 1];
const output = findBuildings(heights);
console.log(output); // expect [0, 2, 3]


