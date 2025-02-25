import { createVar, style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { SHADOWS } from '@/styles/box-shadows';
import { COLORS } from '@/styles/colors';
import { transition } from '@/styles/transitions';

export const activeBackground = createVar();
export const activeIconColor = createVar();

export const feedbackContainer = recipe({
  base: {
    display: 'flex',
    flexDirection: 'row',
    gap: '4px',
    borderRadius: '7px',
    padding: '2px',
    boxShadow: SHADOWS.Z1_Light,
    width: 'fit-content',
  },
  variants: {
    previousResponse: {
      true: {
        backgroundColor: COLORS.white,
      },
      false: {
        backgroundColor: 'transparent',
        boxShadow: 'none',
        gap: '6px',
      },
    },
  },
});

export const feedbackButtonStyles = recipe({
  base: {
    borderRadius: '5px',
    height: '24px',
    width: '24px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'none',
    backgroundColor: 'transparent',
    transition: transition(['background-color', 'color']),
    color: COLORS.NEUTRAL_DARK[100],
    selectors: {
      '&:hover': {
        backgroundColor: COLORS.NEUTRAL_DARK[9006],
        color: COLORS.NEUTRAL_DARK[600],
      },
      '&:active': {
        backgroundColor: COLORS.NEUTRAL_DARK[90012],
        color: COLORS.NEUTRAL_DARK[800],
      },
    },
  },
  variants: {
    isSelected: {
      true: {
        color: COLORS.ACCENT[500],
        selectors: {
          '&:hover': {
            backgroundColor: 'transparent',
            color: COLORS.ACCENT[500],
          },
          '&:active': {
            backgroundColor: 'transparent',
            color: COLORS.ACCENT[500],
          },
        },
      },
    },
    isCopied: {
      true: {
        selectors: {
          '&:hover': {
            backgroundColor: 'transparent',
            color: COLORS.NEUTRAL_DARK[100],
          },
        },
      },
    },
  },
});

export const iconStyle = style({
  flex: 'none',
});
