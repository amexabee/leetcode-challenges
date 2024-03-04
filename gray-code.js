/* Challenge description: https://leetcode.com/problems/gray-code/

An n-bit gray code sequence is a sequence of 2n integers where:

Every integer is in the inclusive range [0, 2n - 1],
The first integer is 0,
An integer appears no more than once in the sequence,
The binary representation of every pair of adjacent integers differs by exactly one bit, and
The binary representation of the first and last integers differs by exactly one bit.
Given an integer n, return any valid n-bit gray code sequence.

Example 1:
Input: n = 2
Output: [0,1,3,2]
Explanation:
The binary representation of [0,1,3,2] is [00,01,11,10].
- 00 and 01 differ by one bit
- 01 and 11 differ by one bit
- 11 and 10 differ by one bit
- 10 and 00 differ by one bit
[0,2,3,1] is also a valid gray code sequence, whose binary representation is [00,10,11,01].
- 00 and 10 differ by one bit
- 10 and 11 differ by one bit
- 11 and 01 differ by one bit
- 01 and 00 differ by one bit

Example 2:
Input: n = 1
Output: [0,1]

Constraints:
1 <= n <= 16
*/

var grayCode = function(n) {
    let output = [];
    const decToBin = num => {
        let result = '';
        while (num > 0) {
            result = num % 2 + result;
            num = Math.floor(num / 2);
        }

        return result || '0';
    };

    const binToGra = str => {
        let result = '';
        for (let i = 1; i < str.length; i++) {
            result += (str[i - 1] === str[i]) ? '0' : '1';
        }

        return str[0] + result;
    };

    const binToDec = str => {
        let result = 0;
        for (let i = 0; i < str.length; i++) {
            let mult = Math.pow(2, i)
            result += str[str.length - i - 1] * mult;
        }

        return result;
    };

    for (let i = 0, lim = Math.pow(2, n); i < lim; i++) {
        let bin = decToBin(i);
        let gra = binToGra(bin);
        let dec = binToDec(gra);
        output.push(dec);
    }

    return output;
};
