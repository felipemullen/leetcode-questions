import { describe, expect, test } from 'bun:test';
import { longestSubarray } from './02-implementation';

describe('#1493. Longest Subarray of 1s After Deleting One Element', () => {
    test('example 1', () => {
        const input = [1, 1, 0, 1];
        const result = longestSubarray(input);
        expect(result).toEqual(3);
    });

    test('example 2', () => {
        const input = [0, 1, 1, 1, 0, 1, 1, 0, 1];
        const result = longestSubarray(input);
        expect(result).toEqual(5);
    });

    test('example 3', () => {
        const input = [1, 1, 1];
        const result = longestSubarray(input);
        expect(result).toEqual(2);
    });

    test('test 4', () => {
        const input = [0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1];
        const result = longestSubarray(input);
        expect(result).toEqual(6);
    });
});