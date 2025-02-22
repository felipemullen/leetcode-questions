/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

export class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

export function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {

    let currentResult: ListNode | null = null;
    
    let currentL1 = l1;
    let currentL2 = l2;

    let index = 0;
    let carry = 0;
    while (currentL1 || currentL2) {
        const l1Value = currentL1?.val ?? 0;
        const l2Value = currentL2?.val ?? 0;
        
        let sum = l1Value + l2Value + carry;
        carry = 0;
        
        if (sum >= 10) {
            carry = 1;
            sum = sum - 10;
        }

        currentResult = new ListNode(sum, currentResult);
        currentL1 = currentL1?.next ?? null;
        currentL2 = currentL2?.next ?? null;
        ++index;
    }

    if (carry) {
        currentResult = new ListNode(carry, currentResult);
    }
    
    return currentResult;
};