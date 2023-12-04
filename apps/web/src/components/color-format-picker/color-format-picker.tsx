'use client'

import { useShallow } from 'zustand/react/shallow'
import { FormatButton } from '@/components/format-button'
import { useShadesStore } from '@/stores/shades-store'
import { Flex } from '@mantine/core'
import cn from './styles.module.css'

export const ColorFormatPicker = () => {
  const { output, setOutput } = useShadesStore(
    useShallow((state) => ({
      output: state.output,
      setOutput: state.setOutput,
    }))
  )

  return (
    <Flex
      classNames={{
        root: cn.wrapper,
      }}
    >
      <FormatButton
        id="hex"
        value="hex"
        checked={output === 'hex'}
        onChange={setOutput}
      >
        Hex
      </FormatButton>
      <FormatButton
        id="rgb"
        value="rgb"
        checked={output === 'rgb'}
        onChange={setOutput}
      >
        RGB
      </FormatButton>
      <FormatButton
        id="hsl"
        value="hsl"
        checked={output === 'hsl'}
        onChange={setOutput}
      >
        HSL
      </FormatButton>
    </Flex>
  )
}
