import React, { ReactNode } from 'react';
import style from '../utils/style';

import { useTheme } from '../hooks';
import { PaddingValue, ActiveTheme } from '../types/theme';

type Props = {
  children?: ReactNode;
  sizes?: Array<number>;
  gap?: PaddingValue;
  stretch?: boolean;
  vertical?: boolean;
};

type StyledProps = {
  vertical?: boolean;
  sizes?: Array<number>;
  gap: PaddingValue;
  stretch?: boolean;
  childCount?: number;
};

const gridSize = (size: string | number) => {
  if (!Number.isNaN(Number(size))) {
    return `minmax(0, ${size}fr)`;
  }

  return size;
};

const padSizes = (sizes: number[], n?: number) => {
  let padArray: string[] = [];
  if (n && n - sizes.length > 0) {
    padArray = Array(n - sizes.length).fill('minmax(0, 1fr)') as string[];
  }
  return [...sizes, ...padArray];
};

const gaps = (theme: ActiveTheme) => ({
  standard: theme.spacing.standard,
  reduced: theme.spacing.reduced,
  compact: theme.spacing.compact,
  minimal: theme.spacing.minimal,
  none: 0,
});

const StyledPane = style('div')<StyledProps>({
  base: ({ theme, stretch, gap, childCount, sizes, vertical }) => ({
    display: 'grid',
    marginBottom: theme.spacing.standard,

    '.fabric--pane > &': {
      marginBottom: '0',
    },
    gridGap: gaps(theme)[gap],
    alignItems: stretch ? 'stretch' : 'start',

    [vertical ? 'gridTemplateRows' : 'gridTemplateColumns']:
      typeof sizes !== 'undefined'
        ? padSizes(sizes, childCount).map(gridSize).join(' ')
        : `repeat(${childCount}, minmax(0, 1fr))`,
  }),
});

export default function Pane({
  children,
  sizes,
  gap = 'standard',
  stretch = false,
  vertical = false,
  ...props
}: Props) {
  const { theme } = useTheme();
  const childCount = React.Children.count(children);

  if (childCount === 0) {
    return null;
  }

  return (
    <StyledPane
      className={`fabric--pane fabric--pane-${
        vertical ? 'vertical' : 'horizontal'
      }`}
      theme={theme}
      gap={gap}
      childCount={childCount}
      sizes={sizes}
      vertical={vertical}
      stretch={stretch}
      {...props}
    >
      {children}
    </StyledPane>
  );
}
