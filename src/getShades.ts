import { ColorBrands } from "./types";
import { format } from "./utils";
import { lighten, darken, both } from "./shaders";

export type GetShadesArgs = {
  percentage?: number;
  color: string;
  count?: number;
  mode?: "lighten" | "darken" | "both";
  output?: ColorBrands;
};

export type GetShades = (args: GetShadesArgs) => string[];

export const getShades: GetShades = ({
  color,
  count = 10,
  mode = "both",
  output = "hex",
  percentage = 0.1,
}) => {
  let result: Array<string> = [];

  // Shade
  switch (mode) {
    case "lighten":
      result = lighten({ color, count, percentage });
    case "darken":
      result = darken({ color, count, percentage });
    default:
      result = both({ color, count, percentage });
  }

  // Format
  result = result.map((color) => format[output](color));

  // Deliver
  return result;
};
