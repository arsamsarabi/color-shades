import Color from "color";
import type { ShaderArgs } from "./types";

export type BothArgs = ShaderArgs;
export type Both = (args: BothArgs) => string[];

export const both: Both = ({ color, count = 10, percentage = 0.1 }) => {
  const result: Array<string> = [];
  const baseColorIndex = Math.floor((count - 1) / 2);
  const firstColor = Color(color).lighten(percentage * baseColorIndex);
  result.push(firstColor.hex());

  for (let i = 1; i < count; i++) {
    if (i === baseColorIndex) {
      result.push(color);
    } else {
      const c = Color(result[i - 1]);
      result.push(c.darken(percentage).hex());
    }
  }

  return result;
};
