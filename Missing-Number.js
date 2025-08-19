/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let n = nums.length;
    let sum = (n * (n + 1)) / 2;
    return sum - nums.reduce((a, b) => a + b, 0);
};
