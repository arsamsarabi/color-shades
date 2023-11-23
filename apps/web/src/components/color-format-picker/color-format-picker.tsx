"use client";

import { FormatButton } from "@/components/format-button";
import cn from "./styles.module.css"
import { useShadesContext } from "@/context/shades-context";

export const ColorFormatPicker = () => {
  const { output, setOutput } = useShadesContext();

  return (
    <div className={cn.wrapper}>
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
    </div>
  );
};
