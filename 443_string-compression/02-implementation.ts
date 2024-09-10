export function compress(chars: string[]): number {
    let result: [number, string][] = [];
    let compressIndex = 0;

    for (let i = 0; i < chars.length; i++) {
        const current = chars[i];
        const previous = chars[i - 1];

        if (!result[compressIndex]) {
            result[compressIndex] = [1, current];
        } else {
            if (previous === current) {
                const [count, c] = result[compressIndex];
                result[compressIndex] = [count + 1, c];
            } else {
                compressIndex++;
                result[compressIndex] = [1, current];
            }
        }
    }

    let output = '';
    for (const [count, value] of result) {
        if (count === 1) {
            output += value;
        } else {
            output += `${value}${count}`;
        }
    }

    return output.length;
}
