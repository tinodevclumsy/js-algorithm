/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// fisrt approach, using pointers
// cannot resolve cases (s = "", t = "abc"), (s = "abc", t = "")
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

// Googled it 
// url https://dev.to/rembrandtreyes/let-s-solve-leetcode-is-subsequence-46j3
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var isSubsequence = function(s, t) {
    if (s.length === 0) return true

    let sPointer = 0
    let tPointer = 0

    while (sPointer < s.length && tPointer < t.length) {
        if(s[sPointer] === t[tPointer]) sPointer++

        tPointer++
    }

    // resolve case (s = "b", t = "c")
    return sPointer === s.length
};