class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const n = nums.length;

        if(n == 0) return nums;

        // for(let i = 0; i < n; i++) {
        //     let temp = nums[i];

        //     for(let j = i + 1; j < n; j++) {
        //         if(temp + nums[j] == target) {
        //             return [i, j]
        //         }
        //     }
        // }

        let map = new Map();

        for(let i = 0; i < n; i++) {
            let check = target - nums[i];
            if(map.has(check)) {
                return [i, map.get(check)]
            }else {
                map.set(nums[i], i);
            }
        }
    }
}
