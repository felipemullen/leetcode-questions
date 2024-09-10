import { describe, expect, test } from 'bun:test';
import { compress } from './02-implementation';

describe('#443. String Compression', () => {
    test('example 1', () => {
        const chars = ['a', 'a', 'b', 'b', 'c', 'c', 'c'];
        const result = compress(chars);
        expect(result).toEqual(6);
    });

    test('example 2', () => {
        const chars = ['a'];
        const result = compress(chars);
        expect(result).toEqual(1);
    });

    test('example 3', () => {
        const chars = ['a', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b'];
        const result = compress(chars);
        expect(result).toEqual(4);
    });
});