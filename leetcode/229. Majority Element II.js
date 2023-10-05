/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function (nums) {
  var numberMap = {};
  var answer = [];
  var mimNum = nums.length / 3;
  for (var i = 0; i < nums.length; i++) {
    numberMap[nums[i]] ? (numberMap[nums[i]] += 1) : (numberMap[nums[i]] = 1);
  }
  for (var num in numberMap) {
    numberMap[num] > mimNum && answer.push(num);
  }
  return answer;
};

// for optimizaiton, use Boyer-Moore Majority Vote algorithm