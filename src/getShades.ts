import Color from "color";
import { ColorBrands } from "./types";
import { getColorBrand } from "./utils";

export type GetShadesArgs = {
  color: string;
  count: number;
  amount: number;
  mode: "lighten" | "darken" | "both";
  output: ColorBrands;
};

export type GetShades = (args: GetShadesArgs) => string[];

const outputFuncs = {
  hex: (color: Color) => color.hex(),
  hexa: (color: Color) => color.hex(),
  rgb: (color: Color) => color.rgb().string(),
  rgba: (color: Color) => color.rgb().string(),
  hsl: (color: Color) => color.hsl().string(),
  hsla: (color: Color) => color.hsl().string(),
};

const lighten = (color: Color, amount: number, index: number) =>
  color.lighten(amount * index);
const darken = (color: Color, amount: number, index: number) =>
  color.darken(amount * index);

export const getShades: GetShades = ({
  color,
  count,
  mode,
  output,
  amount,
}) => {
  const colorBrand = getColorBrand(color);
  const inputColor = Color(color);
  const primeIndex =
    mode === "lighten" || "darken"
      ? 0
      : Math.floor(count / 2) > 0
      ? Math.floor(count / 2)
      : 0;

  const result = [];

  if (mode === "lighten") {
    for (let i = 0; i < count; i++) {
      if (i === primeIndex) {
        result[i] = inputColor.hex();
      } else {
        result[i] = lighten(inputColor, amount, i).hex();
      }
    }
  }

  if (mode === "darken") {
    for (let i = 0; i < count; i++) {
      if (i === primeIndex) {
        result[i] = inputColor.hex();
      } else {
        result[i] = darken(inputColor, amount, i).hex();
      }
    }
  }

  if (mode === "both") {
    for (let i = 0; i < count; i++) {
      if (i === primeIndex) {
        result[i] = inputColor.hex();
      } else if (i < primeIndex) {
        result[i] = lighten(inputColor, amount, i).hex();
      } else {
        result[i] = darken(inputColor, amount, i).hex();
      }
    }
  }

  return result.map((color) => outputFuncs[output](Color(color)));
};
