'use client';

import { MantineProvider } from '@mantine/core';
import type { PropsWithChildren } from 'react';
import { theme } from '~/styles/theme';
import { cssVariablesResolver } from '~/styles/variables';

export const Providers = ({ children }: PropsWithChildren<unknown>) => {
  return (
    <MantineProvider cssVariablesResolver={cssVariablesResolver} theme={theme}>
      {children}
    </MantineProvider>
  );
};
