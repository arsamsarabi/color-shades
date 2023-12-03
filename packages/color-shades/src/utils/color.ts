import Color from 'color';

const isDark = (color: string) => Color(color).isDark();
const isLight = (color: string) => Color(color).isLight();

export { isDark, isLight };
