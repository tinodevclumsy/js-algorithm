/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    var map = {}
    for(var i = 0; i < nums.length; i++) {
        if(map[nums[i]]) {
            return true
        } else {
            map[nums[i]] = 1
        }
    }
    return false
};

// optimized

var containsDuplicate = function(nums) {
    const numSet = new Set();

    for (const num of nums) {
        if (numSet.has(num)) {
            return true;
        } else {
            numSet.add(num);
        }
    }

    return false;
};