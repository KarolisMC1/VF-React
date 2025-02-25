import type { MouseEventHandler } from 'react';
import { forwardRef } from 'react';

import { Icon } from '@/components/Icon';

import { carouselButton, rotate180 } from './carouselButtonStyles.css';

export interface CarouselButtonProps {
  /**
   * If true then the button will be visible, otherwise hidden.
   */
  visible: boolean;

  /**
   * Which direction the button should point.
   */
  direction: 'right' | 'left';

  /**
   * A click handler for the button.
   */
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

/**
 * A button used to scroll to the previous or next Card in a Carousel.
 */
export const CarouselButton = forwardRef<HTMLButtonElement, CarouselButtonProps>(
  ({ onClick, visible, direction }, ref) => (
    <button ref={ref} className={carouselButton({ visible, direction })} onClick={onClick}>
      <Icon svg="arrowRight" className={direction === 'left' ? rotate180 : ''} />
    </button>
  )
);
