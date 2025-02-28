/*
 * @lc app=leetcode id=227 lang=typescript
 *
 * [227] Basic Calculator II
 */

// @lc code=start

function calculate(s: string): number {

    s = s.trim();
    if (s.length == 1) {
        return parseInt(s);
    }

    const plusIndex = s.indexOf('+');
    if (plusIndex >= 0) {
        const [left, right] = s.split('+', 2);
        return Math.trunc(calculate(left) + calculate(right));
    }

    const minusIndex = s.indexOf('-');
    if (minusIndex >= 0) {
        const [left, right] = s.split('-', 2);
        return Math.trunc(calculate(left) - calculate(right));
    }

    const divIndex = s.indexOf('/');
    if (divIndex >= 0) {
        const [left, right] = s.split('/', 2);
        return Math.trunc(Math.max(calculate(left), 1) / Math.max(calculate(right), 1));
    }

    const mulIndex = s.indexOf('*');
    if (mulIndex >= 0) {
        const [left, right] = s.split('*', 2);
        return Math.trunc(calculate(left) * calculate(right));
    }

    return 0;

};
// @lc code=end

// ALGORITHM
// A divide and conquer method should be able to solve this with recursion
// 1. look through string for ocurrence of * , /
// 2. break string into left,right based on * , /
// 3. evaluate substrings
// 4. once there are no *,/ do +,-


// const input = '3+2*2';
// const output = calculate(input);
// console.log(output); // expect 7

// const input = ' 3/2 ';
// const output = calculate(input);
// console.log(output); // expect 1

const input = ' 3+5 / 2 ';
const output = calculate(input);
console.log(output); // expect 5