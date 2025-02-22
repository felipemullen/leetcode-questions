export function removeStars(s: string): string {
    const newString: string[] = [];
    for (const c of s) {
        if (c === '*' && newString.length) {
            newString.pop();
        } else {
            newString.push(c);
        }
    }

    return newString.join('');
}