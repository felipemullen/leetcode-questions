/*
 * @lc app=leetcode id=215 lang=typescript
 *
 * [215] Kth Largest Element in an Array
 */

// @lc code=start
function findKthLargest(nums: number[], k: number): number {
  // naiive implementation
  // nums.sort();
  // return nums.at(-k)!;

  // 2. push elements into a structure that sorts as values are added
  const counts: number[] = [];

  // 1. iterate through the list once
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    counts[n] = (counts[n] || 0) + 1;
  }

  // [3,2,3,1,2,4,5,5,6]
  // [
  //   0:
  //   1:1
  //   2:2
  //   3:2
  //   4:1
  //   5:2
  //   6:1
  // ]
  // [1,2,2,3,3,4,5,5,6].at(-k)

  let sum = 0;
  let end = nums.length - k + 1;
  for (const n of Object.keys(counts)) {
    const nValue = parseInt(n);
    const count = counts[nValue];
    sum += count;

    if (sum >= end) {
      return nValue;
    }
  }

  return -1;
};
// @lc code=end


// OBSERVATIONS
// easiest implementation is to sort() and then return k values from end of the list

// const nums = [3, 2, 1, 5, 6, 4];
// const k = 2;
// const output = findKthLargest(nums, k);
// console.log(output); // expect 5

// Not ideal because we need to sort the list, which at best is O(n log n) or whatever merge sort can achieve.
// It would be better to be able to do this in a single iteration O(n)

// ALGORITHM
// 1. iterate through the list once
// 2. consider obj/map: requires sort. using js array index hack, push counts into array
//      counts[n] = (counts[n] || 0) + 1
// 3. iterate through counts (index is n)
// 4. initialize an array to store expanded values
// 5. for c of counts: push n into results array c times
// 6. return expanded.at(-k)

// 1. iterate through the list once
// 2. push elements into a structure that sorts as values are added
// 3. retrieve value at k
// alternate 3. sum up counts until >= k

const nums = [3, 2, 1, 5, 6, 4];
const k = 2;
const output = findKthLargest(nums, k); // expect 5
console.log(output);
