/*
Problem description: https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii/

Given a binary tree
struct Node {
  int val;
  Node *left;
  Node *right;
  Node *next;
}
Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.

Initially, all next pointers are set to NULL.

Example 1:
Input: root = [1,2,3,4,5,null,7]
Output: [1,#,2,3,#,4,5,7,#]
Explanation: Given the above binary tree (Figure A), your function should populate each next pointer to point to its next right node, just like in Figure B. The serialized output is in level order as connected by the next pointers, with '#' signifying the end of each level.

Example 2:
Input: root = []
Output: []

Constraints:
The number of nodes in the tree is in the range [0, 6000].
-100 <= Node.val <= 100
*/

var connect = function(root) {
  let arr = [];
  
  const bfs = (root, level = 0) => {
    if (!root) return;
    
    bfs(root.left, level + 1);
    bfs(root.right, level + 1);

    if (arr[level]) {
      let prev = arr[level].pop();
      prev.next = root;
    }
    arr[level] = [root];
  };
  
  bfs(root);
  return root;
};
