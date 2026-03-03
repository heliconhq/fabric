import React, { ReactNode } from 'react';
import style from '../../utils/style';

import { useTheme } from '../../hooks';
import { AlignValue, MarginValue } from '../../types/theme';

type GridProps = {
  children?: ReactNode;
  gap?: MarginValue;
  margin?: MarginValue;
  align?: AlignValue;
  vertical?: boolean;
  columns?: number | string;
};

type styledGrid = {
  gap: MarginValue;
  margin: MarginValue;
  vertical?: boolean;
  cellCount?: number;
  columns: number | string;
  align: AlignValue;
};

const template = (value: number | string, cellCount?: number) => {
  if (typeof value === 'undefined') {
    return `repeat(${cellCount}, auto)`;
  }

  if (typeof value === 'number' || /^\d+$/.test(value)) {
    return `repeat(${value}, 1fr)`;
  }

  return value;
};

const StyledGrid = style('div')<styledGrid>({
  base: ({ theme, margin, vertical, columns, cellCount, gap, align }) => ({
    display: 'grid',
    marginBottom: theme.spacing[margin] || 0,
    gridAutoColumns: 'minmax(0, auto)',
    gridAutoRows: 'minmax(0, auto)',
    [vertical ? 'gridTemplateRows' : 'gridTemplateColumns']: template(
      columns,
      cellCount
    ),
    gridGap: theme.spacing[gap] || 0,
    alignItems: align,
    ...(align === 'stretch' && {
      '& > .fabric--cell > *': {
        height: '100%',
      },
    }),
  }),
});

export default function Grid({
  children,
  columns = 10,
  gap = 'standard',
  margin = 'standard',
  align = 'stretch',
  vertical = false,
  ...props
}: GridProps) {
  const { theme } = useTheme();
  const cellCount = React.Children.count(children);

  return (
    <StyledGrid
      className="fabric--grid"
      theme={theme}
      gap={gap}
      margin={margin}
      cellCount={cellCount}
      vertical={vertical}
      columns={columns}
      align={align}
      {...props}
    >
      {children}
    </StyledGrid>
  );
}
