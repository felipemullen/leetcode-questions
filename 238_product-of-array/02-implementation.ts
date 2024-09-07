export function productExceptSelf(nums: number[]): number[] {
    const leftValues: number[] = [];
    for (let i = 0; i < nums.length; i++) {
        const previous = leftValues[i - 1] ?? 1;
        const left = nums[i - 1] ?? 1;
        leftValues.push(previous * left);
    }

    const rightValues: number[] = [];
    for (let i = nums.length - 1; i >= 0; i--) {
        const previous = rightValues[0] ?? 1;
        const right = nums[i + 1] ?? 1;
        rightValues.unshift(previous * right);
    }

    const result: number[] = [];

    for (let i = 0; i < nums.length; i++) {
        const value = leftValues[i] * rightValues[i];
        result.push(value);
    }

    return result;
}
