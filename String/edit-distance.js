/*
Challenge description: https://leetcode.com/problems/edit-distance/

Given two strings word1 and word2, return the minimum number of operations required to convert word1 to word2.
You have the following three operations permitted on a word:
Insert a character
Delete a character
Replace a character
 
Example 1:
Input: word1 = "horse", word2 = "ros"
Output: 3
Explanation: 
horse -> rorse (replace 'h' with 'r')
rorse -> rose (remove 'r')
rose -> ros (remove 'e')

Example 2:
Input: word1 = "intention", word2 = "execution"
Output: 5
Explanation: 
intention -> inention (remove 't')
inention -> enention (replace 'i' with 'e')
enention -> exention (replace 'n' with 'x')
exention -> exection (replace 'n' with 'c')
exection -> execution (insert 'u')
 
Constraints:
0 <= word1.length, word2.length <= 500
word1 and word2 consist of lowercase English letters.
*/

var minDistance = function(word1, word2) {
  
  const twoDArray = new Array(word1.length + 1);

  for (let i = 0; i <= word1.length; i++) {
    twoDArray[i] = new Array(word2.length + 1);
  }

  for (let i = 0; i <= word1.length; i++) {
    for (let j = 0; j <= word2.length; j++) {
      twoDArray[i][j] = Number.MAX_VALUE;
    }
  }

  for (let i = 0; i <= word1.length; i++) {
    twoDArray[i][word2.length] = word1.length - i;
  }
  
  for (let i = 0; i <= word2.length; i++) {
    twoDArray[word1.length][i] = word2.length - i;
  }

  
  for (let i = word2.length - 1; i >= 0; i--) {
    for (let j = word1.length - 1; j >= 0; j--) {
      if (word1[j] === word2[i]) twoDArray[j][i] = twoDArray[j+1][i+1];
      else twoDArray[j][i] = 1 + Math.min(twoDArray[j+1][i], twoDArray[j][i+1], twoDArray[j+1][i+1]);
    }
  }

  return twoDArray[0][0]
}
