"use client";

import { Button, ColorInput } from '@mantine/core';
import type { GetShadesInput } from '@arsams/color-shades';
import {
  IconColorPicker,
} from "@tabler/icons-react"
import { ColorFormatPicker } from '../color-format-picker';
import { getColors } from '@/config/colors';


const initialState: GetShadesInput = {
  color: '#547980',
  count: 10,
  mode: 'both',
  amount: 0.1,
  output: 'hex',
};

export const GetShadesForm = () => {
  const swatch = getColors();

  const handleChange = (value: string) => {
    console.log(value);
  }

  return (
    <div className="">
      <ColorInput
        closeOnColorSwatchClick={false}
        defaultValue={initialState.color}
        description=""
        descriptionProps={{}}
        disabled={false}
        disallowInput={false}
        // eyeDropperButtonProps={{}}
        // eyeDropperIcon={<IconColorPicker />}
        fixOnBlur={true}
        format="hex"
        leftSection={<ColorFormatPicker />}
        leftSectionProps={{}}
        leftSectionWidth={100}
        onChangeEnd={handleChange}
        radius={0}
        required={true}
        swatches={swatch}
      />
    </div>
  );
};
