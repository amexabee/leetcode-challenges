/*
Challenge description: https://leetcode.com/problems/insert-interval

You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] 
represent the start and the end of the ith interval and intervals is sorted in ascending order by starti. 
You are also given an interval newInterval = [start, end] that represents the start and end of another interval.
Insert newInterval into intervals such that intervals is still sorted in ascending order by starti and 
intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).
Return intervals after the insertion.

Example 1:
Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
Output: [[1,5],[6,9]]

Example 2:
Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
Output: [[1,2],[3,10],[12,16]]
Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10]. 

Constraints:
0 <= intervals.length <= 10^4
intervals[i].length == 2
0 <= starti <= endi <= 10^5
intervals is sorted by starti in ascending order.
newInterval.length == 2
*/

var insert = function(intervals, newInterval) {
  if (intervals.length === 0) {
    intervals.push(newInterval)
    return intervals;
  } 
  
  recursive(0, intervals.length - 1)
  
  function recursive(start, end) {
    let i = Math.floor((start + end) / 2)
    if (newInterval[0] > intervals[i][1]) {
      if (start === end) {
        intervals.splice(i + 1, 0, newInterval);
        return;
      }
      recursive(i + 1, end);
    }
  
    else if (newInterval[1] < intervals[i][0]){
      if (start === end) {
        intervals.splice(i, 0, newInterval);
        return;
      }
      recursive(start, i - 1);
    }

    else {
      let c = i;
      while(intervals[c] && newInterval[1] >= intervals[c][0]) c++;
      intervals[i][1] = Math.max(newInterval[1], intervals[c - 1][1])
      intervals.splice(i + 1, c - i - 1);
  
      
      c = i - 1;
      while(intervals[c] && newInterval[0] <= intervals[c][1]) c--;
      intervals[i][0] = Math.min(newInterval[0], intervals[c + 1][0]);
      intervals.splice(c + 1, i - c - 1)
    }
  }

  return intervals;
}
