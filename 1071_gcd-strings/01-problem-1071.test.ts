import { describe, expect, test } from 'bun:test';
import { gcdOfStrings } from './02-implementation';

describe('#1071. Greatest Common Divisor of Strings', () => {
    test('example 1', () => {
        const str1 = 'ABCABC';
        const str2 = 'ABC';
        const result = gcdOfStrings(str1, str2);
        expect(result).toEqual('ABC');
    });

    test('example 2', () => {
        const str1 = 'ABABAB';
        const str2 = 'ABAB';
        const result = gcdOfStrings(str1, str2);
        expect(result).toEqual('AB');
    });

    test('example 3', () => {
        const str1 = 'LEET';
        const str2 = 'CODE';
        const result = gcdOfStrings(str1, str2);
        expect(result).toEqual('');
    });
});