/*
Challenge description: https://leetcode.com/problems/letter-combinations-of-a-phone-number/

Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. 
Return the answer in any order.

A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

Example 1:
Input: digits = "23"
Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]

Example 2:
Input: digits = ""
Output: []

Example 3:
Input: digits = "2"
Output: ["a","b","c"]

Constraints:
0 <= digits.length <= 4
digits[i] is a digit in the range ['2', '9'].
*/

var letterCombinations = function(digits) {
  const convert = [['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i'], ['j', 'k', 'l'], ['m', 'n', 'o'], ['p', 'q', 'r', 's'], ['t', 'u', 'v'], ['w', 'x', 'y', 'z']];
  
  let output = [];
  let arr = [];

  help(digits, 0);

  function help(digits, index) {
    if (!digits[index]) return;
    
    let letters = convert[parseInt(digits[index]) - 2]
    
    if (!output.length) output = letters;

    else {
      for (let i = 0; i < output.length; i++) {
        letters.forEach(letter => {
          let str = output[i]
          str += letter;
          arr.push(str);
        })
      }
      output = arr;
      arr = [];
    }

    help(digits, ++index);
  }
  
  return output;
}
