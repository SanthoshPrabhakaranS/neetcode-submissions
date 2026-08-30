class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const n = nums.length;

        if(n < 3) return nums;

        // let set = new Set()
        // nums.sort((a, b) => a - b)

        // for(let i = 0; i < n; i++) {
        //     for(let j = i + 1; j < n; j++) {
        //         for(let k = j + 1; k < n; k++) {
        //             if(nums[i] + nums[j] + nums[k] == 0) {
        //                 set.add(JSON.stringify([nums[i], nums[j], nums[k]]));
        //             }
        //         }
        //     }
        // }

        // return Array.from(set).map((item) => JSON.parse(item));

        let result = [];
        nums.sort((a, b) => a - b)

        for(let i = 0; i < n; i++) {
            if(nums[i] > 0) break;
            if(i > 0 && nums[i] == nums[i - 1]) continue;

            let left = i + 1;
            let right = n - 1;

            while(left < right) {
                let sum = nums[i] + nums[left] + nums[right];
                if(sum == 0) {
                    result.push([nums[i] ,nums[left], nums[right]]);
                    left++;
                    right--;

                    while(left < right && nums[left] == nums[left - 1]) {
                    left++;
                }

                while(left < right && nums[right] == nums[right + 1]) {
                    right--;
                }
                }else if(sum > 0) {
                    right--;
                }else if(sum < 0) {
                    left++;

                }
                
            }
        }

        return result;
    }
}
