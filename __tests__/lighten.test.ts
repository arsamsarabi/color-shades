import { lighten } from "../src/shaders/lighten";

describe("lighten()", () => {
  it("Should lighten correctly", () => {
    const shades = lighten({
      color: "#ff0000",
      count: 3,
      percentage: 0.1,
    });

    expect(shades.map((shade) => shade.toLowerCase())).toEqual([
      "#ff0000",
      "#ff1a1a",
      "#ff3636",
    ]);
  });

  it("Should lighten correctly with default props", () => {
    const shades = lighten({
      color: "#ff0aa0",
    });

    expect(shades.map((shade) => shade.toLowerCase())).toEqual([
      "#ff0aa0",
      "#ff25aa",
      "#ff42b5",
      "#ff62c2",
      "#ff85d0",
      "#ffacdf",
      "#ffd7ef",
      "#ffffff",
      "#ffffff",
      "#ffffff",
    ]);
  });

  it("Should lighten correctly with a specific percentage", () => {
    const shades = lighten({
      color: "#aef833",
      percentage: 0.2,
      count: 5,
    });

    expect(shades.map((shade) => shade.toLowerCase())).toEqual([
      "#aef833",
      "#c5fa6d",
      "#e1fcb2",
      "#ffffff",
      "#ffffff",
    ]);
  });
});
