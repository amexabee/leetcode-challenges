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
    const result = [];
    recursive('', 0, 0);

    function recursive(current, open, close) {
        if (current.length === 2 * n) {
            result.push(current);
            return;
        }

        if (open < n) recursive(current + '(', open + 1, close);
        
        if (close < open) recursive(current + ')', open, close + 1);
    }
  
    return result;
};
