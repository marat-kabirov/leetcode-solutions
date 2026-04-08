function groupAnagrams(strs: string[]): string[][] {
    const map = new Map<string, string[]>(); //Key-value pair: sorted word -> list of anagrams

    for (const s of strs) {
        let key = s.split('').sort().join(''); // Sort the characters of the string to get the key

        if (!map.has(key)) { // If the key doesn't exist in the map, initialize it with an empty array
            map.set(key, []);
        }       
        map.get(key)!.push(s); // Add the original string to the array corresponding to the sorted key

    }

    return Array.from(map.values());
}