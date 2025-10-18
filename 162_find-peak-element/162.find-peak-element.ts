/*
 * @lc app=leetcode id=162 lang=typescript
 *
 * [162] Find Peak Element
 */

// @lc code=start
function findPeakElement(nums: number[]): number {
    if (nums.length === 1) {
        return 0;
    }

    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        const mid = Math.trunc((left + right) / 2);

        const midValue = nums[mid];
        const leftValue = nums[mid - 1] || -1;
        const rightValue = nums[mid + 1] || -1;

        if (leftValue < midValue && midValue > rightValue) {
            return mid;
        }

        if (leftValue > mid) {
            // choose left
            right = mid;
        } else if (rightValue > mid) {
            // choose right
            left = mid + 1;
        } else {
            break;
        }
    }

    return left;
};
// @lc code=end

// OBSERVATIONS
// The easy solution to solving this problem is to simply iterate through
// all of the entries, looking at left and right of i at each step, and stopping once
// an entry is found where nums[i] > nums[i-1] and nums[i] > nums[i+1]
// However, this would run in O(n)

// ALGORITHM
// to run in O(log n) we need to perform a binary search.
// Since any two consecutive numbes are guaranteed not to equal each other, we can
// be certain that the previous and next values will be different from any given
// mid. We are also guaranteed that values outside the array bounds are defined as
// less than array edges. For these reasons, we can always choose the side of mid
// that has a higher value, since we can be certain it will contain a peak
// 1. define right and left pointers to point to the edges of the array
// 2. while left < right
// 3. choose a mid at floor((l+r)/2)
// 4a. if mid is a peak, return index
// 4b. if left is greater than mid, move right to mid
// 4c. if right is greater than mid, move left to mid + 1
// 5. repeat until peak is found, or return index of left after loop

const output = findPeakElement([1, 2, 3, 1]);
console.log(output); // expect 2

const output2 = findPeakElement([1, 2, 1, 3, 5, 6, 4]);
console.log(output2); // expect 5

const output3 = findPeakElement([1]);
console.log(output3); // expect 0

const output4 = findPeakElement([1,2,3]);
console.log(output4); // expect 2

const output5 = findPeakElement([3,2,1]);
console.log(output5); // expect 0
