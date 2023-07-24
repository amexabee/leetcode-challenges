/*
Challenge description: https://leetcode.com/problems/spiral-matrix

Given an m x n matrix, return all elements of the matrix in spiral order.

Example 1:
Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [1,2,3,6,9,8,7,4,5]

Example 2:
Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
Output: [1,2,3,4,8,12,11,10,9,5,6,7]

Constraints:
m == matrix.length
n == matrix[i].length
1 <= m, n <= 10
-100 <= matrix[i][j] <= 100
*/

var spiralOrder = function(matrix) {
  let output = []
  output.push(matrix[0][0])
  let i = j = 0;
  let depth = matrix.length - 1;
  let width = matrix[0].length - 1;

  while (output.length < matrix[0].length * matrix.length) {

    let count = 0;
    while (count < width) {
      output.push(matrix[i][++j])
      count++;
    }

    if (output.length === matrix[0].length * matrix.length) break;

    if (depth !== matrix.length - 1) {
      width--;
      depth--;
    }

    count = 0;
    while (count < depth) {
      output.push(matrix[++i][j])
      count++;
    }

    if (output.length === matrix[0].length * matrix.length) break;
    
    count = 0;
    while (count < width) {
      output.push(matrix[i][--j])
      count++;
    }

    if (output.length === matrix[0].length * matrix.length) break;
    
    width--;
    depth--;
    count = 0;
    while (count < depth) {
      output.push(matrix[--i][j])
      count++;
    }  
  }

  return output;
};
