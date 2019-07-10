const { maximumToys, filterRange, sortRemaining } = require("../sorting/mark-and-toys");
const test0 = {
  prices: [1, 12, 5, 111, 200, 1000, 10],
  k: 50
};
const test1 = {
  prices: [1, 2, 3, 4],
  k: 7
};

describe("filterRange()", () => {
  it("filters toys whose price is greater than k", () => {
    expect(filterRange(test0.prices, test0.k)).toEqual([1, 12, 5, 10]);
  });
});

describe("sortRemaining()", () => {
  it("takes remaining prices and sorts them in ascending order", () => {
    expect(sortRemaining(filterRange(test0.prices, test0.k))).toEqual([1, 5, 10, 12]);
    expect(sortRemaining(filterRange(test0.prices, test0.k))[3]).toBe(12);
  });
});

describe("maximumToys()", () => {
  it("should be a function", () => {
    expect(typeof maximumToys).toBe("function");
  });
  it("returns correct number of toys for test0", () => {
    expect(maximumToys(test0.prices, test0.k)).toBe(4);
  });
  it("returns correct number of toys for test1", () => {
    expect(maximumToys(test1.prices, test1.k)).toBe(3);
  });
});
