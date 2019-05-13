const { ransomNote, tallyWords, compareTallies } = require("../hash-tables/ransom-note");

describe("tallyWords()", () => {
  it("returns an empty object if string is empty", () => {
    expect(tallyWords("")).toEqual({});
  });
  it("tallies a single word", () => {
    expect(tallyWords("word")).toEqual({ word: 1 });
  });
  it("tallies two different words", () => {
    expect(tallyWords("word mofo")).toEqual({ word: 1, mofo: 1 });
  });
  it("tallies two different words with multiple instances", () => {
    expect(tallyWords("word mofo word")).toEqual({ word: 2, mofo: 1 });
  });
  it("is case sensitive", () => {
    expect(tallyWords("Word word")).toEqual({ Word: 1, word: 1 });
  });
});

describe("compareTallies()", () => {
  it("returns false when mag has one word and note needs two of said word", () => {
    const magTally = { word: 1 };
    const noteTally = { word: 2 };
    expect(compareTallies(magTally, noteTally)).toBe(false);
  });
});

describe("ransomNote()", () => {
  it("returns no when input is empty", () => {
    expect(ransomNote("", "")).toBe("No");
  });
  it("returns yes when inputs are identical", () => {
    expect(ransomNote("Word", "Word")).toBe("Yes");
  });
  it("returns yes when mag has enough words for ransom note", () => {
    const mag = "give me one grand today night";
    const note = "give one grand today";
    expect(ransomNote(mag, note)).toBe("Yes");
  });
  it("returns no when all words are present but without required quantity of each", () => {
    const mag = "two times three is not four";
    const note = "two times two is four";
    expect(ransomNote(mag, note)).toBe("No");
  });
  it("returns no when a required word is not present in magazine", () => {
    const mag = "ive got a lovely bunch of coconuts";
    const note = "ive got some coconuts";
    expect(ransomNote(mag, note)).toBe("No");
  });
});
