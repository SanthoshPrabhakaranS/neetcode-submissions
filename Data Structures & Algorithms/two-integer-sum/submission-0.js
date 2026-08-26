class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const n = nums.length;

        if(n == 0) return nums;

        for(let i = 0; i < n; i++) {
            let temp = nums[i];

            for(let j = i + 1; j < n; j++) {
                if(temp + nums[j] == target) {
                    return [i, j]
                }
            }
        }
    }
}
