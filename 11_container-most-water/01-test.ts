import { maxArea } from './02-implementation';

const cases = [
    { height: [1, 8, 6, 2, 5, 4, 8, 3, 7], expected: 49 },
    { height: [1, 1], expected: 1 }
];

for (const { height, expected } of cases) {
    const result = maxArea(height);

    if (result === expected) {
        console.log('✔️', result, '===', expected);
    } else {
        console.log('x', result, '!==', expected);
    }
}