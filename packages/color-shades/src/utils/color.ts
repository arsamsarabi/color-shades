import Color from 'color';

const isDark = (color: string) => Color(color).isDark();
const isLight = (color: string) => Color(color).isLight();
const darken = (color: string, amount: number) => Color(color).darken(amount).hex().toString();
const lighten = (color: string, amount: number) => Color(color).lighten(amount).hex().toString();

export { isDark, isLight, darken, lighten };
