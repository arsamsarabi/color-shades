import type { CSSVariablesResolver } from '@mantine/core';

export const cssVariablesResolver: CSSVariablesResolver = ({
  colors,
  spacing,
}) => {
  const { avocado, chalk, rock, grey } = colors;

  if (!avocado || !chalk || !rock || !grey) {
    throw new Error('Invalid theme colors');
  }

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
