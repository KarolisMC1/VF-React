import TextareaAutosize from 'react-textarea-autosize';

import { CSS, styled } from '@/styles';

export const textareaUniqueStyles: CSS = {
  width: 'calc(100% - 42px)',
  borderRadius: '$1 0 0 $1',
  height: `42px`,
  borderRightWidth: 0,
};

export const textareaStyles: CSS = {
  boxSizing: 'border-box',
  border: '1px solid rgba(115,115,118,0.3)',
  backgroundColor: '$white',
  boxShadow: '0 1px 12px $shadow2',
  trans: ['border-color'],
  resize: 'none',
};

export const textareaFocusStyles: CSS = {
  border: '1px solid rgba(115,115,118,0.5)',
};

export const Container = styled(TextareaAutosize, {
  ...textareaStyles,
  ...textareaUniqueStyles,
  // TODO use tokens
  padding: '12px $4',
  color: '$black',

  '&:focus': {
    ...textareaFocusStyles,
    ...textareaUniqueStyles,
    outline: 'none',
  },

  '&::placeholder': {
    color: '$darkGrey',
  },
});
