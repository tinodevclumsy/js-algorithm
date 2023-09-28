/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    var ans = []

    for(var i = 0; i < nums.length; i++) {
        nums[i] % 2 === 0 ? ans.unshift(nums[i]) : ans.push(nums[i])
    }

    return ans
};

// optimized 
// 'unshift' and push have O(n) time complexity

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    var evenIndex = 0; // Pointer for even numbers
    var oddIndex = nums.length - 1; // Pointer for odd numbers
    
    var result = new Array(nums.length);

    for (var i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 0) {
            result[evenIndex] = nums[i];
            evenIndex++;
        } else {
            result[oddIndex] = nums[i];
            oddIndex--;
        }
    }

    return result;
};