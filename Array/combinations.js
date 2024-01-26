/* Challenge description: https://leetcode.com/problems/combinations/  

Given two integers n and k, return all possible combinations of k numbers chosen from the range [1, n].
You may return the answer in any order.

Example 1:
Input: n = 4, k = 2
Output: [[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]
Explanation: There are 4 choose 2 = 6 total combinations.

Note that combinations are unordered, i.e., [1,2] and [2,1] are considered to be the same combination.

Example 2:
Input: n = 1, k = 1
Output: [[1]]
Explanation: There is 1 choose 1 = 1 total combination.

Constraints:
1 <= n <= 20
1 <= k <= n
*/

var combine = function(n, k) {
  if (k === 1) {
  let output = [];
  for (let i = 1; i <= n; i++) {
      let arr = [];
      arr.push(i);
      output.push(arr);
    }
    return output;
  }

  let output = combine(n, k - 1);
  let arr = []
  for (let j = 0; j < output.length; j++) {
    let ar = output[j] 
    for (let i = 1 + ar[k - 2]; i <= n; i++) {
      ar.push(i)
      arr.push([...ar])
      ar.pop()
    }
  }
  output = arr;

  return output;  
};
