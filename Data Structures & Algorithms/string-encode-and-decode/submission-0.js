class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        const n = strs.length;

        if(n == 0) return '';

        let res = [];

        for(let i = 0; i < n; i++) {
            res.push(strs[i].length, '#', strs[i]);
        }

        return res.join('');
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        // 5#hello5#world
        let res = [];
        let i = 0;
        let j = 0;

        while(i < str.length) {
            j = i;

            while(str[j] != '#') {
                j++;
            }

            let length = parseInt(str.substring(i, j));
            i = j + 1;
            j = i + length;

            res.push(str.substring(i, j))
            i = j;
        }

        return res;
    }
}
