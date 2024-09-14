import { describe, expect, test } from 'bun:test';
import { minReorder } from './02-implementation';

describe('#1466. Reorder Routes to Make All Paths Lead to the City Zero', () => {
    test('example 1', () => {
        const n = 6;
        const connections = [[0, 1], [1, 3], [2, 3], [4, 0], [4, 5]];
        const result = minReorder(n, connections);
        expect(result).toEqual(3);
    });

    test('example 2', () => {
        const n = 5;
        const connections = [[1, 0], [1, 2], [3, 2], [3, 4]];
        const result = minReorder(n, connections);
        expect(result).toEqual(2);
    });

    test('example 3', () => {
        const n = 5;
        const connections = [[0, 2], [0, 3], [4, 1], [4, 5], [5, 0]];
        const result = minReorder(n, connections);
        expect(result).toEqual(3);
    });
});