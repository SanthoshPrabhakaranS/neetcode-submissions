class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const n = nums.length;

        if(n == 0) return 0;

        let set = new Set(nums)
        let maxStreak = 0;


        for(let i = 0; i < n; i++) {
            let num = nums[i];
            let streak = 0;

                if(!set.has(num - 1)) {

            while(set.has(num)) {
                num++;
                streak++;
            }
                }

            maxStreak = Math.max(streak, maxStreak);
        }

        return maxStreak;
    }
}
