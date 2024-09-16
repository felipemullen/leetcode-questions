import { describe, expect, test } from 'bun:test';
import { findDifference } from './02-implementation';

describe('#2215. Find the Difference of Arrays', () => {
    test('example 1', () => {
        const nums1 = [1, 2, 3];
        const nums2 = [2, 4, 6];
        const result = findDifference(nums1, nums2);
        expect(result).toEqual([[1, 3], [4, 6]]);
    });

    test('example 2', () => {
        const nums1 = [1, 2, 3, 3];
        const nums2 = [1, 1, 2, 2];
        const result = findDifference(nums1, nums2);
        expect(result).toEqual([[3], []]);
    });

    test('example 3', () => {
        const nums1 = [4, 6, 2, 7, 1, 7, 7];
        const nums2 = [1, 1, 3, 8];
        const result = findDifference(nums1, nums2);
        expect(result).toEqual([[4, 6, 2, 7], [3, 8]]);
    });
});