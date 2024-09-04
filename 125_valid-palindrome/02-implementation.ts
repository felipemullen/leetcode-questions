export function isPalindrome(s: string): boolean {
    if (s.length <= 1) {
        return true;
    }

    if (!isValid(s[0])) {
        let newWord = s.substring(0 + 1);
        return isPalindrome(newWord);
    } else if (!isValid(s[s.length - 1])) {
        let newWord = s.substring(0, s.length - 1);
        return isPalindrome(newWord);
    } else if (s[0].toLowerCase() === s[s.length - 1].toLowerCase()) {
        let newWord = s.substring(0 + 1, s.length - 1);
        return isPalindrome(newWord);
    }

    return false;
};

function isValid(c: string) {
    const regex = /[a-zA-Z]/g;
    const test = regex.exec(c);

    if (!test) {
        return false;
    }

    return true;
}
