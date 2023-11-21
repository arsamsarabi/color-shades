import Color from "color";
import type { ShaderArgs } from "./types";

export type LightenArgs = ShaderArgs;
export type Lighten = (args: LightenArgs) => string[];

export const lighten: Lighten = ({ color, count = 10, amount = 0.1 }) => {
  const result: Array<string> = [color];

  for (let i = 1; i < count; i++) {
    const c = Color(result[i - 1]);
    result.push(c.lighten(amount).hex());
  }

  return result;
};
