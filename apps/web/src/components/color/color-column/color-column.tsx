"use client";

import { Flex } from "@mantine/core";
import { ColorRow } from "../color-row";
import cn from "./color-column.module.css";

type ColorColumnProps = {
  colors: string[];
}

export const ColorColumn = ({ colors }: ColorColumnProps) => {
  return (
    <Flex
      classNames={{ root: cn.column__wrapper }}
      direction="column"
    >
      {colors.map((color) => <ColorRow color={color} key={color} />)}
    </Flex>
  );
};
