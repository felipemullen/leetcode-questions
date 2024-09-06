import { describe, expect, test } from 'bun:test';
import { reverseWords } from './02-implementation';

describe('#151. Reverse Words in a String', () => {
    test('example 1', () => {
        const input = 'the sky is blue';
        const result = reverseWords(input);
        expect(result).toEqual('blue is sky the');
    });

    test('example 2', () => {
        const input = '  hello world  ';
        const result = reverseWords(input);
        expect(result).toEqual('world hello');
    });

    test('example 3', () => {
        const input = 'a good   example';
        const result = reverseWords(input);
        expect(result).toEqual('example good a');
    });
});