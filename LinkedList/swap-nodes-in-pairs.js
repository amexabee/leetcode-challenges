/*
Challenge description: https://leetcode.com/problems/swap-nodes-in-pairs/

Given a linked list, swap every two adjacent nodes and return its head. 
You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)

Example 1:
Input: head = [1,2,3,4]
Output: [2,1,4,3]

Example 2:
Input: head = []
Output: []

Example 3:
Input: head = [1]
Output: [1]
 
Constraints:
The number of nodes in the list is in the range [0, 100].
0 <= Node.val <= 100
*/

var swapPairs = function(head) {
  let prev = null;
  let current = head;
  while (current !== null && current.next !== null) {
    current = swap(prev, current);
    
    if (!prev) head = current;
    
    prev = current.next;
    current = prev.next
  }
  
  function swap(prev, current) {
    
    let next = current.next;
    
    if (prev) prev.next = next;
    current.next = next.next
    next.next = current;
    return next;
  }
  
  return head;
}
