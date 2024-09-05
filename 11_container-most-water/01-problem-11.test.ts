import { describe, expect, test } from 'bun:test'
import { maxArea } from './02-implementation';

describe('#11. Container With Most Water', () => {
    test('example 1', () => {
        const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
        const result = maxArea(height);
        expect(result).toBe(49);
    });

    test('example 2', () => {
        const height = [1, 1];
        const result = maxArea(height);
        expect(result).toBe(1);
    });
});