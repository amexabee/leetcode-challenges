/* 
Challenge description: https://leetcode.com/problems/subsets-ii/

Given an integer array nums that may contain duplicates, return all possible 
subsets (the power set).
The solution set must not contain duplicate subsets. Return the solution in any order.

Example 1:
Input: nums = [1,2,2]
Output: [[],[1],[1,2],[1,2,2],[2],[2,2]]

Example 2:
Input: nums = [0]
Output: [[],[0]]

Constraints:
1 <= nums.length <= 10
-10 <= nums[i] <= 10
*/

var subsetsWithDup = function(nums) {
  nums.sort((a,b) => a - b);
  const combine = (nums, k) => {
  if (k === 1) {
    let visited = {};
    let output = [];    
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] in visited) continue; 
      let arr = [];
      arr.push(nums[i]);
      output.push(arr);
      visited[nums[i]] = nums[i];
    }
    return output;
  }

  let output = combine(nums, k - 1);
  let visited = {};
  let arr = [];
  for (let j = 0; j < output.length; j++) {
    let ar = output[j];
    for (let i = nums.indexOf(ar[k-2]) + 1 + extra(ar); i < nums.length; i++) {
      ar.push(nums[i])
      if (!(JSON.stringify(ar) in visited)) {
        visited[JSON.stringify(ar)] = ar;
        arr.push([...ar]);
      }
      ar.pop();
      
    }
  }
  output = arr;

  return output;
};

  function extra(arr) {
    let ex = 0;
    let i = arr.length - 1
    while (i > 0 && arr[i] === arr[i - 1]) {
      i--;
      ex++;
    }
    return ex;
  }
  
  const output = [[]];
  for (let i = 1; i <= nums.length; i++) {
      let res = combine(nums, i);
      output.push(...res);
  }

  return output;                       
}
