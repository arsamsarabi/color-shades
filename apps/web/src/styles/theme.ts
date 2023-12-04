import { type MantineThemeOverride } from '@mantine/core'
import { BLACK, WHITE, colors } from './colors'
import { body, heading } from './fonts'

const themeOverrides: MantineThemeOverride = {
  white: WHITE,

  black: BLACK,

  breakpoints: {
    xs: '25.875em',
    sm: '48em',
    md: '64em',
    lg: '76.5em',
    xl: '90em',
  },

  colors: colors,

  primaryShade: {
    light: 4,
    dark: 7,
  },

  primaryColor: 'blue',
  /** Function to resolve colors based on variant.
   *  Can be used to deeply customize how colors are applied to `Button`, `ActionIcon`, `ThemeIcon`
   *  and other components that use colors from theme.
   * */

  // variantColorResolver: VariantColorsResolver;
  fontFamily: body.style.fontFamily,

  /** Monospace font-family, used in code and other similar components, system fonts by default  */
  // fontFamilyMonospace: string;

  headings: {
    fontFamily: heading.style.fontFamily,
    fontWeight: String(heading.style.fontWeight ?? 400),
  },

  /** Object of values that are used to set `border-radius` in all components that support it */
  // radius: MantineRadiusValues;

  /** Key of `theme.radius` or any valid CSS value. Default `border-radius` used by most components */
  defaultRadius: 'sm',

  /** Object of values that are used to set various CSS properties that control spacing between elements */
  // spacing: MantineSpacingValues;

  /** Object of values that are used to control `font-size` property in all components */
  // fontSizes: MantineFontSizesValues;

  /** Object of values that are used to control `line-height` property in `Text` component */
  // lineHeights: MantineLineHeightValues;

  /** Object of values that are used to control breakpoints in all components,
   *  values are expected to be defined in em
   * */
  // breakpoints: MantineBreakpointsValues;

  /** Object of values that are used to add `box-shadow` styles to components that support `shadow` prop */
  // shadows: MantineShadowsValues;

  respectReducedMotion: true,

  /** Determines which cursor type will be used for interactive elements
   * - `default` – cursor that is used by native HTML elements, for example, `input[type="checkbox"]` has `cursor: default` styles
   * - `pointer` – sets `cursor: pointer` on interactive elements that do not have these styles by default
   */
  cursorType: 'pointer',

  /** Default gradient configuration for components that support `variant="gradient"` */
  // defaultGradient: MantineGradient;

  /** Class added to the elements that have active styles, for example, `Button` and `ActionIcon` */
  // activeClassName: string;

  /** Class added to the elements that have focus styles, for example, `Button` or `ActionIcon`.
   *  Overrides `theme.focusRing` property.
   */
  // focusClassName: string;

  /** Allows adding `classNames`, `styles` and `defaultProps` to any component */
  // components: MantineThemeComponents;

  /** Any other properties that you want to access with the theme objects */
  // other: MantineThemeOther;
}

export const theme = themeOverrides
