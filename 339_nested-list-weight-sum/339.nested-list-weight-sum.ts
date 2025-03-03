/*
 * @lc app=leetcode id=339 lang=typescript
 *
 * [339] Nested list weight sum
 */

// @lc code=start
/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * class NestedInteger {
 *     If value is provided, then it holds a single integer
 *     Otherwise it holds an empty nested list
 *     constructor(value?: number) {
 *         ...
 *     };
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     isInteger(): boolean {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     getInteger(): number | null {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a single integer equal to value.
 *     setInteger(value: number) {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a nested list and adds a nested integer elem to it.
 *     add(elem: NestedInteger) {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds,
 *     or an empty list if this NestedInteger holds a single integer
 *     getList(): NestedInteger[] {
 *         ...
 *     };
 * };
 */
function depthSum(nestedList: NestedInteger[]): number {
    // let total = 0;

    // function getSum(item: NestedInteger, depth: number) {
    //     if (item.isInteger()) {
    //         return item.getInteger()! * depth;
    //     }

    //     let sum = 0;
    //     const list = item.getList();
    //     for (const n of list) {
    //         sum += getSum(n, depth + 1)
    //     }

    //     return sum;
    // }

    // for (const list of nestedList) {
    //     total += getSum(list, 1);
    // }

    // return total;

    // ITERATIVE:
    const process: Array<[NestedInteger, number]> = [];

    function calc(list: NestedInteger, depth: number) {
        if (list.isInteger()) {
            return list.getInteger()! * depth;
        }

        const l = list.getList();
        for (const item of l) {
            process.push([item, depth + 1]);
        }

        return 0;
    }

    for (const list of nestedList) {
        process.push([list, 1]);
    }

    let total = 0;
    while (process.length > 0) {
        let [l, d] = process.pop()!;
        total += calc(l, d);
    }

    return total;
};
// @lc code=end

// OBSERVATIONS
// In order to solve this, we can iterate through the list of NestedInteger items and recursively
// descend by tracking the depth of the recursion to multiply the values by
// 1. iterate through the entire list
// 2. keep track of the depth by passing it down during recursion
// 3. return a total sum for each call
// 4. sum the results of each call to and outer total
//
// This approach works but could potentially lead to too many recursive stack calls

// ALGORITHM
// 1. iterate through the list using DFS
// 2.


class NestedInteger {
    private value?: number;
    private list?: NestedInteger[];
    private isSingleInteger: boolean;

    constructor(value?: number) {
        if (value !== undefined) {
            this.value = value;
            this.isSingleInteger = true;
        } else {
            this.list = [];
            this.isSingleInteger = false;
        }
    }

    isInteger(): boolean {
        return this.isSingleInteger;
    }

    getInteger(): number | null {
        return this.isSingleInteger ? this.value! : null;
    }

    setInteger(value: number): void {
        this.value = value;
        this.isSingleInteger = true;
        this.list = undefined; // Clear list when setting an integer
    }

    add(elem: NestedInteger): void {
        if (this.isSingleInteger) {
            this.value = undefined;
            this.isSingleInteger = false;
            this.list = [];
        }
        this.list!.push(elem);
    }

    getList(): NestedInteger[] {
        return this.isSingleInteger ? [] : this.list!;
    }
}

function arrayToNestedList(input: any[]): NestedInteger[] {
    return input.map(item => {
        if (Array.isArray(item)) {
            const nested = new NestedInteger();
            arrayToNestedList(item).forEach(subItem => nested.add(subItem));
            return nested;
        } else {
            return new NestedInteger(item);
        }
    });
}

const input1 = arrayToNestedList([[1, 1], 2, [1, 1]]);
const output1 = depthSum(input1);
console.log(output1); // expect 10

const input2 = arrayToNestedList([1, [4, [6]]]);
const output2 = depthSum(input2);
console.log(output2); // expect 27

const input3 = arrayToNestedList([0]);
const output3 = depthSum(input3);
console.log(output3); // expect 0