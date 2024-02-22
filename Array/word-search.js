/* Challenge description: https://leetcode.com/problems/word-search/ 

Given an m x n grid of characters board and a string word, return true if word exists in the grid.
The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are 
horizontally or vertically neighboring. The same letter cell may not be used more than once.

Example 1:
Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
Output: true

Example 2:
Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
Output: true

Example 3:
Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
Output: false
 
Constraints:
m == board.length
n = board[i].length
1 <= m, n <= 6
1 <= word.length <= 15
board and word consists of only lowercase and uppercase English letters.

Follow up: Could you use search pruning to make your solution faster with a larger board?
*/

var exist = function(board, word) { 
  let output = false;

  const search = (i, j, k = 0, prev = '', visited = {})  => {
    let key = i + ',' + j;
    if (key in visited) return; 
    
    if (k === word.length - 1) {
      if (word[k] === board[i][j]) output = true;
      return;
    }
    
    visited[key] = true;
  
    if (prev !== 'l' && j + 1 < board[0].length && board[i][j + 1] === word[k + 1]) {
      search(i, j + 1, k + 1, 'r', visited);
    }
    
    if (prev !== 'u' && i + 1 < board.length && board[i + 1][j] === word[k + 1]) {
      search(i + 1, j, k + 1, 'd', visited);
    }
    
    if (prev !== 'r' && j > 0 && board[i][j - 1] === word[k + 1]) {
      search(i, j - 1, k + 1, 'l', visited);
    }
  
    if (prev !== 'd' && i > 0 && board[i - 1][j] === word[k + 1]) {
      search(i - 1, j, k + 1, 'u', visited);
    }
  
    delete visited[key];
    return;
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === word[0]) search(i, j);    
    }
  }
  return output; 
}
