/*
Challenge description: https://leetcode.com/problems/permutations/

Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

Example 1:
Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

Example 2:
Input: nums = [0,1]
Output: [[0,1],[1,0]]

Example 3:
Input: nums = [1]
Output: [[1]]
 
Constraints:
1 <= nums.length <= 6
-10 <= nums[i] <= 10
All the integers of nums are unique.
*/

var permute = function(nums) {
    if (nums.length <= 1) return [nums];

    let result = [];

    for (let i = 0; i < nums.length; i++) {
        let current = nums[i];
        let subArr = nums.filter(item => item !== current);
        let output = permute(subArr);
        output.forEach(item => item.unshift(current));
        result.push(...output);
    } 

    return result;
};
