# color-shades

## Installation

```shell
  pnpm add @arsams/color-shades
```

## Usage

```typescript
import { getShades, type GetShadesInput } from "@arsams/color-shades";

const shades = getShades({
  amount: 0.1, // number between 0 and 1 (default: 0.1)
  color: "#bada55", // base color
  count: 10, // number of shades (default: 10)
  mode: "both", // color mode (default: 'both') (lighten | darken | both)
  output: "hex", // output format (default: 'hex') (hex | hexa | rgb | rgba | hsl | hsla)
});

console.log(shades);

// [
//   "#e2f0b9",
//   "#d4e996",
//   "#c7e276",
//   "#bbdc5a",
//   "#bada55",
//   "#b0d53c",
//   "#a4ca2c",
//   "#94b628",
//   "#85a424",
//   "#789420",
// ]
```
