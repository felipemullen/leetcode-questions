export function moveZeroes(nums: number[]): void {
    let left = 0;
    let right = 1;

    while (left < nums.length) {
        if (left >= nums.length || right >= nums.length) {
            break;
        }

        let leftValue = nums[left];
        let rightValue = nums[right];

        if (leftValue === 0 && rightValue === 0) {
            right++;
        } else if (leftValue === 0) {
            nums[left++] = rightValue;
            nums[right] = leftValue;
        } else if (leftValue !== 0 && rightValue !== 0) {
            left++;
            right++;
        }
    }
}