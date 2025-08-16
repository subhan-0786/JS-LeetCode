/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let counter = 0;
    let n = nums.length;
    for (let i = 0; i < n; ) {
        if (nums[i] === val) {
            for (let j = i; j < (n - 1); j++) {
                nums[j] = nums[j+1];
            }
            counter++; n--;
        }
        else i++;
    }
    return n;
};
