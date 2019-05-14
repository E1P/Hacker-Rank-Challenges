const triangleSum = num => {
  if (num === 1) return 1;
  if (num === 0) return 0;
  return num + triangleSum(num - 1);
};

const sherlockAndAnagrams = string => {
  const letterComboTally = {};
  let totalAnagrams = 0;

  if (string.length <= 1) return 0;
  if (string.length === 2 && string[0] !== string[1]) return 0;
  if (string.length === 2 && string[0] === string[1]) return 1;

  for (let i = 0; i < string.length; i++) {
    for (let j = i + 1; j <= string.length; j++) {
      // console.log("string: ", i, j, string.slice(i, j));
      const sortedSubStr = string
        .slice(i, j)
        .split("")
        .sort()
        .join("");
      letterComboTally[sortedSubStr] = (letterComboTally[sortedSubStr] || 0) + 1;
    }
  }
  // console.log(letterComboTally);
  for (let letterCombo in letterComboTally) {
    const anagrams = triangleSum(letterComboTally[letterCombo] - 1);
    // console.log(anagrams);
    totalAnagrams += anagrams;
  }
  return totalAnagrams;
};

module.exports = { sherlockAndAnagrams, triangleSum };
