/* 
Problem description: https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/description/

Given two integer arrays preorder and inorder where preorder is the preorder traversal of a binary tree 
and inorder is the inorder traversal of the same tree, construct and return the binary tree.

Example 1:
Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
Output: [3,9,20,null,null,15,7]

Example 2:
Input: preorder = [-1], inorder = [-1]
Output: [-1]
 
Constraints:
1 <= preorder.length <= 3000
inorder.length == preorder.length
-3000 <= preorder[i], inorder[i] <= 3000
preorder and inorder consist of unique values.
Each value of inorder also appears in preorder.
preorder is guaranteed to be the preorder traversal of the tree.
inorder is guaranteed to be the inorder traversal of the tree.
*/

var buildTree = function(preorder, inorder) {
  if (preorder.length === 0) return null;

  let index = inorder.indexOf(preorder[0]);
  let leftInOrder = inorder.slice(0, index);
  let rightInOrder = inorder.slice(index + 1, inorder.length);
  let leftPreOrder = preorder.slice(1, leftInOrder.length + 1);
  let rightPreOrder = preorder.slice(leftInOrder.length + 1, preorder.length);

  let left = buildTree(leftPreOrder, leftInOrder);
  let right = buildTree(rightPreOrder, rightInOrder);
  let node = new TreeNode(preorder[0], left, right);

  return node;
};
