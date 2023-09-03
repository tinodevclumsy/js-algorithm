/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    var ans = [0]

    for(var i = 1; i <= n; i++) {
        var binary = Number(i).toString(2)
        var numberArray = binary.split('').filter(a => a == 1)
        ans.push(numberArray.length)
    }

    return ans
};

// optimized 

var countBits = function(n) {
    var ans = [0];

    for (var i = 1; i <= n; i++) {
        ans[i] = ans[i >> 1] + (i & 1);
    }

    return ans;
};