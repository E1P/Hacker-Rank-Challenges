const countTriplets = (array, ratio) => {
  if (ratio === 1) {
    let potentialTriplets = 0;
    for (let i = 1; i < array.length - 1; i++) {
      potentialTriplets += (i * (i + 1)) / 2;
    }
    return potentialTriplets;
  }

  const refObj = array.reduce((ref, int, index) => {
    if (!ref[int]) ref[int] = [];
    ref[int].push(index);
    return ref;
  }, {});

  let triplets = 0;
  array.forEach((int, index) => {
    const seconds = refObj[int * ratio];
    const thirds = refObj[int * ratio ** 2];
    if (seconds && thirds) {
      triplets += seconds.filter(i => i > index).length * thirds.filter(i => i > index).length;
    }
  });
  return triplets;
};

module.exports = { countTriplets };
