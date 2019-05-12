const processArrayQueries = (n, queries) => {
  const zeroArray = [];
  for (let i = 0; i < n; i++) {
    zeroArray[i] = 0;
  }
  if (queries) {
    return queries.reduce((output, query) => {
      const aIndex = query[0] - 1;
      const bIndex = query[1];
      const k = query[2];
      for (let i = aIndex; i < bIndex; i++) {
        output[i] += k;
      }
      return output;
    }, zeroArray);
  } else {
    return zeroArray;
  }
};

const arrayManipulation = (n, queries) => {
  const zeroArray = [];
  let maximum = 0;
  for (let i = 0; i < queries.length; i++) {
    let a = queries[i][0] - 1;
    let b = queries[i][1];
    let k = queries[i][2];
    for (let j = a; j < b; j++) {
      zeroArray[j] = (zeroArray[j] || 0) + k;
      if (zeroArray[j] > maximum) maximum = zeroArray[j];
    }
  }
  return maximum;
  // const zeroArray = [];
  // for (let i = 0; i < n; i++) {
  //   zeroArray[i] = 0;
  // }
  // let maximum = 0;
  // queries.reduce((output, query) => {
  //   const aIndex = query[0] - 1;
  //   const bIndex = query[1];
  //   const k = query[2];
  //   for (let i = aIndex; i < bIndex; i++) {
  //     output[i] += k;
  //     if (output[i] > maximum) maximum = output[i];
  //   }
  //   return output;
  // }, zeroArray);
  // return maximum;
};

module.exports = { processArrayQueries, arrayManipulation };
