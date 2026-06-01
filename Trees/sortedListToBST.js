/*
Problem description: https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree/

Given the head of a singly linked list where elements are sorted in ascending order, 
convert it to a height-balanced binary search tree.

Example 1:
Input: head = [-10,-3,0,5,9]
Output: [0,-3,9,-10,null,5]
Explanation: One possible answer is [0,-3,9,-10,null,5], which represents the shown height balanced BST.

Example 2:
Input: head = []
Output: []

Constraints:
The number of nodes in head is in the range [0, 2 * 104].
-105 <= Node.val <= 105
*/

var sortedListToBST = function(head) {
  let current = head;
  let arr = [];
  while (current) {
    arr.push(current.val);
    current = current.next;
  }
  
  const buildTree = (arr) => {
    if (arr.length === 0) return null;

    let mid = Math.floor(arr.length / 2);
    let left = buildTree(arr.slice(0, mid));
    let right = buildTree(arr.slice(mid + 1, arr.length));
    return new TreeNode(arr[mid], left, right);
  };

  return buildTree(arr);
};
