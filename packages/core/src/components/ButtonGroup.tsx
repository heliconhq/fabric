import React, { ReactNode } from 'react';

import { AppearanceValue, DesignValue } from '../types/theme';

import { useTheme } from '../hooks';
import style from '../utils/style';

type Props = {
  appearance: AppearanceValue;
  design: DesignValue;
  vertical?: boolean;
  children?:
    | React.JSX.Element
    | React.JSX.Element[]
    | (({
        appearance,
        design,
      }: {
        appearance: AppearanceValue;
        design: DesignValue;
        block: boolean;
      }) => ReactNode);
};

type StyledButtonGroupProps = {
  direction: string;
  appearance: AppearanceValue;
  design: DesignValue;
};

const StyledButtonGroup = style('div')<StyledButtonGroupProps>({
  base: {
    display: 'flex',
    width: 'min-content',

    '& > .fabric--button': {
      borderRadius: 0,
    },
  },
  variants: {
    direction: {
      horizontal: ({ theme, design }) => ({
        flexDirection: 'row',
        '& > .fabric--button': {
          '&:first-of-type': {
            borderBottomLeftRadius: theme.bevels.reduced,
            borderTopLeftRadius: theme.bevels.reduced,
          },
          '&:last-of-type': {
            borderBottomRightRadius: theme.bevels.reduced,
            borderTopRightRadius: theme.bevels.reduced,
          },
          ...(design === 'outline' && {
            '&:not(:first-of-type)': {
              marginLeft: '-1px',
              '&:not(:hover)': {
                borderLeftColor: 'transparent',
              },
            },
          }),
          ...(design === 'regular' && {
            '&:not(:first-of-type)': {
              marginLeft: '1px',
            },
            '&:not(:last-of-type)': {
              borderRightWidth: 0,
            },
          }),
        },
      }),
      vertical: ({ theme, design }) => ({
        flexDirection: 'column',
        '& > .fabric--button': {
          '&:first-of-type': {
            borderTopLeftRadius: theme.bevels.reduced,
            borderTopRightRadius: theme.bevels.reduced,
          },
          '&:last-of-type': {
            borderBottomLeftRadius: theme.bevels.reduced,
            borderBottomRightRadius: theme.bevels.reduced,
          },
          '&:not(:last-of-type)': {
            borderBottom: 0,
          },
          ...(design === 'regular' && {
            '&:not(:first-of-type)': {
              marginTop: '1px',
            },
          }),
        },
      }),
    },
  },
});

const ButtonGroup = ({
  vertical,
  design = 'regular',
  appearance = 'neutral',
  children,
  ...props
}: Props) => {
  const { theme } = useTheme();

  return (
    <StyledButtonGroup
      direction={vertical ? 'vertical' : 'horizontal'}
      design={design}
      appearance={appearance}
      theme={theme}
      {...props}
    >
      {/* eslint-disable-next-line no-nested-ternary */}
      {children && typeof children !== 'function'
        ? Array.isArray(children)
          ? children.map((child, i) =>
              React.cloneElement(child as unknown as React.ReactElement, {
                design,
                appearance,
                block: vertical,
                key: i,
              })
            )
          : React.cloneElement(children as unknown as React.ReactElement, {
              design,
              appearance,
              block: vertical,
            })
        : children?.({ design, appearance, block: !!vertical })}
    </StyledButtonGroup>
  );
};

export default ButtonGroup;
