import type { Color } from "../types";
import { isHex, isHexa } from "./hex";
import { isRgb, isRgba } from "./rgb";
import { isHsl, isHsla } from "./hsl";

export function assertColor(color: string): asserts color is Color {
  const valid = [isHex, isHexa, isRgb, isRgba, isHsl, isHsla].some(
    (validator) => validator(color)
  );

  if (!valid) {
    throw new Error(`${color} is not a valid color value.`);
  }
}
