import React, { ReactNode } from 'react';
import style from '../utils/style';

import { ProcessedTheme } from '../types/theme';
import { useTheme } from '../hooks';

type Props = {
  title: string;
  children: ReactNode;
}

type StyledProps = {
  theme?: ProcessedTheme
}

const StyledTitle = style('div')<StyledProps>({
  base: ({ theme }) => ({
    fontWeight: theme.typography.normal.medium,
  }),
});

const StyledTools = style('div')<StyledProps>({
  base: {
    display: 'flex',

    '> *:not(:first-of-type)': {
      marginLeft: '0.5rem',
    },
  },
});

const StyledHeader = style('div')<StyledProps>({
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

const PanelHeader = ({ title, children, ...props }: Props) => {
  const { theme } = useTheme();

  return (
    <StyledHeader className="fabric--panel-header" {...props}>
      <StyledTitle theme={theme}>{title}</StyledTitle>
      {React.Children.count(children) !== 0 && <StyledTools>{children}</StyledTools>}
    </StyledHeader>
  );
};

export default PanelHeader;
