import { describe, expect, test } from 'bun:test';
import { closeStrings } from './02-implementation';

describe('#1657. Determine if Two Strings Are Close', () => {
    test('example 1', () => {
        const word1 = 'abc';
        const word2 = 'bca';
        const result = closeStrings(word1, word2);
        expect(result).toEqual(true);
    });

    test('example 2', () => {
        const word1 = 'a';
        const word2 = 'aa';
        const result = closeStrings(word1, word2);
        expect(result).toEqual(false);
    });

    test('example 3', () => {
        const word1 = 'cabbba';
        const word2 = 'abbccc';
        const result = closeStrings(word1, word2);
        expect(result).toEqual(true);
    });
});