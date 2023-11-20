import { both } from "../src/shaders/both";

describe("both", () => {
  it("Should both correctly", () => {
    const shades = both({
      color: "#ff0000",
      count: 3,
      percentage: 0.1,
    });

    expect(shades.map((shade) => shade.toLowerCase())).toEqual([
      "#ff1a1a",
      "#ff0000",
      "#e60000",
    ]);
  });

  it("Should both correctly with default props", () => {
    const shades = both({
      color: "#ff0aa0",
    });

    expect(shades.map((shade) => shade.toLowerCase())).toEqual([
      "#ff74c9",
      "#ff4fbb",
      "#ff2eae",
      "#ff10a2",
      "#ff0aa0",
      "#ef0092",
      "#d70083",
      "#c20076",
      "#af006a",
      "#9e005f",
    ]);
  });

  it("Should both correctly with a specific percentage", () => {
    const shades = both({
      color: "#aef833",
      percentage: 0.2,
      count: 5,
    });

    expect(shades.map((shade) => shade.toLowerCase())).toEqual([
      "#dcfca7",
      "#bcf956",
      "#aef833",
      "#93e708",
      "#76b906",
    ]);
  });
});
