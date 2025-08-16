/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let count = 0; 

  for (let i = 0; i < nums.length; i++) {
    if (nums[count] !== nums[i]) {
      nums[++count] = nums[i];
    }
  }

  return ++count;
};