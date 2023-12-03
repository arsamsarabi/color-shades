"use client";

import { ColorInput, Flex } from "@mantine/core";
import { ColorFormatPicker } from "../color-format-picker";
import { getColors } from "@/config/colors";
import { useShadesContext } from "@/context/shades-context";

export const GetShadesForm = () => {
  const { color, setColor, output } = useShadesContext();
  const swatch = getColors();

  const handleChange = (value: string) => {
    setColor(value);
  };

  return (
    <Flex>
      <ColorInput
        closeOnColorSwatchClick={false}
        defaultValue={color}
        description=""
        descriptionProps={{}}
        disabled={false}
        disallowInput={false}
        fixOnBlur={true}
        format={output}
        onChangeEnd={handleChange}
        radius={0}
        required={true}
        swatches={swatch}
        value={color}
      />
      <ColorFormatPicker />
    </Flex>
  );
};
