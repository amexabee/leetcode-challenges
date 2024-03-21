```
function ListNode(val, next) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
}


const print = node => {
  if (!node) return ''; 
  let current = node;
  let str = current.val;
  while(current.next) {
    current = current.next;
    str += " -> " + current.val;
  }
  console.log(str)
} 

let c = new ListNode(3)
let b = new ListNode(2, c)
let a = new ListNode(1, b)

print(a);    // 1 -> 2 -> 3
```
