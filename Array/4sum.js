/*
Challenge description: https://leetcode.com/problems/4sum/

Given an array nums of n integers, return an array of all the unique quadruplets [nums[a], nums[b], nums[c], nums[d]] such that:
0 <= a, b, c, d < n
a, b, c, and d are distinct.
nums[a] + nums[b] + nums[c] + nums[d] == target
You may return the answer in any order.

Example 1:
Input: nums = [1,0,-1,0,-2,2], target = 0
Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]

Example 2:
Input: nums = [2,2,2,2,2], target = 8
Output: [[2,2,2,2]]

Constraints:
1 <= nums.length <= 200
-109 <= nums[i] <= 109
-109 <= target <= 109
*/

var fourSum = function(nums, target) {
  nums.sort((a, b) => a - b)
  let output = [];

  for (let i = 0; i < nums.length - 3; i++) {
    if ( i === 0 || nums[i] !== nums[i - 1]) {
      threeSum(nums, target - nums[i], i)
    }
  }
  
  function threeSum(arr, tar, p0) {
    for (let p1 = p0 + 1; p1 < arr.length - 2; p1++) {
      let p2 = p1 + 1;
      let p3 = arr.length - 1;
      if ( p1 === p0 + 1 || arr[p1] !== arr[p1 - 1]) {
        while(p2 < p3) {
          let sum = arr[p1] + arr[p2] + arr[p3];
          if (sum > tar) {
            while (p2 < p3 + 1 && arr[p3] === arr[p3 - 1]) p3--; 
            p3--;
          }
          else if (sum < tar) {
            while (p2 < p3 + 1 && arr[p2] === arr[p2 + 1]) p2++;
            p2++;
          }
          else {
            output.push([arr[p0], arr[p1], arr[p2], arr[p3]]);
            while (p2 < p3 + 1 && arr[p2] === arr[p2 + 1] ) p2++;
            while (p2 < p3 + 1 &&arr[p3] === arr[p3 - 1]) p3--;
            p3--;
            p2++;
          }
        }
      }
    }
  }
  return output;
};
