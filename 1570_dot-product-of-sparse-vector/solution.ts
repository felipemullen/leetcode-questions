class SparseVector {
    nums: Map<number, number>;
    constructor(nums: number[]) {
        this.nums = new Map();
        for (let i = 0; i < nums.length; ++i) {
            this.nums.set(i, nums[i]);
        }
    }

    dotProduct(vec: SparseVector): number {
        let result = 0;
        for (const [key, value] of this.nums) {
            result += value * (vec.nums.get(key) || 0);
        }
        return result;
    }
}

/**
 * Your SparseVector object will be instantiated and called as such:
 * var v1 = new SparseVector(nums1)
 * var v2 = new SparseVector(nums1)
 * var ans = v1.dotProduct(v2)
 */

// const nums1 = new SparseVector([1, 0, 0, 2, 3]);
// const nums2 = new SparseVector([0, 3, 0, 4, 0]);
// const output = nums1.dotProduct(nums2);
// console.log(output); // should return 8

// const nums1 = new SparseVector([0, 1, 0, 0, 0]);
// const nums2 = new SparseVector([0, 0, 0, 0, 2]);
// const output = nums1.dotProduct(nums2);
// console.log(output); // should return 0

const nums1 = new SparseVector([0, 1, 0, 0, 2, 0, 0]);
const nums2 = new SparseVector([1, 0, 0, 0, 3, 0, 4]);
const output = nums1.dotProduct(nums2);
console.log(output); // should return 6
