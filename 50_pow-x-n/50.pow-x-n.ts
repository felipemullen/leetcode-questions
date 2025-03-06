/*
 * @lc app=leetcode id=50 lang=typescript
 *
 * [50] Pow(x, n)
 */

// @lc code=start
function myPow(x: number, n: number): number {
    if (n === 0) {
        return 1;
    }

    function sq(value: number) {
        return value << 1;
    }

    let exp = n;
    let result = 1;
    if (exp % 2 !== 0) {
        result *= x;
    }

    while (exp >= 1) {
        result = sq(result);
        exp = exp / 2;
    }

    return result;
};
// @lc code=end

// OBSERVATIONS
// Attempting to solve this recursively might end up in stack overflow.
// Solving it iteratively by multiplying will end up in lots of slowdown O(n) multiplication.
// 1. initialize result = 1
// 2. iterate from 0 => n
// 3. for each n, multiply result by x
// 4. return result

// ALGORITHM
// in order to reduce the runtime to O(log n) we need to take advantage of
// the CPU with shifting a bit and only squaring values
// 1. initialize result = 1;
// 2. if n is odd, multiply result by x
// 3. square the value of result
// 4. return result

// TODO: THIS IMPLEMENTATION IS NOT WORKING!

const output = myPow(2, 2);
console.log(output); // should be 4

const output2 = myPow(2.10000, 3);
console.log(output2); // should be 9.26100

const output3 = myPow(2.00000, -2);
console.log(output3); // should be 0.25000
