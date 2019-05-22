const { countTriplets } = require("../hash-tables/count-triplets");

const hundredOnes = [];

for (let i = 0; i < 100; i++) {
  hundredOnes.push(1);
}

describe("countTriplets", () => {
  it("should be a function", () => {
    expect(typeof countTriplets).toBe("function");
  });
  it("returns 2 for [1, 2, 2, 4], ratio 2", () => {
    expect(countTriplets([1, 2, 2, 4], 2)).toBe(2);
  });
  it("returns 3 for [1, 2, 1, 2, 4], ratio 2", () => {
    expect(countTriplets([1, 2, 1, 2, 4], 2)).toBe(3);
  });
  it("returns 6 for [1, 3, 9, 9, 27, 81], ratio 3", () => {
    expect(countTriplets([1, 3, 9, 9, 27, 81], 3)).toBe(6);
  });
  it("returns 4 for [1, 5, 5, 25, 125], ratio 5", () => {
    expect(countTriplets([1, 5, 5, 25, 125], 5)).toBe(4);
  });
  it("returns 35 for [1, 1, 1, 1, 1, 1], ratio 1", () => {
    expect(countTriplets([1, 1, 1, 1, 1, 1], 1)).toBe(20);
  });
  it("returns 161700 for hundredOnes, ratio 1", () => {
    expect(countTriplets(hundredOnes, 1)).toBe(161700);
  });
});
