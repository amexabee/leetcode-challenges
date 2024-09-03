/*
Challenge description: https://leetcode.com/problems/unique-binary-search-trees-ii/

Given an integer n, return all the structurally unique BST's (binary search trees), 
which has exactly n nodes of unique values from 1 to n. Return the answer in any order.

Example 1:
Input: n = 3
Output: [[1,null,2,null,3],[1,null,3,2],[2,1,3],[3,1,null,null,2],[3,2,null,1]]

Example 2:
Input: n = 1
Output: [[1]]

Constraints:
1 <= n <= 8
*/

var generateTrees = function(n) {
  // generate possible n permutations of arrays from n 
  let arr = Array.from({ length: n }, (_, i) => i + 1);
  let permutations = permute(arr);
  function permute(nums) {
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
  
  let obj = {};
  
  permutations.forEach(p => {
    // create tree
    let head = new TreeNode(p[0], null, null)
    p.shift();
    while (p.length) {
      curr = head;
      while (true) {
        if (p[0] > curr.val) {
          if (curr.right) 
            curr = curr.right 
          else { 
            curr.right = new TreeNode(p[0], null, null);
            break;
          }
        }
        else {
          if (curr.left) 
            curr = curr.left 
          else { 
            curr.left = new TreeNode(p[0], null, null);
            break;
          }
        }
      }
  
      p.shift();
    }

    // create a string from the tree
    let result = head.val.toString();
    toStr(head);
  
    function toStr(node) {
      if (!node)
        return;
  
      if (!node.left && !node.right)
        return;
  
      result += ' ' + (node.left?.val || 'null') + ' ';
      result += ' ' + (node.right?.val || 'null') + ' ';
      toStr(node.left);
      toStr(node.right);
    }
  
    // remove repetitions
    if (!obj[result]) 
      obj[result] = head;
  })
  
  let output = [];
  // push filtered results to final outputs
  Object.values(obj).forEach(value => {
    output.push(value);
  });
  
  // for (let key in obj) 
  //   console.log(key);
  
  return output;
}
