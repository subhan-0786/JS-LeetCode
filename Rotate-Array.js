/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  const n = nums.length;
  k = k % n;
  
  const arr1 = nums.slice(n - k);  
  const arr2 = nums.slice(0, n - k); 

  const mergedArray = arr1.concat(arr2);  
  for (let i = 0; i < n; i++) {
    nums[i] = mergedArray[i];
  }
  return nums;
};