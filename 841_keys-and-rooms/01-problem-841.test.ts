import { describe, expect, test } from 'bun:test';
import { canVisitAllRooms } from './02-implementation';

describe('#841. Keys and Rooms', () => {
    test('example 1', () => {
        const input = [[1], [2], [3], []];
        const result = canVisitAllRooms(input);
        expect(result).toEqual(true);
    });

    test('example 2', () => {
        const input = [[1, 3], [3, 0, 1], [2], [0]];
        const result = canVisitAllRooms(input);
        expect(result).toEqual(false);
    });

    test('test 3', () => {
        const input = [[1], [2, 3], [3], []];
        const result = canVisitAllRooms(input);
        expect(result).toEqual(true);
    });

    test('test 4', () => {
        const input = [[0], [2, 4], [3], []];
        const result = canVisitAllRooms(input);
        expect(result).toEqual(false);
    });

    test('test 5', () => {
        const input = [[1], [5, 0, 2], [3], [4, 6], [3, 3], [1, 2], []];
        const result = canVisitAllRooms(input);
        expect(result).toEqual(true);
    });

    test('test 6', () => {
        const input = [[1], [5], [3], [4], [5], [2, 6], []];
        const result = canVisitAllRooms(input);
        expect(result).toEqual(true);
    });

    test('test 7', () => {
        const input = [[1], [5], [], [], [], [2, 3, 4, 6], []];
        const result = canVisitAllRooms(input);
        expect(result).toEqual(true);
    });

    test('test 8', () => {
        const input = [[1], [5, 0, 3], [3], [4, 6], [5, 3], [1, 2, 6], []];
        const result = canVisitAllRooms(input);
        expect(result).toEqual(true);
    });
});