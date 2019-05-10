const { processArrayQueries, arrayManipulation } = require("../arrays/array-manipulation");

describe("processArrayQueries", () => {
  it("is a function", () => {
    expect(typeof processArrayQueries).toBe("function");
  });
  it("builds an array of zeroes with length n and returns it when no queries are given", () => {
    expect(processArrayQueries(5, null)).toEqual([0, 0, 0, 0, 0]);
  });
  it("adds number k to each index in single query", () => {
    expect(processArrayQueries(5, [[1, 3, 1]])).toEqual([1, 1, 1, 0, 0]);
  });
  it("adds number k to each index from two queries", () => {
    expect(processArrayQueries(5, [[1, 3, 1], [3, 4, 1]])).toEqual([1, 1, 2, 1, 0]);
  });
});

describe("arrayManipulation()", () => {
  it("returns largest value after single-query manipulation", () => {
    expect(arrayManipulation(5, [[1, 3, 1]])).toBe(1);
  });
  it("returns largest value after double-query manipulation", () => {
    expect(arrayManipulation(5, [[1, 3, 1], [3, 4, 1]])).toBe(2);
  });
});
