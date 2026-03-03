import { ReactNode } from 'react';
import style from '../utils/style';

type Props = {
  children?: ReactNode;
  sidebar?: ReactNode;
  maximized?: boolean;
};

type StyledProps = {
  maximized?: boolean;
};

const StyledWrapper = style('div')<StyledProps>({
  base: ({ maximized }) => ({
    display: 'flex',
    height: maximized ? '100%' : 'auto',
  }),
});

const StyledContent = style('div')({
  base: {
    flex: '1 1 0',
    position: 'relative',
  },
});

const StyledSidebar = style('div')({
  base: {
    flex: '0 0 auto',
  },
});

export default function SplitPanel({
  children,
  maximized = false,
  sidebar,
}: Props) {
  return (
    <StyledWrapper maximized={maximized}>
      <StyledContent>{children}</StyledContent>
      <StyledSidebar>{sidebar}</StyledSidebar>
    </StyledWrapper>
  );
}
