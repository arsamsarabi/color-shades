const hexRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
export type HEX = string & { __brand: "HEX" };
export const isHex = (color: string): color is HEX => hexRegex.test(color);

const hexaRegex = /^#([A-Fa-f0-9]{8}|[A-Fa-f0-9]{4})$/;
export type HEXA = string & { __brand: "HEXA" };
export const isHexa = (color: string): color is HEXA => hexaRegex.test(color);
