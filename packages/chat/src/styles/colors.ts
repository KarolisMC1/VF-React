import chroma from 'chroma-js';

// TODO: These shades don't match exactly the figma colors
// TODO: Need to sit with Mike about these.
export const createColorPalette = (primary: string) => ({
  50: chroma(primary).brighten(2.5).hex(),
  100: chroma(primary).brighten(2).hex(),
  200: chroma(primary).brighten(1.5).hex(),
  300: chroma(primary).brighten(1).hex(),
  400: chroma(primary).brighten(0.5).hex(),
  500: primary,
  600: chroma(primary).darken(0.5).hex(),
  700: chroma(primary).darken(1).hex(),
  800: chroma(primary).darken(1.5).hex(),
  900: chroma(primary).darken(2).hex(),
});

export const COLORS = {
  white: '#fff',
};
