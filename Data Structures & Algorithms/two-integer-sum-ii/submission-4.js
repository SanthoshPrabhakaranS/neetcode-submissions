class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        const n = numbers.length;

        if(n == 0) return numbers;

        // for(let i = 0 ; i < n; i++) {
        //     for(let j = 0; j < n; j++) {
        //         if(numbers[i] + numbers[j] == target) {
        //             return [numbers[i], numbers[j]];
        //         }
        //     }
        // }

        // let map = new Map();

        // for(let i = 0; i < n; i++) {
        //     let toCheck = target - numbers[i];

        //     if(map.has(toCheck)) {
        //         return [map.get(toCheck) + 1, i + 1];
        //     }else {
        //         map.set(numbers[i], i);
        //     }
        // }

        // return []

        let left = 0;
        let right = n - 1;

        while(left < right) {
            const temp = numbers[left] + numbers[right];
            if(temp == target) {
                return [left + 1, right + 1];
            }

            if(temp > target) {
                right--;
            }

            if(temp < target) {
                left++;
            }
        }

        return [];
    }
}
