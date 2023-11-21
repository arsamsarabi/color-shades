import { type InputType, format, validate } from "./utils";
import { lighten, darken, both } from "./shaders";

export type GetShadesInput = Partial<InputType> & { color: string };

export const getShades = (input: GetShadesInput): Array<string> => {
  const { color, count, mode, output, amount } = validate(input);
  let result: Array<string> = [];

  // Shade
  switch (mode) {
    case "lighten":
      result = lighten({ color, count, amount });
    case "darken":
      result = darken({ color, count, amount });
    default:
      result = both({ color, count, amount });
  }

  // Format
  result = result.map((color) => format[output](color));

  // Deliver
  return result;
};
