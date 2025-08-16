/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let n = nums.length; 
    let counter = 0;
    for (let i = 0; i < n; i++) {
        let temp = nums[i];
        for (let j = 0; j < n; j++) {
            if (temp === nums[j] && j!=i) {
                counter++;
            }
        }
        if (counter == 0) {
            return temp;
        }
        counter = 0;
    }
    
};