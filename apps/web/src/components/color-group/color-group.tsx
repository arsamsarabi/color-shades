'use client'

import { Flex } from '@mantine/core'
import { ColorCard } from '../color-card'
import cn from './color-group.module.css'

type ColorGroupProps = {
  colors: string[]
}

export const ColorGroup = ({ colors }: ColorGroupProps) => {
  return (
    <Flex classNames={{ root: cn.group__wrapper }} direction="column" gap={0}>
      {colors.map((color) => (
        <ColorCard color={color} key={color} />
      ))}
    </Flex>
  )
}
