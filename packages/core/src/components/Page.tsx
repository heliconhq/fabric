import { ReactNode } from 'react';
import style from '../utils/style';

import { useAppState, Offset, Direction } from '../hooks/useAppState';

import SwitchLayer from './SwitchLayer';

type Props = {
  children?: ReactNode;
  /**
   * Allow pages to grow extra wide.
   */
  wide?: boolean;
  /**
   * Removes page padding.
   */
  compact?: boolean;
  layer?: string;
};

type StyledPageWrapperProps = {
  offsets: Offset;
};

type StyledPageProps = {
  offsets: Offset;
  compact: boolean;
  wide: boolean;
};

const addOffset = (
  allOffsets: Offset,
  direction: Direction,
  omitPrefix = false
): string | number => {
  const offsets = allOffsets[direction];

  if (offsets.length === 0) {
    return 0;
  }

  if (offsets.length === 1) {
    return offsets[0].offset;
  }

  return `${omitPrefix ? '' : 'calc'}(${offsets
    .map(({ offset }) => offset)
    .join(' + ')})`;
};

const StyledPageWrapper = style('div')<StyledPageWrapperProps>({
  base: ({ theme, offsets }) => ({
    paddingLeft: addOffset(offsets, 'left'),
    paddingRight: addOffset(offsets, 'right'),
    paddingTop: addOffset(offsets, 'top'),
    paddingBottom: addOffset(offsets, 'bottom'),

    background: theme.layer.palette.contextual.background,
    color: theme.layer.palette.contextual.text,
  }),
});

const StyledPage = style('div')<StyledPageProps>({
  base: ({ theme, compact, wide, offsets }) => ({
    padding: compact ? 0 : theme.spacing.standard,
    maxWidth: wide ? 'none' : '80rem',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    minHeight: `calc(100vh - ${addOffset(offsets, 'top', true) || '0px'})`,
  }),
});

export default function Page({
  children,
  wide = false,
  compact = false,
  layer: layerName = 'default',
  ...props
}: Props) {
  const { offsets } = useAppState();

  return (
    <SwitchLayer layer={layerName}>
      {({ theme }) => (
        <StyledPageWrapper theme={theme} offsets={offsets} {...props}>
          <StyledPage
            theme={theme}
            wide={wide}
            compact={compact}
            offsets={offsets}
          >
            {children}
          </StyledPage>
        </StyledPageWrapper>
      )}
    </SwitchLayer>
  );
}
