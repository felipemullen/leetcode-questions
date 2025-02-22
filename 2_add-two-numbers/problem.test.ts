import { describe, expect, test } from 'bun:test';
import { addTwoNumbers, ListNode } from './solution.ts';

function arrayToList(arr: number[]): ListNode | null {
    return arr.reduce<ListNode | null>((previous, val) => new ListNode(val, previous), null);
}

function listToArray(list: ListNode | null): number[] {
    const result: number[] = [];
    let current = list;
    while (current) {
        result.push(current.val);
        current = current.next;
    }
    return result.reverse();
}

describe('#1. Container With Most Water', () => {
    test('example 1', () => {
        const l1 = arrayToList([2, 4, 3]);
        const l2 = arrayToList([5, 6, 4]);

        const result = addTwoNumbers(l1, l2);

        expect(listToArray(result)).toEqual([7, 0, 8]);
    });

    test('example 2', () => {
        const l1 = arrayToList([0]);
        const l2 = arrayToList([0]);

        const result = addTwoNumbers(l1, l2);

        expect(listToArray(result)).toEqual([0]);
    });

    test('example 3', () => {
        const l1 = arrayToList([9, 9, 9, 9, 9, 9, 9]);
        const l2 = arrayToList([9, 9, 9, 9]);

        const result = addTwoNumbers(l1, l2);

        expect(listToArray(result)).toEqual([8, 9, 9, 9, 0, 0, 0, 1]);
    });
});