const { leftRotation } = require("../arrays/left-rotation");
const testArray = [1, 2, 3, 4, 5];
const oneRotArray = [2, 3, 4, 5, 1];
const fourRotArray = [5, 1, 2, 3, 4];

describe("leftRotation()", () => {
  it("is a function", () => {
    expect(typeof leftRotation).toBe("function");
  });
  it("returns same array if rotations = 0", () => {
    expect(leftRotation(testArray, 0)).toEqual(testArray);
  });
  it("rotates by one", () => {
    expect(leftRotation(testArray, 1)).toEqual(oneRotArray);
  });
  it("rotates by four", () => {
    expect(leftRotation(testArray, 4)).toEqual(fourRotArray);
  });
});
