'use client'

import { useEffect, useState } from 'react'
import { isLight } from '@arsams/color-shades'
import { Space, darken, lighten } from '@mantine/core'
import { notifications } from '@mantine/notifications'
import cn from './color-card.module.css'
import { useShadesStore } from '@/stores/shades-store'
import { useShallow } from 'zustand/react/shallow'

const { card__wrapper } = cn

type ColorCardProps = {
  color: string
}

export const ColorCard = ({ color }: ColorCardProps) => {
  const [isServer, setIsServer] = useState(true)
  const { color: storeColor } = useShadesStore(
    useShallow((state) => ({
      color: state.color,
    }))
  )

  useEffect(() => {
    setIsServer(false)
  }, [])

  if (isServer) return null

  const isLightColor = isLight(color)
  const textColor = isLightColor
    ? 'var(--mantine-color-black)'
    : 'var(--mantine-color-white)'
  const ShadowColor = isLightColor
    ? darken(color, 0.2)
    : lighten(color, 0.2)
  
  

  const handleClick = () => {
    navigator.clipboard.writeText(color)

    notifications.show({
      title: '🌈',
      message: 'Color value copied to clipboard.',
      color,
      withBorder: true,
    })
  }

  return (
    <div
      className={card__wrapper}
      style={{
        backgroundColor: color,
        boxShadow: 'none',
        border: 'none',
        color: textColor,
      }}
      onClick={handleClick}
      role="button"
      aria-label="Copy color value to clipboard"
    >
      <p>{color}</p>
      <Space w="xs" />
    </div>
  )
}
