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
  array.reduce((ref, query) => {
    if (query[0] === 1) {
      ref[query[1]] = (ref[query[1]] || 0) + 1;
    }
    if (query[0] === 2 && ref[query[1]]) {
      ref[query[1]]--;
    }
    if (query[0] === 3) {
      output.push(Object.values(ref).includes(query[1]) ? 1 : 0);
    }
    return ref;
  }, {});
  return output;
};

module.exports = { frequencyQueries, createRef };
