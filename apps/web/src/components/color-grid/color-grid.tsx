"use client";

import { getShades } from "@arsams/color-shades";
import cn from "./color-grid.module.css";
import { ColorGroup } from "../color-group";
import { Flex } from "@mantine/core";
import { useShadesContext } from "@/context/shades-context";

export const ColorGrid = () => {
  const { color, amount, count, output, mode } = useShadesContext();

  const lightened = getShades({
    color,
    amount,
    count,
    output,
    mode: "lighten",
  });
  const darkened = getShades({ color, amount, count, output, mode: "darken" });
  const both = getShades({ color, amount, count, output, mode: "both" });

  const isAll = mode === "all";
  const isBoth = mode === "both";
  const isLighten = mode === "lighten";
  const isDarken = mode === "darken";

  return (
    <Flex classNames={{ root: cn.grid__wrapper }} direction="column">
      {(isAll || isLighten) && <ColorGroup colors={lightened} />}
      {(isAll || isBoth) && <ColorGroup colors={both} />}
      {(isAll || isDarken) && <ColorGroup colors={darkened} />}
    </Flex>
  );
};
