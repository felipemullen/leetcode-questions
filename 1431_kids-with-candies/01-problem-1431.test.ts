import { describe, expect, test } from 'bun:test';
import { kidsWithCandies } from './02-implementation';

describe('#1431. Kids With the Greatest Number of Candies', () => {
    test('example 1', () => {
        const candies = [2, 3, 5, 1, 3];
        const extraCandies = 3;
        const result = kidsWithCandies(candies, extraCandies);
        expect(result).toEqual([true, true, true, false, true]);
    });

    test('example 2', () => {
        const candies = [4, 2, 1, 1, 2];
        const extraCandies = 1;
        const result = kidsWithCandies(candies, extraCandies);
        expect(result).toEqual([true, false, false, false, false]);
    });

    test('example 3', () => {
        const candies = [12, 1, 12];
        const extraCandies = 10;
        const result = kidsWithCandies(candies, extraCandies);
        expect(result).toEqual([true, false, true]);
    });
});