/*
Challenge description: https://leetcode.com/problems/group-anagrams/

Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, 
typically using all the original letters exactly once.

Example 1:
Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Example 2:
Input: strs = [""]
Output: [[""]]

Example 3:
Input: strs = ["a"]
Output: [["a"]]

Constraints:
1 <= strs.length <= 104
0 <= strs[i].length <= 100
strs[i] consists of lowercase English letters.
*/

var groupAnagrams = function(strs) {
  const order = str => str.split('').sort().join('');
  let result = [];
  let match = {};

  for (let i = 0; i < strs.length; i++) {
    let key = order(strs[i]);
    if(match[key]) match[key].push(strs[i]);
    else match[key] = [strs[i]];
  }

  for (const key in match) result.push(match[key]);
  
  return result;
};
