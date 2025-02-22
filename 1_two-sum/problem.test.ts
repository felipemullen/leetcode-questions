import { describe, expect, test } from 'bun:test';
import { twoSum } from './solution.ts';

describe('#1. Container With Most Water', () => {
    test('example 1', () => {
        const nums = [2, 7, 11, 15];
        const target = 9;
        const result = twoSum(nums, target);
        expect(result).toEqual([0, 1]);
    });

    test('example 2', () => {
        const nums = [3, 2, 4];
        const target = 6;
        const result = twoSum(nums, target);
        expect(result).toEqual([1, 2]);
    });

    test('example 3', () => {
        const nums = [3, 3];
        const target = 6;
        const result = twoSum(nums, target);
        expect(result).toEqual([0, 1]);
    });
});