/*
 * @lc app=leetcode id=560 lang=typescript
 *
 * [560] Subarray Sum Equals K
 */

// @lc code=start
function subarraySum(nums: number[], k: number): number {

    const sums: Record<number, number> = {
    };

    let sum = 0;
    let subArrayCount = 0;

    for (let i = 0; i < nums.length; i++) {
        let n = nums[i];
        sum += n;

        if (sum == k) {
            subArrayCount++;
        }

        if (sums[sum - k]) {
            const occurences = sums[sum - k];
            subArrayCount += occurences;
        }

        sums[sum] = (sums[sum] || 0) + 1;
    }

    return subArrayCount;
};
// @lc code=end


// OBSERVATIONS
// easiest solution is a brute force approach
// 1. iterate through entire array
// 2. for each element n, iterate through n+1 until sum == k
// 3. count as sub array
// this is not ideal because it spends a lot of processing time
//  O(n)* [O(n-1) + O(n-2) .. ] = O(n2)


// ALGORITHM
// 1. iterate through entire array
// 2. keep a dictionary of sums
// 3. for each element, add to the dictionary the current sum at each i
// 4. if the sum - k exists, count++
// 5. increase the counts for the sum

// const nums = [1, 1, 1];
// const k = 2;
// const output = subarraySum(nums, k);
// console.log(output); // expect 2

// const nums = [1, 2, 3];
// const k = 3;
// const output = subarraySum(nums, k);
// console.log(output); // expect 2

const nums = [1, -1, 0];
const k = 0;
const output = subarraySum(nums, k);
console.log(output); // expect 3