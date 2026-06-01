/*
Problem description: https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/

Given two integer arrays inorder and postorder where inorder is the inorder traversal of a binary tree 
and postorder is the postorder traversal of the same tree, construct and return the binary tree.

Example 1:
Input: inorder = [9,3,15,20,7], postorder = [9,15,7,20,3]
Output: [3,9,20,null,null,15,7]

Example 2:
Input: inorder = [-1], postorder = [-1]
Output: [-1]
 
Constraints:
1 <= inorder.length <= 3000
postorder.length == inorder.length
-3000 <= inorder[i], postorder[i] <= 3000
inorder and postorder consist of unique values.
Each value of postorder also appears in inorder.
inorder is guaranteed to be the inorder traversal of the tree.
postorder is guaranteed to be the postorder traversal of the tree.
*/

var buildTree = function(inorder, postorder) {
  if (postorder.length === 0) return null;

  let index = inorder.indexOf(postorder[postorder.length - 1]);
  let leftInOrder = inorder.slice(0, index);
  let rightInOrder = inorder.slice(index + 1, inorder.length);
  let leftPostOrder = postorder.slice(0, leftInOrder.length);
  let rightPostOrder = postorder.slice(
    postorder.length - 1 - rightInOrder.length,
    postorder.length - 1,
  );

  let left = buildTree(leftInOrder, leftPostOrder);
  let right = buildTree(rightInOrder, rightPostOrder);
  let node = new TreeNode(postorder[postorder.length - 1], left, right);

  return node;
};
