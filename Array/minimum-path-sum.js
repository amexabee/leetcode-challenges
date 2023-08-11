/*
Challenge description: https://leetcode.com/problems/minimum-path-sum/

Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right, 
which minimizes the sum of all numbers along its path.
Note: You can only move either down or right at any point in time. 

Example 1:
Input: grid = [[1,3,1],[1,5,1],[4,2,1]]
Output: 7
Explanation: Because the path 1 → 3 → 1 → 1 → 1 minimizes the sum.

Example 2:
Input: grid = [[1,2,3],[4,5,6]]
Output: 12

Constraints:
m == grid.length
n == grid[i].length
1 <= m, n <= 200
0 <= grid[i][j] <= 200
*/

var minPathSum = function(grid) {
  const recursive = (x, y, memo) => {
    if ( x === grid.length || y === grid[0].length) return Number.MAX_SAFE_INTEGER;

    let key = x + ',' + y;

    if (key in memo) return memo[key];
    
    if ( x === grid.length - 1 && y === grid[0].length - 1) return grid[x][y];

    let min = grid[x][y] + Math.min(recursive(x + 1, y, memo), recursive(x, y + 1, memo));

    memo[key] = min;

    return min;
  }
  
  return recursive(0, 0, {})
}
