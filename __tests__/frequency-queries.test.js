const { frequencyQueries, createRef } = require("../hash-tables/frequency-queries");

describe("createRef()", () => {
  it("returns an object which tallies according to given queries", () => {
    expect(createRef([[1, 1], [1, 2], [1, 1]])).toEqual({ 1: 2, 2: 1 });
  });
  it("deletes item if query number is 2", () => {
    expect(createRef([[1, 1], [1, 2], [1, 1], [2, 1]])).toEqual({ 1: 1, 2: 1 });
  });
  it("only deletes item if it exists", () => {
    expect(createRef([[1, 1], [1, 2], [1, 1], [2, 3]])).toEqual({ 1: 2, 2: 1 });
  });
});

describe("frequencyQueries()", () => {
  it("Is a function", () => {
    expect(typeof frequencyQueries).toBe("function");
  });
  it("returns an array with one 0 when query contains single 3 without applicable frequency", () => {
    expect(frequencyQueries([[1, 1], [1, 2], [1, 1], [2, 1], [3, 2]])).toEqual([0]);
  });
  it("returns an array with one 1 when query contains single 3 with applicable frequency", () => {
    expect(frequencyQueries([[1, 1], [1, 2], [1, 1], [3, 2]])).toEqual([1]);
  });
  it("passes sample input 0", () => {
    expect(frequencyQueries([[1, 5], [1, 6], [3, 2], [1, 10], [1, 10], [1, 6], [2, 5], [3, 2]])).toEqual([0, 1]);
  });
});
