import type { CSSVariablesResolver } from '@mantine/core';

export const cssVariablesResolver: CSSVariablesResolver = () => {
  return {
    variables: {
      // Header
      '--header-height': '80px',

      // Footer
      '--footer-height': '80px',

      // Content
      '--content-height': 'calc(100vh - var(--header-height))',
    },
    light: {},
    dark: {},
  };
};
