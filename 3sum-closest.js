/* Challenge description https://leetcode.com/problems/3sum-closest/

Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target.

Return the sum of the three integers.

You may assume that each input would have exactly one solution.
Example 1:

Input: nums = [-1,2,1,-4], target = 1
Output: 2
Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
*/

var threeSumClosest = function(nums, target) {
  nums.sort((a, b) => a - b);
  let min = nums[0] + nums[1] + nums[2]

  for (let a = 0; a < nums.length; a++) {
    for (let b = a + 1; b < nums.length; b++) {
      for (let c = b + 1; c < nums.length; c++) {
        const sum = nums[a] + nums[b] + nums[c]
        if (Math.abs(min - target) > Math.abs(sum - target)) min = sum
      }
  
    }
  
  }
  
  return min;
};
