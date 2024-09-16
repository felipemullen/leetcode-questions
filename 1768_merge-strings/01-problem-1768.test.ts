import { describe, expect, test } from 'bun:test';
import { mergeAlternately } from './02-implementation';

describe('#1768. Merge Strings Alternately', () => {
    test('example 1', () => {
        const word1 = 'abc';
        const word2 = 'pqr';
        const result = mergeAlternately(word1, word2);
        expect(result).toEqual('apbqcr');
    });

    test('example 2', () => {
        const word1 = 'ab';
        const word2 = 'pqrs';
        const result = mergeAlternately(word1, word2);
        expect(result).toEqual('apbqrs');
    });

    test('example 3', () => {
        const word1 = 'abcd';
        const word2 = 'pq';
        const result = mergeAlternately(word1, word2);
        expect(result).toEqual('apbqcd');
    });
});