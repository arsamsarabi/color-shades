import Color from "color";
import type { ColorMode } from "./zod";

export type Format = Record<ColorMode, (color: string) => string>;

export const format: Format = {
  hex: (color: string) => Color(color).hex(),
  rgb: (color: string) => Color(color).rgb().string(),
  hsl: (color: string) => {
    const c = Color(color).hsl()
    const result = c.toString()
    debugger
    return result
  },
};
