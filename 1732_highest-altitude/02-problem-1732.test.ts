import { describe, expect, test } from 'bun:test';
import { largestAltitude } from './01-implementation';

describe('#1732. Find the Highest Altitude', () => {
    test('example 1', () => {
        const gain = [-5, 1, 5, 0, -7];
        const result = largestAltitude(gain);
        expect(result).toEqual(1);
    });

    test('example 2', () => {
        const gain = [-4, -3, -2, -1, 4, 3, 2];
        const result = largestAltitude(gain);
        expect(result).toEqual(0);
    });
});