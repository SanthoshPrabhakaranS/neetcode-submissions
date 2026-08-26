class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const n = strs.length;

        if(n == 0) return strs;
        let result = [];
        let map = new Map();

        for(let i = 0; i < n; i++) {
            let sortedArr = strs[i].split("").sort().join("");
            if(!map.has(sortedArr)) {
                map.set(sortedArr, [strs[i]]);
            }else {
                map.set(sortedArr, [...map.get(sortedArr), strs[i]]);
            }
        }

        return Array.from(map.values())
    }
}
