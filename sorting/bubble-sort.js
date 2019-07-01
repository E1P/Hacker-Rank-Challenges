const bubbleSort = array => {
  let swaps = 0;

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j] > array[j + 1]) {
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        swaps++;
      }
    }
  }

  console.log(`Array is sorted in ${swaps} swaps.`);
  console.log(`First Element: ${array[0]}`);
  console.log(`Last Element: ${array[array.length - 1]}`);
  return [array, swaps];
};

module.exports = { bubbleSort };
