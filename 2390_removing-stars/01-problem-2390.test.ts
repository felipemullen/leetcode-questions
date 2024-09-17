import { describe, expect, test } from 'bun:test';
import { removeStars } from './02-implementation';

describe('#2390. Removing Stars', () => {
    test('example 1', () => {
        const input = 'leet**cod*e';
        const result = removeStars(input);
        expect(result).toEqual('lecoe');
    });

    test('example 2', () => {
        const input = 'erase*****';
        const result = removeStars(input);
        expect(result).toEqual('');
    });
});