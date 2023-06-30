/* Challenge description https://leetcode.com/problems/longest-palindromic-substring/

Given a string s, return the longest palindromic substring in s.

Example 1:
Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.

Example 2:
Input: s = "cbbd"
Output: "bb"
 
Constraints:
1 <= s.length <= 1000
s consist of only digits and English letters.
*/

var longestPalindrome = function(s) {
  let longest = s[0] || '';

  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j < s.length; j++) {
      longest = isIt(i, j) && (j - i + 1) > longest.length ? s.substring(i, j+1) : longest;
    }
  }
  
  function isIt(p1, p2) {

    while (p1 < p2) {
      if (s[p1] !== s[p2]) return false;
      p1++;
      p2--;
    } 
    return true
  }

  return longest;    
};
