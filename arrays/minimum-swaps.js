exports.minimumSwaps = input => {
  let startIndex = 0;
  let current = null;
  let swaps = 0;
  const array = [...input];
  for (let i = 0; i < array.length; ) {
    if (array[i] === i + 1) startIndex = i + 1;
    if (array[i] !== i + 1) {
      current = array[i];
      array[i] = array[current - 1];
      array[current - 1] = current;
      swaps++;
      i = startIndex;
    } else {
      i++;
    }
  }
  return swaps;
};
