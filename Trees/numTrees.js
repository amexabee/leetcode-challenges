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


var numTrees = function(n, kv = {}) {
    if (n === 0) return 1; 
    let sum = 0;
    for (let i = 0; i < n; i++) {
        let res;
        if (`l${i}r${n-1-i}` in kv) 
            res = kv[`l${i}r${n-1-i}`];
        else if (`l${n-1-i}r${i}` in kv)
            res = kv[`l${n-1-i}r${i}`];
        else {
            let right = numTrees(i, kv);
            let left = numTrees(n - 1 - i, kv);
            res = right * left;
            kv[`l${i}r${n-1-i}`] = res;
            kv[`l${n-1-i}r${i}`] = res;
        }
        sum += res;
    }

    return sum;
};
