import { ReactNode } from 'react';
import style from '../utils/style';
import { MarginValue } from '../types/theme';

type Props = {
  children: ReactNode;
  margin?: MarginValue;
  className?: string;
};

type StyledProps = {
  margin: MarginValue;
};

const StyledContainer = style('div')<StyledProps>({
  base: ({ theme, margin }) => ({
    marginBottom: theme.spacing[margin] ?? margin,
    '&:last-child': {
      marginBottom: '0',
    },
  }),
});

export default function Container({
  children,
  margin = 'standard',
  className = 'fabric--container',
  ...props
}: Props) {
  return (
    <StyledContainer className={className} margin={margin} {...props}>
      {children}
    </StyledContainer>
  );
}
