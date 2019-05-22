const { frequencyQueries } = require("../hash-tables/frequency-queries");

describe("frequencyQueries()", () => {
  it("Is a function", () => {
    expect(typeof frequencyQueries).toBe("function");
  });
});
