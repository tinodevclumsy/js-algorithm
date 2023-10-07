/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    var sum = 0
    var map = {}
    for(var i = 0; i < nums.length; i++) {
       if(map[nums[i]]) {
         sum -= nums[i]
       } else {
         sum += nums[i]
         map[nums[i]] = 1
       }
    }
    return sum
 }; 