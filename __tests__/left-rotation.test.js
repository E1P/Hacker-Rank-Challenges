const { leftRotation } = require("../arrays/left-rotation");
const testArray = [1, 2, 3, 4, 5];
const oneRotArray = [2, 3, 4, 5, 1];

describe("leftRotation()", () => {
  it("is a function", () => {
    expect(typeof leftRotation).toBe("function");
  });
  it("returns same array if rotations = 0", () => {
    expect(leftRotation(0, testArray)).toEqual(testArray);
  });
  it("rotates by one", () => {
    expect(leftRotation(1, testArray)).toEqual(oneRotArray);
  });
});
