/*
 * @lc app=leetcode id=88 lang=typescript
 *
 * [88] Merge Sorted Array
 *
 * https://leetcode.com/problems/merge-sorted-array/description/
 *
 */

// @lc code=start
/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {

    let write = m + n - 1;
    let n1pointer = m - 1;
    let n2pointer = n - 1;

    while (write >= 0) {
        let n1 = nums1[n1pointer] || -1;
        let n2 = nums2[n2pointer] || -1;

        if (n1 > n2) {
            nums1[write] = n1;
            --n1pointer;
        } else {
            nums1[write] = n2;
            --n2pointer;
        }

        --write;
    }
};
// @lc code=end

// OBSERVATIONS
// The easiest solution would be to just remove the 0s from the end of nums1, add the elements from nums2 and sort.
// This would not be ideal though, since it will be longer than O(m + n)

// ALGORITHM
// 1. iterate through nums1 and num2 in reverse
// 2. keep a pointer for the position in nums1 and nums2
// 3. if n1 > n2, place it at the end of nums and decrement n1pointer
// 4. if n2 > n1, place it at the end of nums and decrement n2pointer

const nums = [1, 2, 3, 0, 0, 0];
merge(nums, 3, [2, 5, 6], 3);
console.log(nums); // should be [1,2,2,3,5,6]

const nums1 = [1];
merge(nums1, 1, [], 0);
console.log(nums1); // should be [1]

const nums2 = [0];
merge(nums2, 0, [1], 1);
console.log(nums2); // should be [1]