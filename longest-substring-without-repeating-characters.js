/* Challenge description https://leetcode.com/problems/longest-substring-without-repeating-characters/

Given a string s, find the length of the longest 
substring without repeating characters.

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 

Constraints:

0 <= s.length <= 5 * 104
s consists of English letters, digits, symbols and spaces.
*/

var lengthOfLongestSubstring = function(s) {
    let length = 0; 
    for (let index = 0; index < s.length; index++) {
        if (length < calc(index)) length = calc(index);
    }
    
    function calc(index) {
        let arr = []
        arr.push(s[index++])
        while(s[index] && !arr.includes(s[index])) {
            arr.push(s[index])
            index++
        }
        
        return arr.length;
        }

    return length;
};
