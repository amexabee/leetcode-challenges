/*  Challenge description  (Difficulty: Medium)

You are visiting a farm that has a single row of fruit trees arranged from left to right. 
The trees are represented by an integer array fruits where fruits[i] is the type of fruit the ith tree produces.

You want to collect as much fruit as possible. However, the owner has some strict rules that you must follow:

You only have two baskets, and each basket can only hold a single type of fruit. There is no limit on the 
amount of fruit each basket can hold. Starting from any tree of your choice, you must pick exactly one fruit 
from every tree (including the start tree) while moving to the right. The picked fruits must fit 
in one of your baskets. Once you reach a tree with fruit that cannot fit in your baskets, you must stop.
Given the integer array fruits, return the maximum number of fruits you can pick.

*/

// My Solution
function totalFruit(fruits) {
  let freq = 0;

  fruits.forEach((item, index) => {
    const before = beforeFreq(fruits, index);
    const after = afterFreq(fruits, index);

    if (before === undefined && after === undefined)
      freq = Math.max(calculate(fruits, index, item), freq);
    else if (before === undefined)
      freq = Math.max(calculate(fruits, index, after), freq);
    else if (after === undefined)
      freq = Math.max(calculate(fruits, index - 1, item), freq);
    else
      freq = Math.max(
        calculate(fruits, index - 1, item),
        calculate(fruits, index, after),
        freq
      );
  });
  return freq;
}

function calculate(array, index, other) {
  item = array[index];
  let count = 0;
  for (let i = index; i < array.length; i++) {
    count++;
    if (array[i + 1] !== item && array[i + 1] !== other) return count;
  }
}

function beforeFreq(array, index) {
  return array[index - 1];
}

function afterFreq(array, index) {
  let item = array[index];
  for (let i = index; i < array.length; i++) {
    if (array[i + 1] !== item) return array[i + 1];
  }
}
