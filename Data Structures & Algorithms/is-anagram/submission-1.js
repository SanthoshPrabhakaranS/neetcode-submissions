class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const n = s.length;
        const m = t.length;

        if(n != m) return false;
 
        // return s.split("").sort().join("") === t.split("").sort().join("")

        let count = new Array(26).fill(0);

        for(let i = 0; i < n; i++) {
            count[s.charCodeAt(i) - 'a'.charCodeAt(0)]++
            count[t.charCodeAt(i) - 'a'.charCodeAt(0)]--
        }

        return count.every((i) => i == 0);
    }
}
