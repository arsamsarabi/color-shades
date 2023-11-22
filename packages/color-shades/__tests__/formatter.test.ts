import { format } from "../src/utils/formatter";

describe("format", () => {
  it("Should format to hex", () => {
    const color = format.hex("#FF0000");

    expect(color).toEqual("#FF0000");
  });

  it("Should format to rgb", () => {
    const color = format.rgb("#FF0000");

    expect(color).toEqual("rgb(255, 0, 0)");
  });

  it("Should format to hsl", () => {
    const color = format.hsl("#FF0000");

    expect(color).toEqual("hsl(0, 100%, 50%)");
  });
});
