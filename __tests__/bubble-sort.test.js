const { bubbleSort } = require("../sorting/bubble-sort");
const testArrays = {
  sample1: [3, 2, 1],
  sample2: [4, 2, 3, 1],
  sample3: [1, 2, 3]
};

describe("bubbleSort()", () => {
  it("should be a function", () => {
    expect(typeof bubbleSort).toBe("function");
  });
  it("should sort array and return array with number of swaps", () => {
    expect(bubbleSort(testArrays.sample1)).toEqual([[1, 2, 3], 3]);
    expect(bubbleSort(testArrays.sample2)).toEqual([[1, 2, 3, 4], 5]);
    expect(bubbleSort(testArrays.sample3)).toEqual([[1, 2, 3], 0]);
  });
});
