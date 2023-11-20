import Color from "color";

export const format = {
  hex: (color: string) => Color(color).hex(),
  hexa: (color: string) => Color(color).hex(),
  rgb: (color: string) => Color(color).rgb().string(),
  rgba: (color: string) => Color(color).rgb().string(),
  hsl: (color: string) => Color(color).hsl().string(),
  hsla: (color: string) => Color(color).hsl().string(),
};
