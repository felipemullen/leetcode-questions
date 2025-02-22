export function isSubsequence(s: string, t: string): boolean {
    let sPos = 0;
    let tPos = 0;

    for (let i = 0; i < t.length; i++) {
        const sChar = s[sPos];
        const tChar = t[tPos];

        if (sChar !== tChar) {
            tPos++;
        } else {
            sPos++;
            tPos++;
        }

        if (sPos === s.length) {
            return true;
        }
    }

    return false;
}