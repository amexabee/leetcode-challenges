/* Challenge description https://leetcode.com/problems/3sum/

Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

*/

var threeSum = function(nums) {
  let res = []
  nums.sort((a, b) => a - b);
  
  for (let i = 0; i < nums.length; i++) {
    if (i === 0 || nums[i] !== nums[i - 1]) {
      let left = i + 1;
      let right = nums.length - 1;
      
      while (left < right) {
        const sum = nums[i] + nums[left] + nums[right];
        if (sum === 0) {
          res.push([nums[i], nums[left], nums[right]])
          while (nums[left] === nums[left + 1]) left++;
          while (nums[right] === nums[right - 1]) right--;
          left++;
          right++;
        } else if (sum < 0) left++;
        else right--;
      }
    }
  }
  
  return res;
};
