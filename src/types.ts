import _Color from "color";
import { HEX, HEXA, RGB, RGBA, HSL, HSLA } from "./utils";

export const COLOR_BRANDS = {
  HEX: "hex",
  HEXA: "hexa",
  RGB: "rgb",
  RGBA: "rgba",
  HSL: "hsl",
  HSLA: "hsla",
} as const;

export type ColorBrands = (typeof COLOR_BRANDS)[keyof typeof COLOR_BRANDS];

export type Color = HEX | HEXA | RGB | RGBA | HSL | HSLA;
