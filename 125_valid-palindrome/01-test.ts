import { isPalindrome } from './02-implementation';

const cases = [
    { s: 'A man, a plan, a canal: Panama', expected: true },
    { s: 'race a car', expected: false },
    { s: ',raCeca,r', expected: true },
    { s: ' ', expected: true },
    { s: '', expected: true },
    { s: 'tacocat', expected: true },
    { s: 't,a coc|at:', expected: true },
];

for (const { s, expected } of cases) {
    const result = isPalindrome(s);

    if (result === expected) {
        console.log('✔️', result.toString(), '===', expected.toString());
    } else {
        console.log('x', result.toString(), '!==', expected.toString());
    }
}
