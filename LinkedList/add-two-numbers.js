/*
https://leetcode.com/problems/add-two-numbers/

You are given two non-empty linked lists representing two non-negative integers. 
The digits are stored in reverse order, and each of their nodes contains a single digit. 
Add the two numbers and return the sum as a linked list.
You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example 1:
Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.

Example 2:
Input: l1 = [0], l2 = [0]
Output: [0]

Example 3:
Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]

Constraints:
The number of nodes in each linked list is in the range [1, 100].
0 <= Node.val <= 9
It is guaranteed that the list represents a number that does not have leading zeros.
*/

var addTwoNumbers = function(l1, l2) {
    let head = l1;
    let carry = 0; 
    while (true) {
      let sum = l1.val + l2.val + carry;
      if (sum >= 10) {
        l1.val = sum - 10;
        carry = 1;
      } else {
        l1.val = sum;
        carry = 0;
      }

    if (l1.next === l2.next) {
      if (carry) l1.next = new ListNode(carry);
      break;
    }
      
      l1 = l1.next = l1.next || new ListNode(0);
      l2 = l2.next || new ListNode(0);
    }
  
    return head;
};
