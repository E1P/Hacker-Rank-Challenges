const { minimumSwaps } = require("../arrays/minimum-swaps");

const input0 = [4, 3, 1, 2];
const input1 = [2, 3, 4, 1, 5];
const input2 = [1, 3, 5, 2, 4, 6, 7];
const inputExample = [7, 1, 3, 2, 4, 5, 6];

describe("minimumSwaps()", () => {
  it("swaps digits in a 2-digit array and returns 1", () => {
    expect(minimumSwaps([2, 1])).toBe(1);
  });
  it("sorts 3-digit array that requires 1 swap and returns 1", () => {
    expect(minimumSwaps([3, 2, 1])).toBe(1);
  });
  it("sorts 3-digit array that requires 2 swaps and returns 2", () => {
    expect(minimumSwaps([3, 1, 2])).toBe(2);
  });
  it("returns 3 for sample input 0", () => {
    expect(minimumSwaps(input0)).toBe(3);
  });
  it("returns 3 for sample input 1", () => {
    expect(minimumSwaps(input1)).toBe(3);
  });
  it("returns 3 for sample input 2", () => {
    expect(minimumSwaps(input2)).toBe(3);
  });
  it("returns 5 for example input", () => {
    expect(minimumSwaps(inputExample)).toBe(5);
  });
});
