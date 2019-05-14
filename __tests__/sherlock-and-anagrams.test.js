const { sherlockAndAnagrams, triangleSum } = require("../hash-tables/sherlock-and-anagrams");

describe("triangleSum()", () => {
  it("returns triangularSum of given num", () => {
    expect(triangleSum(2)).toBe(3);
    expect(triangleSum(3)).toBe(6);
    expect(triangleSum(4)).toBe(10);
  });
});

describe("sherlockAndAnagrams", () => {
  it("should be a function", () => {
    expect(typeof sherlockAndAnagrams).toBe("function");
  });
  it("returns 0 if string is of length 1 or less", () => {
    expect(sherlockAndAnagrams("")).toBe(0);
    expect(sherlockAndAnagrams("a")).toBe(0);
  });
  it("returns 1 if string is length 2 and letters are same", () => {
    expect(sherlockAndAnagrams("aa")).toBe(1);
  });
  it("returns 0 if string is length 2 but lettes are different", () => {
    expect(sherlockAndAnagrams("ab")).toBe(0);
    expect(sherlockAndAnagrams("ba")).toBe(0);
  });
  it("returns 2 for 'bab' ", () => {
    expect(sherlockAndAnagrams("bab")).toBe(2);
  });
  it("returns 4 for 'abba' ", () => {
    expect(sherlockAndAnagrams("abba")).toBe(4);
  });
  it("returns 0 for 'abcd' ", () => {
    expect(sherlockAndAnagrams("abcd")).toBe(0);
  });
  it("returns 3 for 'ifailuhkqq' ", () => {
    expect(sherlockAndAnagrams("ifailuhkqq")).toBe(3);
  });
  it("returns 10 for 'kkkk' ", () => {
    expect(sherlockAndAnagrams("kkkk")).toBe(10);
  });
  it("returns 5 for 'cdcd' ", () => {
    expect(sherlockAndAnagrams("cdcd")).toBe(5);
  });
});
