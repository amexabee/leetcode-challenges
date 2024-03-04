/* 
Challenge description: https://leetcode.com/problems/partition-list/ 

Given the head of a linked list and a value x, partition it such that all nodes less 
than x come before nodes greater than or equal to x.

You should preserve the original relative order of the nodes in each of the two partitions.

Example 1:
Input: head = [1,4,3,2,5,2], x = 3
Output: [1,2,2,4,3,5]

Example 2:
Input: head = [2,1], x = 2
Output: [1,2]

Constraints:
The number of nodes in the list is in the range [0, 200].
-100 <= Node.val <= 100
-200 <= x <= 200
*/

var partition = function(head, x) {
  let first = null;
  let current = head;
  
  while (current) {
    if (current.val >= x)
      arrange(first, current)

    first = current;
    current = current.next;
  }

  function arrange(first, current) {
    let before = current;
    let last = current.next;
    while (last) {
      if (last.val < x) 
        first = swap(first, current, before, last);
      else 
        before = before.next;
      
      if (before?.next >= x) 
        before = before.next;
      last = before ? before.next : null;
    }
  }

  function swap(first, current, before, last) {
    first ? first.next = last : head = last;
    before.next = last.next;
    last.next = current;
    return last;
  }

  return head;
};
