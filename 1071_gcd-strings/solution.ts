export function gcdOfStrings(str1: string, str2: string): string {
    let bestCandidate = '';

    for (let size = 2; size <= str2.length; size++) {
        let theBigString = str1.substring(0);
        const chunk = str2.substring(0, size);

        // go through the other string removing chunks. If
        // we can reach the end of the string with no characters
        // remaining, it is a valid divisor, and should SET
        // the best candidate

        while (true) {
            if (theBigString.startsWith(chunk)) {
                theBigString = theBigString.substring(chunk.length);

                if (theBigString.length === 0) {
                    bestCandidate = chunk;
                }
            } else {
                break;
            }
        }
    }

    return bestCandidate;
}