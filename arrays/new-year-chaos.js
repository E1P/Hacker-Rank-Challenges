exports.newYearChaos = input => {
  const array = [...input];
  const noCanDo = "Too chaotic";
  let isChaotic = false;
  let bribes = 0;
  let startIndex = 0;

  for (let i = 0; i < array.length; i++) {
    array[i] = +array[i];
    if (array[i] - 1 > i + 2) {
      isChaotic = true;
      break;
    }
  }
  if (!isChaotic) {
    for (let i = 0; i < array.length && !isChaotic; ) {
      if (array[i] - 1 === i) {
        startIndex++;
        i++;
      } else if (array[i] > i + 1 && array[i + 1] < array[i]) {
        const temp = array[i + 1];
        array[i + 1] = array[i];
        array[i] = temp;
        bribes++;
        i = startIndex;
      } else {
        i++;
      }
    }
  }
  return isChaotic ? noCanDo : bribes;
};
