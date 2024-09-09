import { describe, expect, test } from 'bun:test';
import { isSubsequence } from './02-implementation';

describe('#334. Increasing Triplet Subsequence', () => {
    test('example 1', () => {
        const s = 'abc';
        const t = 'ahbgdc'
        const result = isSubsequence(s, t);
        expect(result).toBe(true);
    });

    test('example 2', () => {
        const s = 'axc';
        const t = 'ahbgdc'
        const result = isSubsequence(s, t);
        expect(result).toBe(false);
    });
});