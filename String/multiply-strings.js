/*
Challenge description: https://leetcode.com/problems/multiply-strings/

Given two non-negative integers num1 and num2 represented as strings, 
return the product of num1 and num2, also represented as a string.

Note: You must not use any built-in BigInteger library or convert the inputs to integer directly.

Example 1:
Input: num1 = "2", num2 = "3"
Output: "6"

Example 2:
Input: num1 = "123", num2 = "456"
Output: "56088" 

Constraints:
1 <= num1.length, num2.length <= 200
num1 and num2 consist of digits only.
Both num1 and num2 do not contain any leading zero, except the number 0 itself.
*/

var multiply = function(num1, num2) {
  if (parseInt(num1) === 0 || parseInt(num2) === 0) return '0';
  let arr = [];
  let zeros = -1;

  for (let i = num2.length - 1; i >= 0; i--) {
    let previous = current = individual(parseInt(num2[i])) 
    if (i !== num2.length - 1) previous = individual(parseInt(num2[i]))
    if (current.length > previous.length) zeros += current.length - previous.length;
    zeros++;
    
    arr.push(current + '0'.repeat(zeros))
  }
  
  
  function individual(multiplier) {
    let c = 0;
    let str = '';
  
    for (let index = num1.length - 1; index >= 0; index--) {
      let val = parseInt(num1[index]) * multiplier + c;
      str = (val % 10) + str;
      c = Math.floor(val / 10);
    }
    
    return c ? c + str : str;
  }

  function sum(arr) {
    let c = 0;
    let res = '';
    const highest = arr[arr.length - 1].length
  
    for (let j = 1; j <= highest; j++) {
      let val = c;
      for (let i = 0; i < arr.length; i++) {
         let str = arr[i];
         if (str[str.length - j]) val += parseInt(str[str.length - j]);
      }
      res = (val % 10) + res;
      c = Math.floor(val / 10);
    }

    return c ? c + res : res;
  }

  return sum(arr);
}
