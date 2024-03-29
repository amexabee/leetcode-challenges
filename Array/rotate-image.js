/*
Challenge description: https://leetcode.com/problems/rotate-image/

You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. 
DO NOT allocate another 2D matrix and do the rotation.

Example 1:
Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [[7,4,1],[8,5,2],[9,6,3]]

Example 2:
Input: matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
 
Constraints:
n == matrix.length == matrix[i].length
1 <= n <= 20
-1000 <= matrix[i][j] <= 1000
*/

var rotate = function(matrix, count = 1) {
  let start = count - 1;
  let end = matrix.length - count;
  
  if (start >= end) return;
  
  for (let index = start; index < end; index++) {
    convert(matrix[start][index], start, index)
  }
  
  function convert(val, i , j) {
    let next = matrix[j][end];
    matrix[j][end] = val;
    val = next;
    i = j;
    j = end;
    
    next = matrix[end][end - i + start];
    matrix[end][end - i + start] = val;
    val = next;
    j = end - i + start;
    i = end;
  
    next = matrix[j][start];
    matrix[j][start] = val;
    val = next;
    i = j;
    j = start;

    matrix[start][end - i + start] = val;
  }

  rotate(matrix, count + 1) 
}
