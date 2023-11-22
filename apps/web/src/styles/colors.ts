import { getShades } from '@arsams/color-shades';

console.log(getShades({ color: 'rgb(132,149,97)' }));

export const colors = {
  avocado: [
    'rgb(230,234,223)',
    'rgb(206,213,192)',
    'rgb(181,191,160)',
    'rgb(157,170,129)',
    'rgb(132,149,97)', // Primary shade
    'rgb(106,119,78)',
    'rgb(79,89,58)',
    'rgb(53,60,39)',
    'rgb(26,30,19)',
    'rgb(13,15,10)',
  ],

  chalk: [
    'rgb(252,247,233)',
    'rgb(248,239,211)',
    'rgb(245,230,188)',
    'rgb(241,222,166)',
    'rgb(238,214,144)', // Primary shade
    'rgb(190,171,115)',
    'rgb(143,128,86)',
    'rgb(95,86,58)',
    'rgb(48,43,29)',
    'rgb(24,21,14)',
  ],

  rock: [
    'rgb(251,252,247)',
    'rgb(247,249,239)',
    'rgb(244,245,232)',
    'rgb(240,242,224)',
    'rgb(236,239,216)', // Primary shade
    'rgb(189,191,173)',
    'rgb(142,143,130)',
    'rgb(94,96,86)',
    'rgb(47,48,43)',
    'rgb(24,24,22)',
  ],

  grey: [
    'rgb(215,215,215)',
    'rgb(176,176,176)',
    'rgb(136,136,136)',
    'rgb(97,97,97)',
    'rgb(57,57,57)', // Primary shade
    'rgb(46,46,46)',
    'rgb(34,34,34)',
    'rgb(23,23,23)',
    'rgb(11,11,11)',
    'rgb(6,6,6)',
  ],

  celestial: [
    'rgb(219,236,247)',
    'rgb(183,217,238)',
    'rgb(146,198,230)',
    'rgb(110,179,221)',
    'rgb(74,160,213)', // Primary shade
    'rgb(59,128,170)',
    'rgb(44,96,128)',
    'rgb(30,64,85)',
    'rgb(15,32,43)',
    'rgb(15,32,43)',
  ],
} as const;

export type ThemeColors = typeof colors;

export const WHITE = colors.avocado[1];
export const BLACK = colors.avocado[8];
