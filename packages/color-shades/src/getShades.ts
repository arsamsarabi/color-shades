import { type InputType, format, validate } from "./utils";
import { lighten, darken, both } from "./shaders";

export type GetShadesInput = Partial<InputType> & { color: string };

export const getShades = (input: GetShadesInput): Array<string> => {
  const { color, count, mode, output, amount } = validate(input);

  // Shade
  switch (mode) {
    case "lighten":
      return lighten({ color, count, amount }).map((color) => format[output](color));
    case "darken":
      return darken({ color, count, amount }).map((color) => format[output](color));
    default:
      return both({ color, count, amount }).map((color) => format[output](color));
  }
};
