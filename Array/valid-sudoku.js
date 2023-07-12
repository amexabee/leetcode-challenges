/*
Challenge description: https://leetcode.com/problems/valid-sudoku
Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
Note:
A Sudoku board (partially filled) could be valid but is not necessarily solvable.
Only the filled cells need to be validated according to the mentioned rules.

Example 1:
Input: board = 
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
Output: true

Example 2:
Input: board = 
[["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
Output: false
Explanation: Same as Example 1, except with the 5 in the top left corner being modified to 8. 
Since there are two 8's in the top left 3x3 sub-box, it is invalid.
 
Constraints:
board.length == 9
board[i].length == 9
board[i][j] is a digit 1-9 or '.'.
*/

var isValidSudoku = function(board) {
  for (let i = 0; i < 9; i++) {
    let row = [];
    let column = [];
    for (let j = 0; j < 9; j++) {
      if (board[i][j] !== '.') row.push(board[i][j])
      if (board[j][i] !== '.') column.push(board[j][i])

      if (i % 3 === 0 && j % 3 === 0) {
        let subBox = [];
        for (let index = i; index - i < 3; index++) 
          for (let jndex = j; jndex - j < 3; jndex++)
            if (board[index][jndex] !== '.') subBox.push(board[index][jndex]);
        if (!isValid(subBox)) return false;
      }

    }
    if (!isValid(row, column)) return false;
  }
  
  function isValid(row, column){
    let arr1 = [];
    let arr2 = [];
    let length = column ? row.length > column.length ? row.length : column.length : row.length; 

    for (let index = 0; index < length; index++) {
      if (row[index]) {
        if (arr1.includes(row[index])) return false;
        arr1.push(row[index]);
      } 
      if (column && column[index]) {
        if (arr2.includes(column[index])) return false;
        arr2.push(column[index]);
      }
    }

    return true;
  }

  return true;
}
