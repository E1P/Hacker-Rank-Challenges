const createRef = array => {
  return array.reduce((ref, query) => {
    if (query[0] === 1) {
      ref[query[1]] = (ref[query[1]] || 0) + 1;
    }
    if (query[0] === 2 && ref[query[1]]) {
      ref[query[1]]--;
    }
    return ref;
  }, {});
};

const frequencyQueries = array => {
  const output = [];
  const currentFreqs = {};
  array.reduce((ref, query) => {
    if (query[0] === 1) {
      ref[query[1]] = (ref[query[1]] || 0) + 1;
      const freq = ref[query[1]];
      currentFreqs[freq] = (currentFreqs[freq] || 0) + 1;
      if (currentFreqs[freq - 1]) {
        currentFreqs[freq - 1] -= 1;
      }
    }
    if (query[0] === 2 && ref[query[1]]) {
      ref[query[1]]--;
      const freq = ref[query[1]];
      currentFreqs[freq] = (currentFreqs[freq] || 0) + 1;
      if (currentFreqs[freq + 1]) {
        currentFreqs[freq + 1] -= 1;
      }
    }
    if (query[0] === 3) {
      output.push(currentFreqs[query[1]] ? 1 : 0);
    }
    return ref;
  }, {});
  return output;
};

module.exports = { frequencyQueries, createRef };
