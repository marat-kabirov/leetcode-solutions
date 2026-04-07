function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) return false; // If the lengths are different, they cannot be anagrams

    const count: Record<string, number> = {}; // Create a count object to track the frequency of each character

    for (let i = 0; i < s.length; i++) {    // Iterate through both strings simultaneously
        count[s[i]] = (count[s[i]] || 0) + 1; // Increment the count for the character in string s
        count[t[i]] = (count[t[i]] || 0) - 1; // Decrement the count for the character in string t
    }

    for (const char in count) { // Check if all counts are zero
        if (count[char] !== 0) { // If any count is not zero, then s and t are not anagrams
            return false;
        }
    }

    return true; 
}