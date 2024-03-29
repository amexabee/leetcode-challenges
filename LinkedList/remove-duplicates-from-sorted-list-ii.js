/* Challenge description: https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/

Given the head of a sorted linked list, delete all nodes that have duplicate numbers, leaving only 
distinct numbers from the original list. Return the linked list sorted as well.

Example 1:
Input: head = [1,2,3,3,4,4,5]
Output: [1,2,5]

Example 2:
Input: head = [1,1,1,2,3]
Output: [2,3]

Constraints:

The number of nodes in the list is in the range [0, 300].
-100 <= Node.val <= 100
The list is guaranteed to be sorted in ascending order. */

var deleteDuplicates = function(head) {
  if (!head || !head.next) return head;  
  let dup = head.val === head.next.val;
  let output = new ListNode(head.val);
  let prev = head;
  let curr = head.next;
  head = output;
  
  while (curr) {
    if (prev.val !== curr.val && (!curr.next || curr.val !== curr.next.val)) {
      output.next = new ListNode(curr.val);
      output = output.next;
    }
    prev = prev.next;
    curr = curr.next;
  }
  return dup ? head.next : head;
}
