/* 
Challenge description: https://leetcode.com/problems/reverse-integer/

Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-2^31, 2^31 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

Example 1:
Input: x = 123
Output: 321

Example 2:
Input: x = -123
Output: -321

Example 3:
Input: x = 120
Output: 21
 
Constraints:
-2^31 <= x <= 2^31 - 1
*/

var reverse = function(x) {
    const arr = Array.from(Math.abs(x).toString())
    const result = parseInt(arr.reverse().join(''))
    return result >= Math.pow(-2, 31) && result <= Math.pow(2, 31) - 1 ? x > 0 ? result : -result : 0;
};
