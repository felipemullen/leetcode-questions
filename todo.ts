/**
 * Implement the hasWord function to check the matrix of characters
 * for foods that can appear in diagonal, horizontal or vertical directions.
 * The words can also appear in reverse.
 */

const MATRIX = [
    ["F", "O", "C", "G"],
    ["E", "O", "Q", "R"],
    ["A", "T", "O", "A"],
    ["T", "A", "S", "D"],
    ["R", "A", "E", "P"],
]

const words: [string, boolean][] = [
    [null, false],
    ['', false],
    ['Food', true],
    ['Corn', false],
    ['Pear', true],
    ['Eat', true],
    ['Grain', false]
]

// Implement this function
function hasWord(word: string) {
    const row = MATRIX[0];

    function follow(x: number, y: number, dx: number, dy: number, newWord: string[]) {
        if (x < 0 || y < 0 || x >= row.length || y >= MATRIX.length || newWord.length >= word.length) {
            return;
        }

        const char = MATRIX[y][x];
        newWord.push(char.toLowerCase());

        follow(x + dx, y + dy, dx, dy, newWord);
    }


    for (let y = 0; y < MATRIX.length; ++y) {
        for (let x = 0; x < row.length; ++x) {

            for (let i = -1; i < 2; ++i) {
                for (let j = -1; j < 2; ++j) {
                    if (i === 0 && j === 0) {
                        continue;
                    }

                    const newWord: string[] = [];
                    follow(x, y, i, j, newWord);

                    if (newWord.join('') === word.toLowerCase()) {
                        return true;
                    }
                }
            }
        }
    }


    return false
}

function main() {
    let correct = 0

    for (let [word, exists] of words) {
        const output = hasWord(word);
        console.log('expected', exists, 'got', output, 'for', word);
        if (output === exists) {
            correct++
        }
    }

    console.log(`You got ${(correct / words.length) * 100}% correct.`)
}

main()