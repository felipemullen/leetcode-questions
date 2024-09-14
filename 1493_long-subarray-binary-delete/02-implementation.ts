export function longestSubarray(nums: number[]): number {
    let left = 0;
    let right = 1;

    let maxCount = -1;
    let canSkip = true;
    let allOnes = true;

    while (left < nums.length - 1) {
        const leftValue = nums[left];

        if (leftValue === 0) {
            allOnes = false;
        }

        if (leftValue === 0) {
            ++left;
            right = left + 1;
            continue;
        } else {
            const rightValue = nums[right];
            if (rightValue === 1) {
                ++right;
                continue;
            } else {
                if (canSkip) {
                    canSkip = false;
                    ++right;
                } else {
                    const length = (right - 1) - left;
                    if (length > maxCount) {
                        maxCount = length;
                    }

                    canSkip = true;
                    ++left;
                    right = left + 1;
                }
            }
        }
    }

    return allOnes ? nums.length - 1 : maxCount;
}
