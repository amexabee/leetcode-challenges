/* 
Challenge description: https://leetcode.com/problems/decode-ways/

A message containing letters from A-Z can be encoded into numbers using the following mapping:

'A' -> "1"
'B' -> "2"
...
'Z' -> "26"
To decode an encoded message, all the digits must be grouped then mapped back into 
letters using the reverse of the mapping above (there may be multiple ways). 

For example, "11106" can be mapped into:
"AAJF" with the grouping (1 1 10 6)
"KJF" with the grouping (11 10 6)
Note that the grouping (1 11 06) is invalid because "06" cannot be mapped into 'F' since "6" is different from "06".

Given a string s containing only digits, return the number of ways to decode it.

The test cases are generated so that the answer fits in a 32-bit integer.

Example 1:
Input: s = "12"
Output: 2
Explanation: "12" could be decoded as "AB" (1 2) or "L" (12).

Example 2:
Input: s = "226"
Output: 3
Explanation: "226" could be decoded as "BZ" (2 26), "VF" (22 6), or "BBF" (2 2 6).

Example 3:
Input: s = "06"
Output: 0
Explanation: "06" cannot be mapped to "F" because of the leading zero ("6" is different from "06").

Constraints:
1 <= s.length <= 100
s contains only digits and may contain leading zero(s).
*/

var numDecodings = function(s, memo = {}) {
  const decode = {'1': 'A', '2': 'B', '3': 'C', '4': 'D', '5': 'E', '6': 'F', '7': 'G', '8': 'H', '9': 'I', '10': 'J', '11': 'K', '12': 'L', '13': 'M', '14': 'N', '15': 'O', '16': 'P', '17': 'Q', '18': 'R', '19': 'S', '20': 'T', '21': 'U', '22': 'V', '23': 'W', '24': 'X', '25': 'Y', '26': 'Z'}
  
  if (s.length >= 2 && s[s.length - 1] === '0' && s[s.length - 2] !== '1' && s[s.length - 2] !== '2') 
    return 0;

  if (s.length === 2) 
    return s in decode && s[1] !== '0' ? 2 : s[0] !== '0' ? 1 : 0;

  if (s.length === 1) 
    return s[0] !== '0' ? 1 : 0;

  let sum = 0;

  if (s.substring(0, 1) in decode) {         
    let key = s.substring(1);
    if (key in memo)                     
      sum += memo[key];
    else {
      sum += numDecodings(key, memo);
      memo[key] = sum;
    }
  }

  if (s.substring(0, 2) in decode) {
    let key = s.substring(2);
    if (key in memo) 
      sum += memo[key];
    else {
      sum += numDecodings(key, memo);
      memo[key] = sum;
    } 
  }

  return sum;
} 
