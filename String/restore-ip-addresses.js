/* 
Challenge description: https://leetcode.com/problems/restore-ip-addresses
A valid IP address consists of exactly four integers separated by single dots. 
Each integer is between 0 and 255 (inclusive) and cannot have leading zeros.

For example, "0.1.2.201" and "192.168.1.1" are valid IP addresses, but 
"0.011.255.245", "192.168.1.312" and "192.168@1.1" are invalid IP addresses.

Given a string s containing only digits, return all possible valid IP addresses 
that can be formed by inserting dots into s. You are not allowed to reorder or 
remove any digits in s. You may return the valid IP addresses in any order.
 
Example 1:
Input: s = "25525511135"
Output: ["255.255.11.135","255.255.111.35"]

Example 2:
Input: s = "0000"
Output: ["0.0.0.0"]

Example 3:
Input: s = "101023"
Output: ["1.0.10.23","1.0.102.3","10.1.0.23","10.10.2.3","101.0.2.3"]
*/

var restoreIpAddresses = function(s, group = 4, pre = "", ip = "", result = []) {
  if (s.length < 1) return result;

  if (group === 1 && s.length <= 3 && (s.length === 1 || s[0] !== "0") && parseInt(s) <= 255) {
    ip += pre + "." + s;
    result.push(ip);
    return result;
  }

  max = group * 3;
  if (s.length > max) return result;

  if (pre) ip += pre + ".";

  for (let i = 1; i <= 3; i++) {
    pre = s.slice(0, i);
    if (pre.length === 3 && parseInt(pre) > 255) continue;
    if (pre.length > 1 && pre[0] === "0") continue;
    let last = s.slice(i);
    restoreIpAddresses(last, group - 1, pre, ip, result);
  }

  return result;
}
