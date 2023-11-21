import { getShades } from "../src/getShades";
import { lighten, darken, both } from "../src/shaders";

jest.mock("../src/shaders", () => {
  return {
    lighten: jest.fn().mockImplementation(() => []),
    darken: jest.fn().mockImplementation(() => []),
    both: jest.fn().mockImplementation(() => []),
  };
});

describe("getShades()", () => {
  it("Should call lighten correctly", () => {
    getShades({
      color: "#B83F87",
      mode: "lighten",
    });

    expect(lighten).toHaveBeenCalledWith({
      color: "#B83F87",
      count: 10,
      amount: 0.1,
    });
  });

  it("Should call darken correctly", () => {
    getShades({
      color: "#B83F87",
      mode: "darken",
    });

    expect(darken).toHaveBeenCalledWith({
      color: "#B83F87",
      count: 10,
      amount: 0.1,
    });
  });

  it("Should call both correctly", () => {
    getShades({
      color: "#B83F87",
      mode: "both",
    });

    expect(both).toHaveBeenCalledWith({
      color: "#B83F87",
      count: 10,
      amount: 0.1,
    });
  });

  it("Should accept a 6 digit hex color value", () => {
    expect(
      getShades({
        color: "#B83F87",
      })
    ).toEqual(expect.anything());
  });

  it("Should accept a 3 digit hex color value", () => {
    expect(
      getShades({
        color: "#B83",
      })
    ).toEqual(expect.anything());
  });

  it("Should accept a 4 digit hexa color value", () => {
    expect(
      getShades({
        color: "#B83F",
      })
    ).toEqual(expect.anything());
  });

  it("Should accept a 7 digit hexa color value", () => {
    expect(
      getShades({
        color: "#B83F8711",
      })
    ).toEqual(expect.anything());
  });

  it("Should accept a rgb color value", () => {
    expect(
      getShades({
        color: "rgb(184, 144, 135)",
      })
    ).toEqual(expect.anything());
  });

  it("Should accept a rgba color value", () => {
    expect(
      getShades({
        color: "rgba(84, 144, 135, 0.5)",
      })
    ).toEqual(expect.anything());
  });

  it("Should accept a hsl color value", () => {
    expect(
      getShades({
        color: "hsl(184, 44%, 11%)",
      })
    ).toEqual(expect.anything());
  });

  it("Should accept a hsla color value", () => {
    expect(
      getShades({
        color: "hsla(234, 44%, 11%, 0.5)",
      })
    ).toEqual(expect.anything());
  });

  it("Should throw an error if color is not valid", () => {
    expect(() => {
      getShades({
        color: "invalid",
      });
    }).toThrow();

    expect(() => {
      getShades({
        color: "#B83F8",
      });
    }).toThrow();

    expect(() => {
      getShades({
        color: "rgb(184, 144, 435, 0.5)",
      });
    }).toThrow();
  });
});
