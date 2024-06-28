/* 
Challenge description: https://leetcode.com/problems/reverse-linked-list-ii/

Given the head of a singly linked list and two integers left and right where left <= right, 
reverse the nodes of the list from position left to position right, and return the reversed list.

Example
Input: head = [1,2,3,4,5], left = 2, right = 4
Output: [1,4,3,2,5]

Example 2:
Input: head = [5], left = 1, right = 1
Output: [5]

Constraints:
The number of nodes in the list is n.
1 <= n <= 500
-500 <= Node.val <= 500
1 <= left <= right <= n
*/

var reverseBetween = function(head, left, right) {
  let start = middle = end = null;
  let pointer = head;

  // separating
  for (let i = 1; i < left; i++) {
    if (!start) start = pointer;
    else pointer = pointer.next;
  }

  middle = start ? pointer.next : head
  if (start) pointer.next = null;
  pointer = middle;

  for (let i = left; i < right; i++) pointer = pointer.next;

  end = pointer.next;
  pointer.next = null;


  // reversing
  const reverse = node => {
    let pre = node;
    let cur = node ? node.next : null;
    while (cur) {
      nxt = cur.next;
      cur.next = pre;
      pre = cur;
      cur = nxt;
    }

    if (node) node.next = null;
    return pre;
  }
  middle = reverse(middle);


  // joining
  let result = start ? start : middle;
  while(start?.next) {
    start = start.next;
  }

  if (start) start.next = middle;

  while(middle?.next) {
    middle = middle.next;
  }

  if (middle) middle.next = end;

  return result;

};
