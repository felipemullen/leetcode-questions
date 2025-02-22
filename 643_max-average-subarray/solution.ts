export function findMaxAverage(nums: number[], k: number): number {
    let left = 0;
    let right = k;

    let maxAverage = -1;

    if (nums.length === 1) {
        return nums[0];
    }

    while (left <= nums.length - 1 && right <= nums.length - 1) {
        const slice = nums.slice(left, right);
        const sum = slice.reduce((total, current) => total + current, 0);

        const average = sum / k;

        if (average > maxAverage) {
            maxAverage = average;
        }

        ++left;
        ++right;
    }

    return maxAverage;
}