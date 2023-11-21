import { z } from "zod";

const hexRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
const hexaRegex = /^#([A-Fa-f0-9]{8}|[A-Fa-f0-9]{4})$/;
const rgbRegex =
  /^rgb\((25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d),\s*(25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d),\s*(25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)\)$/;
const rgbaRegex =
  /^rgba\((25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d),\s*(25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d),\s*(25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d),\s*(0?\.\d|1(\.0)?)\)$/;
const hslRegex =
  /^hsl\(\s*(\d{1,3}|[1-9]\d{1,2})\s*,\s*(100%|[1-9]?\d%)\s*,\s*(100%|[1-9]?\d%)\s*\)$/;
const hslaRegex =
  /^hsla\(\s*(\d{1,3}|[1-9]\d{1,2})\s*,\s*(100%|[1-9]?\d%)\s*,\s*(100%|[1-9]?\d%)\s*,\s*(0?\.\d|1(\.0)?)\)$/;

const colorSchema = z.string().refine(
  (color) => {
    return (
      hexRegex.test(color) ||
      hexaRegex.test(color) ||
      rgbRegex.test(color) ||
      rgbaRegex.test(color) ||
      hslRegex.test(color) ||
      hslaRegex.test(color)
    );
  },
  { message: "Invalid color value." }
);

const COLOR_MODES = ["hex", "rgb", "hsl"] as const;

const DEFAULT_AMOUNT = 0.1;
const DEFAULT_COUNT = 10;
const DEFAULT_MODE = "both";
const DEFAULT_OUTPUT = "hex";

const inputSchema = z.object({
  amount: z.number().min(0).max(1).optional().default(DEFAULT_AMOUNT),
  color: colorSchema,
  count: z.number().min(1).optional().default(DEFAULT_COUNT),
  mode: z.enum(["lighten", "darken", "both"]).optional().default(DEFAULT_MODE),
  output: z.enum(COLOR_MODES).optional().default(DEFAULT_OUTPUT),
});

export const validate = (input: unknown) => {
  return inputSchema.parse(input);
};

export type InputType = z.infer<typeof inputSchema>;
export type ColorMode = (typeof COLOR_MODES)[number];
