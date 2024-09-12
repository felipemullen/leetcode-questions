import { describe, expect, test } from 'bun:test';
import { findMaxAverage } from './02-implementation';

describe('#643. Maximum Average Subarray I', () => {
    test('example 1', () => {
        const nums = [1, 12, -5, -6, 50, 3];
        const k = 4;
        const result = findMaxAverage(nums, k);
        expect(result).toEqual(12.75000);
    });

    test('example 2', () => {
        const nums = [5];
        const k = 1;
        const result = findMaxAverage(nums, k);
        expect(result).toEqual(5.00000);
    });
});