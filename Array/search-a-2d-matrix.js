/* challenge description: https://leetcode.com/problems/search-a-2d-matrix/description/
 
You are given an m x n integer matrix matrix with the following two properties:

Each row is sorted in non-decreasing order.
The first integer of each row is greater than the last integer of the previous row.
Given an integer target, return true if target is in matrix or false otherwise.

You must write a solution in O(log(m * n)) time complexity.

Example 1:
Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
Output: true

Example 2:
Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
Output: false

Constraints:

m == matrix.length
n == matrix[i].length
1 <= m, n <= 100
-10^4 <= matrix[i][j], target <= 10^4
*/

var searchMatrix = function(matrix, target) {
  if (matrix.length === 1) {
  const searchArr = (arr) => {
  if (arr.length === 1) {
    return arr[0] === target;
  }
  let mid = parseInt(arr.length / 2);

  if (arr[mid] > target) return searchArr(arr.slice(0, mid)) 
    if (arr[mid] < target) return searchArr(arr.slice(mid, arr.length))
      return searchArr(arr.slice(mid, mid + 1))
    }
    return searchArr(matrix[0]);
  }
  
  let midArr = parseInt(matrix.length / 2);

  if (matrix[midArr][0] > target) 
    return searchMatrix(matrix.slice(0, midArr), target)
  
  if (matrix[midArr][matrix[0].length - 1] < target) 
    return searchMatrix(matrix.slice(midArr, matrix.length), target)

  return searchMatrix(matrix.slice(midArr, midArr + 1), target)
};

