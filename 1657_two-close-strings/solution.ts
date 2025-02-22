export function closeStrings(word1: string, word2: string): boolean {
    if (word1.length !== word2.length) {
        return false;
    }

    const w1counts: Record<string, number> = {};

    for (const c of word1) {
        if (!(c in w1counts)) {
            w1counts[c] = 0;
        }

        ++w1counts[c];
    }

    const w2counts: Record<string, number> = {};

    for (const c of word2) {
        if (!(c in w2counts)) {
            w2counts[c] = 0;
        }

        ++w2counts[c];
    }

    const w1Keys = Object.keys(w1counts).sort().toString();
    const w2Keys = Object.keys(w2counts).sort().toString();

    if (w1Keys !== w2Keys) {
        return false;
    }

    const w1values = Object.values(w1counts).sort().toString();
    const w2values = Object.values(w2counts).sort().toString();

    return w1values === w2values;
}
