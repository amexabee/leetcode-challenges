const selection = arr => {
  for (let p1 = 0; p1 < arr.length; p1++) {
    let min = Number.MAX_SAFE_INTEGER;
    let index = -1;
  
    for (let i = p1 + 1; i < arr.length; i++) {
      if (arr[i] < min) { 
        min = arr[i]; 
        index = i;
      }
    }
    
    if (index !== -1) {
      let temp = arr[p1];
      arr[p1] = arr[index];
      arr[index] = temp;
    }
  }

  return arr;
}
