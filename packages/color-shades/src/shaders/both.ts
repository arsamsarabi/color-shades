import Color from "color";
import type { ShaderArgs } from "./types";
import { lighten } from "./lighten";
import { darken } from "./darken";

export type BothArgs = ShaderArgs;
export type Both = (args: BothArgs) => string[];

export const both: Both = ({ color, count = 10, amount = 0.1 }) => {
  const isEven = count % 2 === 0;
  const half = Math.floor(count / 2);
  const extra = isEven ? 1 : 0;

  const lightened = lighten({ color, count: half, amount }).reverse();
  const darkened = darken({ color, count: half + extra, amount: amount }).slice(1, count + 1);

  const result = [...lightened, ...darkened].map((color) => Color(color).hex());

  return result;
};
