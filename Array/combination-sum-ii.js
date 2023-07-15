/*
Challenge description: https://leetcode.com/problems/combination-sum-ii/

Given a collection of candidate numbers (candidates) and a target number (target), 
find all unique combinations in candidates where the candidate numbers sum to target.
Each number in candidates may only be used once in the combination.
Note: The solution set must not contain duplicate combinations.

Example 1:
Input: candidates = [10,1,2,7,6,1,5], target = 8
Output: 
[
[1,1,6],
[1,2,5],
[1,7],
[2,6]
]

Example 2:
Input: candidates = [2,5,2,1,2], target = 5
Output: 
[
[1,2,2],
[5]
]

Constraints:
1 <= candidates.length <= 100
1 <= candidates[i] <= 50
1 <= target <= 30
*/

var combinationSum2 = function(candidates, target) {
  candidates.sort((a, b) => a - b);
  let result = [];
  recursive([], 0)
  
  function recursive(nums, pointer) {
    let sum = nums.reduce((a, b) => a + b, 0);
    if (sum === target) {
      result.push([...nums]);
      return;
    }
  
    if (sum < target) {
      for (let i = pointer; i < candidates.length; i++) {
        nums.push(candidates[i]);
        recursive(nums, i + 1);
        while (candidates[i] && candidates[i] === candidates[i + 1]) i++;
        nums.pop();
      }
    }
  }
  
  return result;
};
