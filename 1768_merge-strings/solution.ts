export function mergeAlternately(word1: string, word2: string): string {
    let result = '';

    if (word2.length > word1.length) {
        for (let i = 0; i < word1.length; i++) {
            const c1 = word1[i];
            const c2 = word2[i];

            result += c1 + c2;
        }

        if (word2.length > word1.length) {
            const nextStartingIndex = word2.length - word1.length;

            for (let i = nextStartingIndex; i < word2.length; i++) {
                const c2 = word2[i];
                result += c2;
            }
        }
    } else {
        for (let i = 0; i < word2.length; i++) {
            const c1 = word1[i];
            const c2 = word2[i];

            result += c1 + c2;
        }

        if (word1.length > word2.length) {
            const nextStartingIndex = word1.length - word2.length;

            for (let i = nextStartingIndex; i < word1.length; i++) {
                const c2 = word1[i];
                result += c2;
            }
        }
    }

    return result;
}
