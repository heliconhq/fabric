import { ComponentProps } from 'react';

import { SizeValue } from '../types/theme';
import style from '../utils/style';

// `Props` should be an intersection type that typically has its own members
// and all of the members of `ComponentProps` of the element that you will be
// passing `...props` to. This is usually the wrapping element.
type Props = {
  size?: SizeValue;
  color?: string;
  rounded?: boolean;
} & ComponentProps<'div'>;

// Pick what you need from the `Props` type and extend with props that aren't
// available.
type StyleProps = Pick<Props, 'size' | 'color' | 'rounded'> & {
  opacity: number;
};

// The styled component should be placed above the component and prefixed with
// `Styled`. We use the `style()` function that provides us with a convenient
// system for dealing with variants.
const StyledSquare = style('div')<StyleProps>({
  base: ({ color, size }) => ({
    width: size,
    height: size,
    background: color,
  }),
  variants: {
    rounded: {
      // The currently active theme is always available for use when styling.
      // There's typically no need to use `useTheme()` to access it.
      true: ({ theme }) => ({
        // Get to know what is available via the theme system and use that as
        // much as possible.
        borderRadius: theme.bevels.standard,
      }),
    },
  },
});
// Always provide sane defaults for optional props.
export default function Square({
  size = 'medium',
  color = 'red',
  rounded = false,
  ...props
}: Props) {
  return (
    <StyledSquare
      color={color}
      size={size}
      opacity={1.0}
      rounded={rounded}
      className="fabric--square"
      {...props}
    />
  );
}
