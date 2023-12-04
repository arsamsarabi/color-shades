import type { PropsWithChildren } from 'react'
import { Toolbar } from '@/components/toolbar'
import { Flex } from '@mantine/core'
import cn from './styles.module.css'

export const Layout = ({ children }: PropsWithChildren<unknown>) => {
  return (
    <Flex
      direction="column"
      classNames={{
        root: cn.wrapper,
      }}
    >
      <Toolbar />
      <main className={cn.main}>{children}</main>
    </Flex>
  )
}
