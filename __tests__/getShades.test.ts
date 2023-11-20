import { getShades } from "../src/getShades";
import { lighten, darken, both } from "../src/shaders";

jest.mock("../src/shaders", () => {
  return {
    lighten: jest.fn().mockImplementation(() => []),
    darken: jest.fn().mockImplementation(() => []),
    both: jest.fn().mockImplementation(() => []),
  };
});

jest.mock("../src/utils/formatter");

describe("getShades()", () => {
  it("Should call lighten correctly", () => {
    getShades({
      color: "#B83F87",
      mode: "lighten",
    });

    expect(lighten).toHaveBeenCalledWith({
      color: "#B83F87",
      count: 10,
      percentage: 0.1,
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
      percentage: 0.1,
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
      percentage: 0.1,
    });
  });
});
