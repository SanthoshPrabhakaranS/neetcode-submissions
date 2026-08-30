class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const n = s.length;

        if(n == 0) return false;
        s.trim()

        function isAlphaNum(char) {
            return (
                (char >= 'a' && char <= 'z') ||
                (char >= 'A' && char <= 'Z') ||
                (char >= '0' && char <='9' )
            )
        }

        let str = ''

        for(let i = 0; i < n; i++) {
            if(isAlphaNum(s[i])) {
                str += s[i].toLowerCase();
            }
        }

        return str === str.split("").reverse().join("");
    }
}
