/*
 * @lc app=leetcode id=528 lang=typescript
 *
 * [528] Random Pick with Weight
 */

// @lc code=start
class Solution {
    private _w: number[];
    private _sum: number;
    private _sums: number[] = [];

    constructor(w: number[]) {
        this._w = w;

        let total = 0;
        for (let i = 0; i < this._w.length; ++i) {
            total += this._w[i];
            this._sums[i] = total;
        }

        this._sum = total;
    }

    pickIndex(): number {
        const r = Math.random() * this._sum;

        let left = 0;
        let right = this._sums.length;

        while (left < right) {
            const mid = Math.floor((left + right) / 2);
            if (r < this._sums[mid]) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }

        return left;
    }
}



/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */
// @lc code=end

// OBSERVATIONS
// the easiest solution is to expand the weights and store the indexes, i.e. [1,3] becomes [0,1,1,1].
// When calling pickIndex(), choose a random number between [0,indexes]
// return that value.
// This is not optimal, because it requires O(sum(w)) for space complexity

// ALGORITHM
// 1. precompute the sum(w) once and store
// 2. store w for later reference
// 3. when calling pickIndex, generate a random number r between [0,sum]
// 4. iterate through w until the current sum >= r

const s = new Solution([1, 3, 1, 10, 50]); // 1/65
// [0, 4, 5, 15, 65]
// [0, 1,1,1, 2, 3,3,3,3,3,3,3,3,3,3, 4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,,4,4.......]
const o1 = s.pickIndex();
const o2 = s.pickIndex();
const o3 = s.pickIndex();
const o4 = s.pickIndex();
console.log(o1, o2, o3, o4);
