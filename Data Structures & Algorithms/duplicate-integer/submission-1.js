class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {

        const n =  nums.length;

        if(n == 0) return false;

        for(let i = 0; i < n; i++) {
            let temp = nums[i];
            for(let j = i + 1; j < n; j++) {
                if(nums[j] == temp) {
                    return true;
                }
            }
        }

        return false;
    }
}
