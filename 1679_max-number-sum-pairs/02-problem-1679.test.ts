import { describe, expect, test } from 'bun:test';
import { maxOperations } from './01-implementation';

describe('#1679. Max Number of K-Sum Pairs', () => {
    test('example 1', () => {
        const nums = [1, 2, 3, 4];
        const k = 5;
        const result = maxOperations(nums, k);
        expect(result).toEqual(2);
    });

    test('example 2', () => {
        const nums = [3, 1, 3, 4, 3];
        const k = 6;
        const result = maxOperations(nums, k);
        expect(result).toEqual(1);
    });

    test('test 3', () => {
        const nums = [2, 1, 3, 4];
        const k = 5;
        const result = maxOperations(nums, k);
        expect(result).toEqual(2);
    });
});