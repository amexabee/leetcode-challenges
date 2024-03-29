/*
Challenge description: https://leetcode.com/problems/permutations-ii

Given a collection of numbers, nums, that might contain duplicates, return all possible unique permutations in any order.

Example 1:
Input: nums = [1,1,2]
Output:
[[1,1,2],
 [1,2,1],
 [2,1,1]]

Example 2:
Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

Constraints:
1 <= nums.length <= 8
-10 <= nums[i] <= 10
*/

var permuteUnique = function(nums) {
    if (nums.length <= 1) return [nums] 
    
    let result = []
    let store = [];
    for (let i = 0; i < nums.length; i++) {
      if (store.includes(nums[i])) continue;
      store.push(nums[i]);
      let current = nums[i];
      let subArr = nums.filter((item, index) => index !== i);
      let output = permuteUnique(subArr);
      output.forEach(o => o.unshift(current));
      result.push(...output); 
    }
    store = [];
    return result;
}
