const tallyWords = string => {
  const wordArray = string.match(/\w+/g);
  if (wordArray) {
    return wordArray.reduce((tally, word) => {
      tally[word] = (tally[word] || 0) + 1;
      return tally;
    }, {});
  } else {
    return {};
  }
};

const compareTallies = (magTally, noteTally) => {
  let canDo = true;
  for (let word in noteTally) {
    if (!magTally[word] || magTally[word] < noteTally[word]) {
      canDo = false;
    }
  }
  return canDo;
};

const ransomNote = (mag, note) => {
  let sufficientWordage = false;
  if (mag && note) {
    const magWords = tallyWords(mag);
    const noteWords = tallyWords(note);
    sufficientWordage = compareTallies(magWords, noteWords);
  }
  return sufficientWordage ? "Yes" : "No";
};

module.exports = { ransomNote, tallyWords, compareTallies };
