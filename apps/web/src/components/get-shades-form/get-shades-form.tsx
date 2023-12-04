'use client'

import { getColors } from '@/config/colors'
import { useShadesStore } from '@/stores/shades-store'
import { ColorInput, Flex, Group } from '@mantine/core'
import { ColorFormatPicker } from '../color-format-picker'

export const GetShadesForm = () => {
  const { color, setColor, output } = useShadesStore()
  const swatch = getColors()

  const handleChange = (value: string) => {
    setColor(value)
  }

  return (
    <Flex w="100%">
      <Flex
        gap={0}
        justify="flex-start"
        w="100%"
      >
        <ColorInput
          fixOnBlur
          format={output}
          onChange={handleChange}
          radius={0}
          required
          size='md'
          swatches={swatch}
          value={color}
          withPreview={false}
        />
        <ColorFormatPicker />
      </Flex>
    </Flex>
  )
}
