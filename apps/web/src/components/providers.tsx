'use client';

import { MantineProvider } from '@mantine/core';
import type { PropsWithChildren } from 'react';
import { theme } from '@/styles/theme';
import { cssVariablesResolver } from '@/styles/variables';
import { ContextProvider } from '@/context/context-provider';

export const Providers = ({ children }: PropsWithChildren<unknown>) => {
  return (
    <ContextProvider>
      <MantineProvider cssVariablesResolver={cssVariablesResolver} theme={theme}>
        {children}
      </MantineProvider>
    </ContextProvider>
  );
};
