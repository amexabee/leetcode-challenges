/*
Challenge description: https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array

Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.
If target is not found in the array, return [-1, -1].
You must write an algorithm with O(log n) runtime complexity.

Example 1:
Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]

Example 2:
Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]

Example 3:
Input: nums = [], target = 0
Output: [-1,-1]
 
Constraints:
0 <= nums.length <= 10^5
-10^9 <= nums[i] <= 10^9
nums is a non-decreasing array.
-10^9 <= target <= 10^9
*/

var searchRange = function(nums, target) {
 // return [nums.indexOf(target), nums.lastIndexOf(target)];
  const firstIndex = (nums, target) => { 
    let first = -1;
    
    recursive(0, nums.length - 1)
    
    function recursive(start, end) {
      if (start > end) return;
      
      if (start === end - 1 || start === end) {
        if (nums[start] === target) first = start;
        else if (nums[end] === target) first = end;
        return;
      }
      
      let middle = Math.floor((start + end) / 2);
      
      if (nums[middle] >= target) {
        if (nums[middle] === target) first = middle;
        recursive(start, middle);
      } else recursive(middle, end);
    }

    return first;
  }

  const lastIndex = (nums, target) => { 
    let last = -1;
    
    recursive(0, nums.length - 1)
    
    function recursive(start, end) {
      if (start > end) return;     
      
      if (start === end - 1 || start === end) {
        if (nums[end] === target) last = end;
        else if (nums[start] === target) last = start;
        return;
      }
      
      let middle = Math.floor((start + end) / 2);
      
      if (nums[middle] <= target) {
        if (nums[middle] === target) last = middle;
        recursive(middle, end);
      } else recursive(start, middle);
    }

    return last;
  }

  return [firstIndex(nums, target), lastIndex(nums, target)];
}
