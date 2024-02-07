/* Challenge description: https://leetcode.com/problems/subsets/ 

Given an integer array nums of unique elements, return all possible subsets (the power set).
The solution set must not contain duplicate subsets. Return the solution in any order.

Example 1:
Input: nums = [1,2,3]
Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

Example 2:
Input: nums = [0]
Output: [[],[0]]
 
Constraints:
1 <= nums.length <= 10
-10 <= nums[i] <= 10
All the numbers of nums are unique.
*/

var subsets = function(nums) {
  const combine = (nums, k) => {

  if (k === 1) {
    let output = [];
    for (let i = 0; i < nums.length; i++) {
      let arr = [];
      arr.push(nums[i]);
      output.push(arr);
    }
    return output;
  }

  let output = combine(nums, k - 1);
  let arr = []
  for (let j = 0; j < output.length; j++) {
    let ar = output[j]
    for (let i = nums.indexOf(ar[k-2]) + 1; i < nums.length; i++) {
      ar.push(nums[i])
      arr.push([...ar])
      ar.pop()
    }
  }
  output = arr;

  return output;
};
  const output = [[]];
  for (let i = 1; i <= nums.length; i++) {
      let res = combine(nums, i);
      output.push(...res);
  }
  
  return output;                       
}

