import { style } from '@heliconhq/core';
import { CSSProperties } from 'react';

export default style('pre')<{ styles: CSSProperties }>({
  base: ({ theme, styles }) => ({
    ...styles,
    padding: '1rem',
    lineHeight: '1.3',
    fontSize: '1.0rem',
    overflowX: 'scroll',
    fontFamily: theme.typography.monospace.family,
  }),
});
