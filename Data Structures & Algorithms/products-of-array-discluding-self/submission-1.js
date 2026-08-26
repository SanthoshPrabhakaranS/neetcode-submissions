class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const n = nums.length;

        if(n == 0) return nums;

        let result = [];

        // for(let i = 0; i < n; i++) {
        //     let product = 1;
        //     for(let j = 0; j < n; j++) {
        //         if(i != j) {
        //             product *= nums[j];
        //         }
        //     }

        //     result.push(product);
        // }

        // return result;

        let prefix = [];
        prefix[0] = 1;
        for(let i = 1; i < n; i++) {
            prefix[i] = prefix[i - 1] * nums[i - 1];
        }

        let suffix = [];
        suffix[n - 1] = 1;
        for(let i = n - 2; i >= 0; i--) {
            suffix[i] = suffix[i + 1] * nums[i + 1];
        }

        for(let i = 0; i < n; i++) {
            result[i] = prefix[i] * suffix[i];
        }

        return result;
    }
}
