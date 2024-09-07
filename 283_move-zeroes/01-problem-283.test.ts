import { describe, expect, test } from 'bun:test';
import { moveZeroes } from './02-implementation';

describe('#283. Move Zeroes', () => {
    test('example 1', () => {
        const nums = [0, 1, 0, 3, 12];
        moveZeroes(nums);
        expect(nums).toEqual([1, 3, 12, 0, 0]);
    });

    test('example 2', () => {
        const nums = [0];
        moveZeroes(nums);
        expect(nums).toEqual([0]);
    });
});