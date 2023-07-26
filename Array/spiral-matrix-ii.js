/*
Challenge description: https://leetcode.com/problems/spiral-matrix-ii

Given a positive integer n, generate an n x n matrix filled with elements from 1 to n^2 in spiral order.

Example 1:
Input: n = 3
Output: [[1,2,3],[8,9,4],[7,6,5]]

Example 2:
Input: n = 1
Output: [[1]] 

Constraints:
1 <= n <= 20
*/

var generateMatrix = function(n) {
  let num = 1;
  let matrix = Array.from({ length: n }, () => Array(n).fill(0));
  matrix[0][0] = num++;
  let i = j = 0;
  let depth = width = n - 1;

  while (num <= Math.pow(n, 2)) {
    let count = 0;
    while (count < width) {
      matrix[i][++j] = num++;
      count++;
    }

    if (num > Math.pow(n, 2)) break;

    if (depth !== matrix.length - 1) {
      width--;
      depth--;
    }

    count = 0;
    while (count < depth) {
      matrix[++i][j] = num++
      count++;
    }

    if (num > Math.pow(n, 2)) break;
    
    count = 0;
    while (count < width) {
      matrix[i][--j] = num++;
      count++;
    }

    if (num > Math.pow(n, 2)) break;
    
    width--;
    depth--;
    count = 0;
    while (count < depth) {
      matrix[--i][j] = num++;
      count++;
    }  
  }

  return matrix;
};
