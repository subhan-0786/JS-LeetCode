/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    let acc = init;              // initial value sy start
    for (let i = 0; i < nums.length; i++) {
        acc = fn(acc, nums[i]);   // reducer apply kro
    }
    return acc;                   // or phir final result
};