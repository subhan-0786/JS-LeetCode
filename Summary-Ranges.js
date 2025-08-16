/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    let res = [];
    let start = 0;
    
    for (let i = 0; i < nums.length; i++) {
        // Check if this is the last element OR the sequence breaks
        if (i === nums.length - 1 || nums[i] + 1 !== nums[i + 1]) {
            if (start === i) {
                res.push(nums[start].toString()); // single number
            } else {
                res.push(nums[start] + "->" + nums[i]); // range
            }
            start = i + 1;
        }
    }
    return res;
};