import { beforeEach, describe, expect, test } from 'bun:test';
import { exist } from './02-implementation';

describe('#79. Word Search', () => {
    let board: string[][];

    beforeEach(() => {
        board = [['A', 'B', 'C', 'E'], ['S', 'F', 'C', 'S'], ['A', 'D', 'E', 'E']];
    });

    test('example 1', () => {
        const word = 'ABCCED';
        const result = exist(board, word);
        expect(result).toBe(true);
    });

    test('example 2', () => {
        const word = 'SEE';
        const result = exist(board, word);
        expect(result).toBe(true);
    });

    test('example 3', () => {
        const word = 'ABCB';
        const result = exist(board, word);
        expect(result).toBe(false);
    });
});