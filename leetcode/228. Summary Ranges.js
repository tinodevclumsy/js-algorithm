/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  if (!nums.length) {
    return [];
  }

  var target = [nums[0].toString()];

  for (let i = 1; i < nums.length; i++) {
    var split = target[target.length - 1].toString().split("->");

    if (split.length === 1 && Number(split[0]) + 1 == nums[i]) {
      target[target.length - 1] = `${split[0]}->${nums[i]}`;
    } else if (split.length > 1 && Number(split[1]) + 1 == nums[i]) {
      split[1] = nums[i];
      target[target.length - 1] = split.join("->");
    } else {
      target.push(nums[i].toString());
    }
  }

  return target;
};
