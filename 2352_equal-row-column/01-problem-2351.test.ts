import { describe, expect, test } from 'bun:test';
import { equalPairs } from './02-implementation';

describe('#2352. Equal Row-Column Pairs', () => {
    test('example 1', () => {
        const input = [[3, 2, 1], [1, 7, 6], [2, 7, 7]];
        const result = equalPairs(input);
        expect(result).toEqual(1);
    });

    test('example 2', () => {
        const input = [[3, 1, 2, 2], [1, 4, 4, 5], [2, 4, 2, 2], [2, 4, 2, 2]];
        const result = equalPairs(input);
        expect(result).toEqual(3);
    });
});