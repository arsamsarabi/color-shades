const hslRegex =
  /^hsl\((0|360|35\d|3[0-4]\d|[12]\d\d|0?\d?\d),(0|100|\d{1,2})%,(0|100|\d{1,2})%\)$/;
export type HSL = string & { __brand: "HSL" };
export const isHsl = (color: string): color is HSL => hslRegex.test(color);

const hslaRegex =
  /^hsla\((0|360|35\d|3[0-4]\d|[12]\d\d|0?\d?\d),(0|100|\d{1,2})%,(0|100|\d{1,2})%,(0?\.\d|1(\.0)?)\)$/;
export type HSLA = string & { __brand: "HSLA" };
export const isHsla = (color: string): color is HSLA => hslaRegex.test(color);
