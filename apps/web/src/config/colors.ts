type palette = [string, string, string, string];
type paletteSet = [palette, palette, palette, palette, palette, palette, palette];
export const MY_FAVOURITE_COLORS: paletteSet = [
  [
    "#547980",
    "#45ADA8",
    "#9DE0AD",
    "#E5FCC2",
  ],
  [
    "#AB93C9",
    "#D698B9",
    "#EDA1AB",
    "#FFBEA3"
  ],
  [
    "#547980",
    "#45ADA8",
    "#9DE0AD",
    "#E5FCC2"
  ],
  [
    "#4D606E",
    "#3FBAC2",
    "#D3D4D8",
    "#F5F5F5"
  ],
  [
    "#303A52",
    "#574B90",
    "#9E579D",
    "#FC85AE"
  ],
  [
    "#6E5773",
    "#D45D79",
    "#EA9085",
    "#E9E2D0"
  ],
  [
    "#A9EEE6",
    "#FEFAEC",
    "#F38181",
    "#625772"
  ],
]

function getRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const getColors = () => {
  const col = getRandomNumber(0, MY_FAVOURITE_COLORS.length - 1);
  return MY_FAVOURITE_COLORS[col] || MY_FAVOURITE_COLORS[0];
}

export const getColor = () => {
  const palette = getColors();
  const row = getRandomNumber(0, palette.length - 1)
  return palette[row];
}


