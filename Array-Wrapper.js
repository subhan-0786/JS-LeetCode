/**
 * @param {number[]} nums
 * @return {void}
 */
var ArrayWrapper = function(nums) {
    this.nums = nums; // store the array
};

/**
 * @return {number}
 */
ArrayWrapper.prototype.valueOf = function() {
    // When used in arithmetic, return the sum of elements
    return this.nums.reduce((acc, cur) => acc + cur, 0);
};

/**
 * @return {string}
 */
ArrayWrapper.prototype.toString = function() {
    // When converted to string, return array-like string
    return `[${this.nums.join(",")}]`;
};
