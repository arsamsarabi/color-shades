import { getShades } from "@arsams/color-shades";
import { MantineColorsTuple } from "@mantine/core";

const makeMantineTuple = (color: string): MantineColorsTuple => {
  return getShades({ color }) as unknown as MantineColorsTuple;
};

type ColorKeys = "black" | "grey" | "blue" | "white";

export const colors: Record<ColorKeys, MantineColorsTuple> = {
  black: makeMantineTuple("#323643"),
  grey: makeMantineTuple("#606470"),
  blue: makeMantineTuple("#93DEFF"),
  white: makeMantineTuple("#F7F7F7"),
} as const;

export type ThemeColors = typeof colors;

export const WHITE = colors.white[4];
export const BLACK = colors.black[4];
