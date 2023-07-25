/*
Challenge Description: https://leetcode.com/problems/merge-intervals

Given an array of intervals where intervals[i] = [starti, endi], 
merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

Example 1:
Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].

Example 2:
Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.

Constraints:
1 <= intervals.length <= 10^4
intervals[i].length == 2
0 <= starti <= endi <= 10^4
*/

var merge = function(intervals) {
  for (let c = 1; c < intervals.length; c++) {
    let p = c - 1;
    while (p >= 0) {
      if (intervals[c][0] >= intervals[p][0] && intervals[c][0] <= intervals[p][1]) { 
        if (intervals[p][1] > intervals[c][1]) {
          intervals[c][1] = intervals[p][1];
        }
        intervals[c][0] = intervals[p][0]
        intervals.splice(p, 1);
        c--;
      }
      else if (intervals[c][0] < intervals[p][0] && intervals[c][1] >= intervals[p][0]) {
        if (intervals[p][1] > intervals[c][1]) {
          intervals[c][1] = intervals[p][1];
        }
        intervals.splice(p, 1);
        c--;
      }
      p--;
    }
  }
  return intervals;
};
