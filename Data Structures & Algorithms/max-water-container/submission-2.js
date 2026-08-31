class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        const n = heights.length;

        if(n == 0) return 0;

        let max = 0;

        // for(let i = 0; i < n; i++) {
        //     for(let j = i + 1; j < n; j++) {
        //         max = Math.max(max, Math.min(heights[i], heights[j]) * (j - i));
        //     }
        // }

        let left = 0;
        let right = n - 1;

        while(left < right) {
            max = Math.max(max, Math.min(heights[left], heights[right]) * (right - left));

            if(heights[left] <= heights[right]) {
                left++;
            }else {
                right--;
            }
        }

        return max;
    }
}
