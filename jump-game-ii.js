/*   Challenge description

You are given a 0-indexed array of integers nums of length n. You are initially positioned 
at nums[0]. Each element nums[i] represents the maximum length of a forward jump from index i. 
In other words, if you are at nums[i], you can jump to any nums[i + j] where:

0 <= j <= nums[i] and
i + j < n

Return the minimum number of jumps to reach nums[n - 1]. 
The test cases are generated such that you can reach nums[n - 1].

Example: 
Input: nums = [2,3,1,1,4]
Output: 2
Explanation: The minimum number of jumps to reach the last index is 2. 
             Jump 1 step from index 0 to 1, then 3 steps to the last index.

*/

// My Solution

function jump(nums) {
  if (nums.length === 1) return 0;

  let total = Number.MAX_SAFE_INTEGER;
  return calculate(0);

  function calculate(position, result = '', jumps = 0) {
    if (position === nums.length - 1) {
      total = jumps < total ? jumps : total;
      console.log(result + nums[position]);
      // I added the above line just to display the path; "result" is totally unnecessary in this code!
      return;
    }

    result += `${nums[position]} => `;
    jumps++;

    for (let i = 1; i <= nums[position]; i++) {
      calculate(position + i, result, jumps);
    }

    return total;
  }
}
