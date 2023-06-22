/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    var p1 = 0
    var p2 = 0

    while(p1 !== t.length - 1 && p2 !== t.length - 1) {
        if(s[p1] === t[p2]) {
            p1++
        } else {
            p2++
        }
    }

    return p1 === s.length - 1
};