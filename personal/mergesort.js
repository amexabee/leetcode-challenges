const merge = (left, right) => {
  let merged = [];
  let i = 0, j = 0;

  while (i < right.length || j < left.length) {
    if (j >= left.length) merged.push(right[i++]);
    else if (i >= right.length) merged.push(left[j++]);
    else if (left[j] < right[i]) merged.push(left[j++]);
    else merged.push(right[i++]);
  }

  return merged;
};

const divide = (arr) => {
  if (arr.length === 1) return arr;

  const mid = arr.length / 2;
  let left = divide(arr.slice(0, mid));
  let right = divide(arr.slice(mid, arr.length));

  return merge(left, right);
};

// console.log(divide([1, 0, 3, 4, 2, 8, 7, 9, 6, 5]));
