function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) return false;

    const count: Record<string, number> = {};

    for (let i = 0; i < s.length; i++) {
        count[s[i]] = (count[s[i]] || 0) + 1;
        count[t[i]] = (count[t[i]] || 0) - 1;
    }

    // ВОТ ЭТОТ КУСОК НУЖНО ДОПИСАТЬ:
    for (const char in count) {
        if (count[char] !== 0) {
            return false;
        }
    }

    return true; 
}