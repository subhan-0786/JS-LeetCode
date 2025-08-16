/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let offset = 2;

  for (let i = 2; i < nums.length; i++) {
    if (nums[i] !== nums[offset - 2]) {
      nums[offset] = nums[i];
      offset++;
    }
  }

  return offset;
};