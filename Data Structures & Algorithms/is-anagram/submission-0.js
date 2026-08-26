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
 
        return s.split("").sort().join("") === t.split("").sort().join("")
    }
}
