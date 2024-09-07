export function reverseWords(s: string): string {
    const sanitized = s.replace(/\s+/g, ' ').trim();
    const words = sanitized.split(' ');

    const newWords: string[] = [];
    for (const w of words) {
        newWords.unshift(w);
    }

    return newWords.join(' ');
}