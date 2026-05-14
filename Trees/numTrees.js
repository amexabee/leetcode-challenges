/* 
Challenge description: https://leetcode.com/problems/unique-binary-search-trees/

Given an integer n, return the number of structurally unique BST's (binary search trees) 
which has exactly n nodes of unique values from 1 to n.

Example 1:
Input: n = 3
Output: 5

Example 2:
Input: n = 1
Output: 1

Constraints:
1 <= n <= 19

*/


var numTrees = function(n, kv = new Uint32Array(19)) {
    if (n === 0) return 1;
    let sum = 0;
    for (let i = 0; i < n; i++) {
        if (!kv[i]) kv[i] = numTrees(i, kv);
        if (!kv[n-i]) kv[n-i] = numTrees(n - i - 1, kv);

        sum += kv[i] * kv[n-i] 
    }

    return sum;
};
