function sumItems(array) {
  // Sum all the numbers in the array
  let sum = 0;
  for (let e of array) {
    if (Array.isArray(e)) {
      sum += sumItems(e);
    } else {
      sum += e;
    }
  }
  return sum;
}

module.exports = sumItems;
