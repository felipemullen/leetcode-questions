import { describe, expect, test } from 'bun:test';
import { isPalindrome } from './02-implementation';

describe('#125. Valid Palindrome', () => {
    test('example 1', () => {
        const input = 'A man, a plan, a canal: Panama';
        const result = isPalindrome(input);
        expect(result).toEqual(true);
    });

    test('example 2', () => {
        const input = 'race a car';
        const result = isPalindrome(input);
        expect(result).toEqual(false);
    });

    test('example 3', () => {
        const input = ' ';
        const result = isPalindrome(input);
        expect(result).toEqual(true);
    });

    test(',raCeca,r', () => {
        const input = ',raCeca,r';
        const result = isPalindrome(input);
        expect(result).toEqual(true);
    });

    test('<empty>', () => {
        const input = '';
        const result = isPalindrome(input);
        expect(result).toEqual(true);
    });

    test('tacocat', () => {
        const input = 'tacocat';
        const result = isPalindrome(input);
        expect(result).toEqual(true);
    });

    test('t,a coc|at:', () => {
        const input = 't,a coc|at:';
        const result = isPalindrome(input);
        expect(result).toEqual(true);
    });

});