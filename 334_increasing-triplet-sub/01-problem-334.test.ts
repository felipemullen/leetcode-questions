import { describe, expect, test } from 'bun:test';
import { increasingTriplet } from './02-implementation';

describe('#334. Increasing Triplet Subsequence', () => {
    test('example 1', () => {
        const chars = [1, 2, 3, 4, 5];
        const result = increasingTriplet(chars);
        expect(result).toBe(true);
    });

    test('example 2', () => {
        const chars = [5, 4, 3, 2, 1];
        const result = increasingTriplet(chars);
        expect(result).toBe(false);
    });

    test('example 3', () => {
        const chars = [2, 1, 5, 0, 4, 6];
        const result = increasingTriplet(chars);
        expect(result).toBe(true);
    });
});