import { exist } from './02-implementation';

const cases = [
    { board: [['A', 'B', 'C', 'E'], ['S', 'F', 'C', 'S'], ['A', 'D', 'E', 'E']], word: 'ABCCED', expected: true },
    { board: [['A', 'B', 'C', 'E'], ['S', 'F', 'C', 'S'], ['A', 'D', 'E', 'E']], word: 'SEE', expected: true },
    { board: [['A', 'B', 'C', 'E'], ['S', 'F', 'C', 'S'], ['A', 'D', 'E', 'E']], word: 'ABCB', expected: false },
];

for (const { board, word, expected } of cases) {
    const result = exist(board, word);

    if (result === expected) {
        console.log('✔️', result.toString(), '===', expected.toString());
    } else {
        console.log('x', result.toString(), '!==', expected.toString());
    }
}
