'use client'

import { useShadesStore } from '@/stores/shades-store'
import { getShades } from '@arsams/color-shades'
import { Flex } from '@mantine/core'
import { ColorGroup } from '../color-group'
import cn from './color-grid.module.css'

export const ColorGrid = () => {
  const { color, amount, count, output, mode } = useShadesStore()

  const lightened = getShades({
    color,
    amount,
    count,
    output,
    mode: 'lighten',
  })
  const darkened = getShades({ color, amount, count, output, mode: 'darken' })
  const both = getShades({ color, amount, count, output, mode: 'both' })

  const isAll = mode === 'all'
  const isBoth = mode === 'both'
  const isLighten = mode === 'lighten'
  const isDarken = mode === 'darken'

  return (
    <Flex classNames={{ root: cn.grid__wrapper }} direction="column">
      {(isAll || isLighten) && <ColorGroup colors={lightened} />}
      {(isAll || isBoth) && <ColorGroup colors={both} />}
      {(isAll || isDarken) && <ColorGroup colors={darkened} />}
    </Flex>
  )
}
