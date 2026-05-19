/* 
Problem Description: https://leetcode.com/problems/recover-binary-search-tree/description/ 

You are given the root of a binary search tree (BST), 
where the values of exactly two nodes of the tree were swapped by mistake. 
Recover the tree without changing its structure.

Example 1:
Input: root = [1,3,null,null,2]
Output: [3,1,null,null,2]
Explanation: 3 cannot be a left child of 1 because 3 > 1. Swapping 1 and 3 makes the BST valid.

Example 2:
Input: root = [3,1,4,null,null,2]
Output: [2,1,4,null,null,3]
Explanation: 2 cannot be in the right subtree of 3 because 2 < 3. Swapping 2 and 3 makes the BST valid.
 

Constraints:

The number of nodes in the tree is in the range [2, 1000].
-231 <= Node.val <= 231 - 1
*/

var recoverTree = function(root) {
  let c1 = c2 = p1 = null;
  let prev = null;
  
  const findOdd = (root, kv = {max: -Infinity}) => {
    if (!root) return;

    findOdd(root.left, kv);

    if (root.val <= kv.max) {
      if (!c1) {c1 = root; p1 = prev;}
      else if (!c2) {c2 = root;}
    }

    kv.max = root.val;
    prev = root;

    findOdd(root.right, kv);

  }

  findOdd(root);

  const swap = (x, y) => {
    let temp = x.val;
    x.val = y.val;
    y.val = temp;
  }
  
  if (!c1) return;
  if (!c2) swap(c1, p1)
  else swap(p1, c2);
}
