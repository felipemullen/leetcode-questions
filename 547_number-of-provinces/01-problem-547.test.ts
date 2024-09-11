import { describe, expect, test } from 'bun:test';
import { findCircleNum } from './02-implementation';

describe('#547. Number of Provinces', () => {
    test('example 1', () => {
        const input = [[1, 1, 0], [1, 1, 0], [0, 0, 1]];
        const result = findCircleNum(input);
        expect(result).toEqual(2);
    });

    test('example 1', () => {
        const input = [[1, 0, 0], [0, 1, 0], [0, 0, 1]];
        const result = findCircleNum(input);
        expect(result).toEqual(3);
    });

    test('example 1', () => {
        const input = [[1, 1, 0, 1], [1, 1, 1, 0], [0, 1, 1, 1], [1, 0, 1, 1]];
        const result = findCircleNum(input);
        expect(result).toEqual(1);
    });

    test('example 1', () => {
        const input = [[1, 0, 0, 1], [0, 1, 1, 0], [0, 1, 1, 0], [1, 0, 0, 1]];
        const result = findCircleNum(input);
        expect(result).toEqual(2);
    });

    test('example 1', () => {
        const input = [[1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1]];
        const result = findCircleNum(input);
        expect(result).toEqual(1);
    });
});
