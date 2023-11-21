import Color from "color";
import type { ShaderArgs } from "./types";

export type DarkenArgs = ShaderArgs;
export type Darken = (args: DarkenArgs) => string[];

export const darken: Darken = ({ color, count = 10, amount = 0.1 }) => {
  const result: Array<string> = [color];

  for (let i = 1; i < count; i++) {
    const c = Color(result[i - 1]);
    result.push(c.darken(amount).hex());
  }

  return result;
};
