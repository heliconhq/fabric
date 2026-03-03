import { PropsWithChildren } from 'react';
import style from '../utils/style';

import { useTheme } from '../hooks';
import { PaddingValue } from '../types/theme';

type Props = {
  gap: PaddingValue;
  stretch?: boolean;
  minChildWidth: string;
}

const StyledWrappingHorizontalLayout = style('div')<Props>({
  base: ({
    theme,
    gap,
    minChildWidth,
    stretch,
  }) => ({
    display: 'grid',
    gridGap:  theme.spacing[gap],
    gridTemplateColumns: `repeat(auto-fit, minmax(${minChildWidth}, 1fr))`,
    marginBottom: theme.spacing.standard,
    alignItems: stretch ? 'stretch' : 'start',
  }),
});

export default function WrappingHorizontalLayout ({
  children,
  gap = "standard",
  stretch = false,
  minChildWidth = "10rem",
  ...props
}: PropsWithChildren<Props>) {
  const { theme } = useTheme();

  return (
    <StyledWrappingHorizontalLayout
      className="fabric--wrapping-horizontal-layout"
      theme={theme}
      gap={gap}
      stretch={stretch}
      minChildWidth={minChildWidth}
      {...props}
    >
      {children}
    </StyledWrappingHorizontalLayout>
  );
};
