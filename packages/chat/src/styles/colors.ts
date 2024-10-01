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

export const createPalette = (primary: string) => {
  const lightest = chroma(primary).brighten(2).hex(); // Lighten for accent50
  const darkest = chroma(primary).darken(2).hex(); // Darken for accent900
  const scale = chroma.scale([lightest, primary, darkest]).mode('rgb');

  return {
    50: lightest,
    100: scale(0.2).hex(),
    200: scale(0.3).hex(),
    300: scale(0.4).hex(),
    400: scale(0.5).hex(),
    500: primary,
    600: scale(0.6).hex(),
    700: scale(0.7).hex(),
    800: scale(0.8).hex(),
    900: scale(0.9).hex(),
  };
};

const NEUTRAL_DARK = {
  100: '#656D75',
  600: '#2B3239',
  900: '#1A1E23',
  9006: '#191D220F',
  90012: '#1A1E231F',
};

export const COLORS = {
  white: '#fff',
  NEUTRAL_DARK,
};
