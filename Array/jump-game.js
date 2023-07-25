/*
Challenge description: https://leetcode.com/problems/jump-game

You are given an integer array nums. You are initially positioned at the array's first index, 
and each element in the array represents your maximum jump length at that position.
Return true if you can reach the last index, or false otherwise.

Example 1:
Input: nums = [2,3,1,1,4]
Output: true
Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.

Example 2:
Input: nums = [3,2,1,0,4]
Output: false
Explanation: You will always arrive at index 3 no matter what. 
Its maximum jump length is 0, which makes it impossible to reach the last index.

Constraints:
1 <= nums.length <= 10^4
0 <= nums[i] <= 10^5
*/

var canJump = function(nums) {
  let index = 0;
  while (index < nums.length - 1) {
    let increment = compare(index, nums[index]);
    index += increment; 
    
    if (index < nums.length - 1 && nums[index] === 0) return false;
  }
  
  function compare(i, n) {
    let max = 0;
    let increment = 0;
    while (n > 0) {
      if (n + nums[i+n] > max) {
        increment = n;
        max = n + nums[i+n]
      }
      n--;
    }
    return increment;
  }
  
  return true;
};
