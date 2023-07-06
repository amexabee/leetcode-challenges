/*
Challenge description: https://leetcode.com/problems/generate-parentheses/

Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

Example 1:
Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]

Example 2:
Input: n = 1
Output: ["()"]
 
Constraints:
1 <= n <= 8
*/

var generateParenthesis = function(n) {
  if (n === 1) return ['()'];

  n = n - 1
  let output = generateParenthesis(n);
  let arr1 = output.map(o => '(' + o + ')')
  arr1 = [...arr1, ...output.map(o => '()' + o )]
  arr1 = [...arr1, ...output.map(o =>  {if (!arr1.includes(o + '()')) return o + '()'}).filter(Boolean)]

  return arr1
};
