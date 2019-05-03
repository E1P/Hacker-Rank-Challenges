exports.leftRotation = (arr, rot) => {
  if (!rot || rot === arr.length) return arr;
  return arr.slice(rot).concat(arr.slice(0, rot));
};
