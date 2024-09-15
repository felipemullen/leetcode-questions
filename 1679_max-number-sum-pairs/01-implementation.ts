export function maxOperations(nums: number[], k: number): number {
    let operations = 0;

    let left = 0;
    let right = nums.length - 1;

    const skipIndexes: Record<number, boolean> = {};

    while (left < nums.length - 1) {
        const leftValue = nums[left];
        const rightValue = nums[right];

        if (right in skipIndexes) {
            --right;
            continue;
        }

        if (right <= left) {
            ++left;
            right = nums.length - 1;
        } else if (leftValue + rightValue === k) {
            ++operations;
            skipIndexes[right] = true;

            ++left;
            right = nums.length - 1;
        } else {
            --right;
        }
    }

    return operations;
}
