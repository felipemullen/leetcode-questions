export class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

export function deleteMiddle(head: ListNode | null): ListNode | null {
    const nodes: Record<number, ListNode> = {};

    let length = 0;
    let current: ListNode | null = head;
    while (current) {
        nodes[length] = current;
        current = current.next;
        ++length;
    }

    const deleteIndex = Math.trunc(length / 2);
    const left = nodes[deleteIndex - 1];
    const right = nodes[deleteIndex + 1];
    left.next = right;

    return head;
}