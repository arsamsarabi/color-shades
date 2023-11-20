import { darken } from "../src/shaders/darken";

describe("darken()", () => {
  it("Should darken correctly", () => {
    const shades = darken({
      color: "#ff0000",
      count: 3,
      percentage: 0.1,
    });

    expect(shades.map((shade) => shade.toLowerCase())).toEqual([
      "#ff0000",
      "#e60000",
      "#cf0000",
    ]);
  });

  it("Should darken correctly with default props", () => {
    const shades = darken({
      color: "#ff0aa0",
    });

    expect(shades.map((shade) => shade.toLowerCase())).toEqual([
      "#ff0aa0",
      "#ef0092",
      "#d70083",
      "#c20076",
      "#af006a",
      "#9e005f",
      "#8e0055",
      "#80004c",
      "#730044",
      "#68003d",
    ]);
  });

  it("Should darken correctly with a specific percentage", () => {
    const shades = darken({
      color: "#aef833",
      percentage: 0.2,
      count: 5,
    });

    expect(shades.map((shade) => shade.toLowerCase())).toEqual([
      "#aef833",
      "#93e708",
      "#76b906",
      "#5e9405",
      "#4b7604",
    ]);
  });
});
