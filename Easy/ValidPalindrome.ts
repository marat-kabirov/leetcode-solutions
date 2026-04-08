function isPalindrome(s: string): boolean {
    let left = 0;
    let right = s.length - 1;

    const isAlphaNum = (c: string) => /[a-zA-Z0-9]/.test(c);

    while (left < right) {

        if (!isAlphaNum(s[left])) {
            left++;
            continue;
        }

        if (!isAlphaNum(s[right])) {
            right--;
            continue;
        }
        if (s[left].toLowerCase() !== s[right].toLowerCase()) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}