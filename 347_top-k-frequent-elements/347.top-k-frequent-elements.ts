/*
 * @lc app=leetcode id=347 lang=typescript
 *
 * [347] Top K Frequent Elements
 */

// @lc code=start
function topKFrequent(nums: number[], k: number): number[] {
  const counts: Record<number, number> = {};
  for (const val of nums) {
    const existing = counts[val];
    counts[val] = (existing || 0) + 1;
  }

  const sorted = Object.entries(counts)
    .sort(([key1, value1], [key2, value2]) => value2 - value1)
    .map(x => parseInt(x[0]));

  return sorted.slice(0, k);
};
// @lc code=end

// OBSERVATIONS
// This can be solved by iterating through all elements, keeping
// a hash table of value:count and returning to top k counts.
// This is ok because it requires O(n) + sorting the top keys O(n log n)

// ALGORITHM
// in order to reduce the time to O(log n) we can take advantage of
// the sorting and do a binary search kind of algorithm:
// 1. iterate through the items and keep a hashmap of frequencies
// 2. sort the frequencies and return the top k values

const output = topKFrequent([1, 1, 1, 2, 2, 3], 2);
console.log(output); // should be [1,2]

const output2 = topKFrequent([1], 1);
console.log(output2); // should be [1]

const output3 = topKFrequent([9,9,9,9,9,9,9,9,9,9,9,2,2,2,2,2,2,2,2,2,5,5,5,5,5,7,6,3,3,2,5,6,4,2,1,0], 4);
console.log(output3); // should be [2,9,5,3]
