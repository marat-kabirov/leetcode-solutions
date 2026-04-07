function containsDuplicate(nums: number[]): boolean {
    const seen = new Set<number>();   //
    for (const num of nums) {
        if(seen.has(num)) return true; // If the number is already in the set, we found a duplicate
        seen.add(num); // Add the number to the set for future reference
    }
    return false;
}