import { COLOR_BRANDS, type ColorBrands } from "../types";
import { assertColor } from "./validation";
import { isHex, isHexa } from "./hex";
import { isRgb, isRgba } from "./rgb";
import { isHsl, isHsla } from "./hsl";

export const getColorBrand = (color: string): ColorBrands => {
  assertColor(color);

  if (isHex(color)) {
    return COLOR_BRANDS.HEX;
  }

  if (isHexa(color)) {
    return COLOR_BRANDS.HEXA;
  }

  if (isRgb(color)) {
    return COLOR_BRANDS.RGB;
  }

  if (isRgba(color)) {
    return COLOR_BRANDS.RGBA;
  }

  if (isHsl(color)) {
    return COLOR_BRANDS.HSL;
  }

  if (isHsla(color)) {
    return COLOR_BRANDS.HSLA;
  }

  throw new Error(`${color} is not a valid color value.`);
};
