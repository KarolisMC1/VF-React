import { assignInlineVars } from '@vanilla-extract/dynamic';
import { useContext } from 'react';

import { RuntimeStateAPIContext } from '@/contexts';
import { createColorPalette } from '@/styles/colors';

import { activeBackground, activeIconColor, feedbackButtonStyles, iconStyle } from './FeedbackButton.css';
import type { IFeedbackButton } from './FeedbackButton.interface';
import { ThumbsDownIcon } from './ThumbsDownIcon.component';
import { ThumbsUpIcon } from './ThumbsUpIcon.component';

export const FeedbackButton: React.FC<IFeedbackButton> = ({ variant = 'up', active, onClick, testID }) => {
  const {
    assistant: { color },
  } = useContext(RuntimeStateAPIContext);
  const palette = createColorPalette(color);

  const buttonActiveColor = palette[500];
  const iconActiveColor = palette[50];
  const Icon = variant === 'up' ? ThumbsUpIcon : ThumbsDownIcon;

  return (
    <button
      className={feedbackButtonStyles({ isActive: !!active })}
      onClick={onClick}
      data-testid={testID}
      style={assignInlineVars({ [activeBackground]: buttonActiveColor, [activeIconColor]: iconActiveColor })}
    >
      <Icon width={24} height={24} className={iconStyle({ isActive: !!active })} />
    </button>
  );
};
