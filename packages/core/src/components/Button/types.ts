import { ReactNode } from 'react';
import type { IconName } from '../../icons';
import type {
  AppearanceValue,
  DesignValue,
  SizeValue,
} from '../../types/theme';

export type IconPosition = 'left' | 'right';

export type ButtonProps = {
  // Buttons come in three sizes with variying padding and font size.
  size?: SizeValue;
  appearance?: AppearanceValue;
  design?: DesignValue;
  // Dictates whether or not the button should span the entire width of the container.
  block?: boolean;
  // Reduced version of the button.
  slim?: boolean;
  // Adds icon by passing in icon name.
  icon?: IconName;
  // Positions the icon to the left or right of the button text.
  iconPosition?: IconPosition;
  // Highlight active or selected buttons
  active?: boolean;
  // Disabled buttons cannot trigger any actions and are semi-transparent.
  disabled?: boolean;
  // Disable the button and display a spinner in place of the button content
  // (the button retains its dimensions)
  isLoading?: boolean;
  children?: ReactNode;
  className?: string;
  // Custom element to use instead of the native `button`
  as?: React.ElementType;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};
