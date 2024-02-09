const merge = arr => {
  if (arr.length === 1) return arr;

  let mid = arr.length / 2;

  let left = merge(arr.slice(0, mid)); 
  let right = merge(arr.slice(mid, arr.length)); 
  
  let p1 = 0;
  let p2 = 0;
  let sorted = [];

  while (p1 < left.length || p2 < right.length) {
    if (p1 >= left.length) { 
      sorted.push(right[p2]); 
      p2++;
    }

    else if (p2 >= right.length) { 
      sorted.push(left[p1]); 
      p1++;
    }
      
    else {
      if (left[p1] > right[p2]) {
        sorted.push(right[p2]);
        p2++;
      }
      else {
        sorted.push(left[p1]);
        p1++;
      }
    }
  }
  
  return sorted
}
