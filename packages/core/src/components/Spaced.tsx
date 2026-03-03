import { ComponentProps, ReactNode } from 'react';
import style from '../utils/style';

import { MarginValue } from '../types/theme';

type AlignmentValue = 'start' | 'end' | 'center';

type Props = {
  // Space the items vertically instead of horizontally (default).
  vertical?: boolean;
  // Amount of space between items.
  space?: MarginValue;
  // How to align the children.
  align?: AlignmentValue;
  // Items to space.
  children?: ReactNode;
} & ComponentProps<'div'>;

type StyleProps = {
  space: MarginValue;
  align: AlignmentValue;
  vertical: boolean;
};

const StyledSpaced = style('div')<StyleProps>({
  base: ({ theme, space, align }) => ({
    display: 'flex',
    alignItems: `flex-${align}`,
    gap: theme.spacing[space] || 0,
  }),
  variants: {
    vertical: {
      true: {
        flexDirection: 'column',
      },
    },
    align: {
      center: {
        alignItems: 'center',
      },
    },
  },
});

export default function Spaced({
  children,
  space = 'compact',
  align = 'center',
  vertical = false,
  ...props
}: Props) {
  return (
    <StyledSpaced
      className="fabric--spaced"
      space={space}
      align={align}
      vertical={vertical}
      {...props}
    >
      {children}
    </StyledSpaced>
  );
}
