/* 
Problem description: https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/

Given the root of a binary tree, return the zigzag level order traversal of its nodes' values. 
(i.e., from left to right, then right to left for the next level and alternate between).

Example 1:
Input: root = [3,9,20,null,null,15,7]
Output: [[3],[20,9],[15,7]]

Example 2:
Input: root = [1]
Output: [[1]]

Example 3:
Input: root = []
Output: []

Constraints:
The number of nodes in the tree is in the range [0, 2000].
-100 <= Node.val <= 100
*/

var zigzagLevelOrder = function(root) {
  let arr = [];
  const bfs = (root, level = 0) => {
    if (!root) return;
    bfs(root.left, level + 1);
    if (!arr[level]) arr[level] = [root.val];
    else if (level % 2 === 0) arr[level].push(root.val);
    else arr[level].unshift(root.val);
    bfs(root.right, level + 1);
  };
  bfs(root);
  return arr;
};
