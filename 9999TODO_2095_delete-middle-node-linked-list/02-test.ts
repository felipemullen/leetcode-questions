import { deleteMiddle, ListNode } from './01-implementation';

const cases = [
    { values: [1, 3, 4, 7, 1, 2, 6], expected: [1, 3, 4, 1, 2, 6] },
    { values: [1, 2, 3, 4], expected: [1, 2, 4] },
    { values: [2, 1], expected: [2] },
];

function arrayEquals(arr1: number[], arr2: number[]) {
    if (arr1.length !== arr2.length) {
        return false;
    }

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }

    return true;
}

function createList(values: number[]) {
    let last;
    for (let i = values.length - 1; i >= 0; --i) {
        const newNode = new ListNode(values[i], last);
        last = newNode;
    }

    return last;
}

function getValues(node: ListNode | null) {
    let values: number[] = [];

    let current: ListNode | null = node;
    while (current) {
        values.push(current.val);
        current = current.next;
    }

    return values;
}

for (const { values, expected } of cases) {

    const list = createList(values);
    const result = deleteMiddle(list);

    const output = getValues(result);

    if (arrayEquals(output, expected)) {
        console.log('✔️', output, '===', expected);
    } else {
        console.log('x', output, '!==', expected);
    }
}
