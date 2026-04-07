function twoSum(nums: number[], target: number): number[] {
    const prevMap = new Map<number, number>(); //Save previously seen numbers and their indices
    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i]; // How much we need to reach the target from the current number

        // Check if the needed number (diff) has been seen before
        if (prevMap.has(diff)) {
            return [prevMap.get(diff)!, i]; // If found, return the indices of the two numbers
        }

        // Save the current number and its index
        // Add the current number and its index to prevMap
        prevMap.set(nums[i], i);
    }
    return [];
}