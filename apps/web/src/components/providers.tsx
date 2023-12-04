'use client'

import type { PropsWithChildren } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { theme } from '@/styles/theme'
import { cssVariablesResolver } from '@/styles/variables'
import { MantineProvider } from '@mantine/core'
import { Notifications } from '@mantine/notifications'

export const Providers = ({ children }: PropsWithChildren<unknown>) => {
  return (
    <ErrorBoundary fallback={<p>Something went wrong.</p>}>
      <MantineProvider
        cssVariablesResolver={cssVariablesResolver}
        theme={theme}
      >
        {children}
        <Notifications />
      </MantineProvider>
    </ErrorBoundary>
  )
}
