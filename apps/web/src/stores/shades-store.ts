import { create } from 'zustand'
import { getColor } from '@/config/colors'
import type { GetShadesInput } from '@arsams/color-shades'

export type Mode = 'all' | 'both' | 'lighten' | 'darken'
export type ShadesOutput = 'hex' | 'rgb' | 'hsl'

type ShadesStore = Omit<GetShadesInput, 'mode'> & {
  mode: Mode
  setAmount: (amount: number) => void
  setColor: (color: string) => void
  setCount: (count: number) => void
  setMode: (mode: Mode) => void
  setOutput: (output: ShadesOutput) => void
}

export const useShadesStore = create<ShadesStore>((set) => ({
  amount: 0.1,
  color: getColor(),
  count: 10,
  mode: 'both',
  output: 'hex',
  setAmount: (amount) => set((state) => ({ ...state, amount })),
  setColor: (color) => set((state) => ({ ...state, color })),
  setCount: (count) => set((state) => ({ ...state, count })),
  setMode: (mode) => set((state) => ({ ...state, mode })),
  setOutput: (output) => set((state) => ({ ...state, output })),
}))
