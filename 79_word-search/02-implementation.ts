export function exist(board: string[][], word: string): boolean {
    const firstRow = board[0];

    function makeWord(x: number, y: number, newWord: string[]) {
        if (y < 0 || x < 0 || y >= board.length || x >= firstRow.length || newWord.length >= word.length) {
            return;
        }

        const nextChar = newWord.length;
        const thisChar = board[y][x];
        board[y][x] = '-';

        if (thisChar === word[nextChar]) {
            newWord.push(thisChar);

            makeWord(x - 1, y, newWord);
            makeWord(x + 1, y, newWord);
            makeWord(x, y - 1, newWord);
            makeWord(x, y + 1, newWord);
        }
    }

    for (let y = 0; y < board.length; ++y) {
        const row = board[y];
        for (let x = 0; x < row.length; ++x) {
            let newWord: string[] = [];

            makeWord(x, y, newWord);

            if (newWord.join('') === word) {
                return true;
            }
        }
    }

    return false;
};