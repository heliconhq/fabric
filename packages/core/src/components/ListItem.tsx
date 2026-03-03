import React, { ReactNode } from 'react';
import style from '../utils/style';

import { MarginValue } from '../types/theme';
import { useTheme } from '../hooks';

type Props = {
  children?: ReactNode;
  before?: ReactNode;
  after?: ReactNode;
  subTitle?: string;
  inline?: boolean;
  margin?: MarginValue;
};

type StyledProps = {
  subTitle?: string;
  margin?: MarginValue;
};

type StyledValueProps = {
  inline?: boolean;
};

type StyledSubTitleProps = {
  inline?: boolean;
};

const StyledListItem = style('div')<StyledProps>({
  base: ({ theme, margin }) => ({
    display: 'flex',
    alignItems: 'center',
    '&:not(:last-of-type)': {
      marginBottom: theme.spacing[margin || 'standard'],
    },
  }),
});

const StyledBefore = style('div')({
  base: {
    marginRight: '0.75rem',
  },
});

const StyledAfter = style('div')({
  base: {
    marginLeft: 'auto',
  },
});

const StyledValue = style('div')<StyledValueProps>({
  base: ({ inline }) => ({
    ...(inline && {
      display: 'flex',
      alignItems: 'center',
    }),
  }),
});

const StyledTitle = style('div')<StyledProps>({
  base: ({ theme }) => ({
    fontWeight: theme.typography.normal.medium,
  }),
});

const StyledSubTitle = style('div')<StyledSubTitleProps>({
  base: ({ theme, inline }) => ({
    ...(inline ? { marginLeft: '0.5rem' } : { marginTop: '0.2rem' }),
    fontSize: '0.9rem',
    color: theme.layer.palette.contextual.textMuted,
  }),
});

export default function ListItem({
  children,
  before,
  after,
  subTitle,
  inline = false,
  margin = 'standard',
  ...props
}: Props) {
  const { theme } = useTheme();

  return (
    <StyledListItem
      className="fabric--list-item"
      theme={theme}
      margin={margin}
      {...props}
    >
      {React.Children.count(before) > 0 && (
        <StyledBefore>{before}</StyledBefore>
      )}
      <StyledValue inline={inline}>
        <StyledTitle theme={theme}>{children}</StyledTitle>
        {React.Children.count(subTitle) > 0 && (
          <StyledSubTitle inline={inline} theme={theme}>
            {subTitle}
          </StyledSubTitle>
        )}
      </StyledValue>
      {React.Children.count(after) > 0 && <StyledAfter>{after}</StyledAfter>}
    </StyledListItem>
  );
}
