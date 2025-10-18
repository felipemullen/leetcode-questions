import { predictPartyVictory } from './01-implementation';

const cases = [
    { input: 'RD', expected: 'Radiant' },
    { input: 'RDD', expected: 'Dire' },
];

for (const { input, expected } of cases) {
    const result = predictPartyVictory(input);

    if (result === expected) {
        console.log('✔️', result, '===', expected);
    } else {
        console.log('x', result, '!==', expected);
    }
}
