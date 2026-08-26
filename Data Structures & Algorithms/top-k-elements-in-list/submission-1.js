class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const n = nums.length;

        if(n == 0) return nums;

        // let result = [];

        // for(let i = 0; i < n; i++) {
        //     let temp = 1;
        //     for(let j = i + 1; j < n ; j++) {
        //         if(temp >= k) {
        //             result.push(nums[i]);
        //             break;
        //         }else if(nums[j] == nums[i]) {
        //             temp++;
        //         }
        //     }
        // }

        // return result;

        let map = new Map();

        for(let i = 0; i < n; i++) {
            map.set(nums[i], (map.get(nums[i]) || 0) + 1)
        }

        const entries = Array.from(map.entries());
        entries.sort((a, b) => b[1] - a[1]);

        return entries.slice(0, k).map((item) => item[0]);
    }
}
