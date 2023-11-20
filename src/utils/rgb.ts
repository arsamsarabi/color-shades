const rgbRegex =
  /^rgb\((0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d),(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d),(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d)\)$/;
export type RGB = string & { __brand: "RGB" };
export const isRgb = (color: string): color is RGB => rgbRegex.test(color);

const rgbaRegex =
  /^rgba\((0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d),(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d),(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d),(0|0?\.\d|1(\.0)?)\)$/;
export type RGBA = string & { __brand: "RGBA" };
export const isRgba = (color: string): color is RGBA => rgbaRegex.test(color);
