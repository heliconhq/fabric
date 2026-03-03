import { ReactNode } from 'react';

import style from '../utils/style';

import { useTheme } from '../hooks';
import { MarginValue } from '../types/theme';

type StyledProps = {
  margin: MarginValue;
};
const StyledSection = style('div')<StyledProps>({
  base: ({ theme, margin }) => ({
    marginBottom: `calc(${theme.spacing[margin] ?? margin} * 2)`,
    '&:last-child': {
      marginBottom: '0',
    },
  }),
});

type Props = {
  children?: ReactNode;
  margin?: MarginValue;
};

export default function Section({
  children,
  margin = 'standard',
  ...props
}: Props) {
  const { theme } = useTheme();
  return (
    <StyledSection
      className="fabric--section"
      theme={theme}
      margin={margin}
      {...props}
    >
      {children}
    </StyledSection>
  );
}
