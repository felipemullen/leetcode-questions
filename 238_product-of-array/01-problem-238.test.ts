import { describe, expect, test } from 'bun:test';
import { productExceptSelf } from './02-implementation';

describe('#238. Product of Array Except Self', () => {
    test('example 1', () => {
        const nums = [1, 2, 3, 4];
        const result = productExceptSelf(nums);
        expect(result).toEqual([24, 12, 8, 6]);
    });

    test('example 2', () => {
        const nums = [-1, 1, 0, -3, 3];
        const result = productExceptSelf(nums);
        // Stringifying because of some -0 !== 0 comparison issue
        expect(result.toString()).toEqual([0, 0, 9, 0, 0].toString());
    });
});