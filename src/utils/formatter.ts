import Color from "color";
import type { ColorMode } from "./zod";

export type Format = Record<ColorMode, (color: string) => string>;

export const format: Format = {
  hex: (color: string) => Color(color).hex(),
  rgb: (color: string) => Color(color).rgb().string(),
  hsl: (color: string) => Color(color).hsl().string(),
};
