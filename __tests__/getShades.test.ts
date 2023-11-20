import { getShades } from "../src";

describe("getShades()", () => {
  it("Should return an array of 10 shades of the given color", () => {
    const shades = getShades({
      color: "#ff0000",
      count: 3,
      mode: "lighten",
      output: "hex",
      amount: 0.1,
    });

    expect(shades.map((shade) => shade.toLowerCase())).toEqual([
      "#ff0000",
      "#ff1a1a",
      "#ff3333",
    ]);
  });

  it("should return an array of 10 shades of the given color", () => {
});
