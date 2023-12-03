"use client";

import { FormatButton } from "@/components/format-button";
import { useShadesContext } from "@/context/shades-context";
import { Flex } from "@mantine/core";
import cn from "./styles.module.css";

export const ColorFormatPicker = () => {
  const { output, setOutput } = useShadesContext();

  return (
    <Flex
      classNames={{
        root: cn.format__wrapper,
      }}
    >
      <FormatButton
        id="hex"
        value="hex"
        checked={output === "hex"}
        onChange={setOutput}
      >
        Hex
      </FormatButton>
      <FormatButton
        id="rgb"
        value="rgb"
        checked={output === "rgb"}
        onChange={setOutput}
      >
        RGB
      </FormatButton>
      <FormatButton
        id="hsl"
        value="hsl"
        checked={output === "hsl"}
        onChange={setOutput}
      >
        HSL
      </FormatButton>
    </Flex>
  );
};
