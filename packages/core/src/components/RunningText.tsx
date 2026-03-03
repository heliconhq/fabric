import { ReactNode } from 'react';
import style from '../utils/style';

import { useTheme } from '../hooks';
import Container from './Container';
import { MarginValue } from '../types/theme';

type Props = {
  children?: ReactNode;
  margin?: MarginValue;
  // Limit width of container to ensure good readability.
  limitWidth?: boolean;
};

const StyledRunningText = style(Container)<Props>({
  base: ({ theme, limitWidth }) => ({
    lineHeight: '1.5',
    maxWidth: limitWidth ? '50rem' : 'none',

    '& pre, & code': {
      lineHeight: '1',
      display: 'inline-block',
      padding: '0 0.2rem',
      margin: '0 0.1rem',
      borderRadius: '0.2rem',
      background: theme.layer.palette.contextual.backgroundFaint,
      border: `1px solid ${theme.layer.palette.contextual.divider}`,
    },

    '& pre': {
      display: 'block',
      padding: '1rem',
      lineHeight: '160%',
      whiteSpace: 'pre',
      wordWrap: 'normal',
      overflow: 'auto',
    },

    // Headings

    '& h1, & h2, & h3, & h4, & h5, & h6': {
      marginTop: 'calc(1ex / 0.32)',
    },

    '& h1': {
      fontSize: '2.4rem',
      lineHeight: 'calc(1ex / 0.40)',
      marginBottom: 'calc(1ex / 0.62)',
      fontWeight: theme.typography.display.bold,
    },

    '& h2': {
      fontSize: '2em',
      lineHeight: 'calc(1ex / 0.62)',
      marginBottom: 'calc(1ex / 0.62)',
      fontWeight: theme.typography.display.medium,
    },

    '& h3': {
      fontSize: '1.75em',
      lineHeight: 'calc(1ex / 0.48)',
      marginBottom: 'calc(1ex / 0.48)',
      fontWeight: theme.typography.display.medium,
    },

    '& h4': {
      fontSize: '1.5em',
      lineHeight: 'calc(1ex / 0.47)',
      marginBottom: 'calc(1ex / 0.47)',
      fontWeight: theme.typography.display.medium,
    },

    '& h5': {
      fontSize: '1.2em',
      lineHeight: 'calc(1ex / 0.57)',
      marginBottom: 'calc(1ex / 0.57)',
      fontWeight: theme.typography.display.medium,
    },

    '& h6': {
      fontSize: '1.1em',
      lineHeight: 'calc(1ex / 0.52)',
      marginBottom: 'calc(1ex / 0.52)',
      fontWeight: theme.typography.display.medium,
      textTransform: 'uppercase',
    },

    // Misc

    '& a': {
      color: theme.layer.palette.contextual.link,
    },

    '& hr': {
      height: '1px',
      background: theme.layer.palette.contextual.divider,
    },

    // Blocks

    '> table, > pre, > p, > hr, > ol, > pre, > ul': {
      margin: 'calc(1ex / 0.32) 0',
    },

    // Lists and paragraphs

    '& p': {
      lineHeight: 'calc(1ex / 0.32)',
    },

    '& ul, & ol': {
      paddingLeft: '2rem',
    },

    '& li': {
      margin: 'calc(1ex / 0.82) 0',
    },

    '& li, & p': {
      fontSize: '1.1rem',
    },

    pre: {},

    '> *:first-of-type': {
      marginTop: '0',
    },

    '> *:last-child': {
      marginBottom: '0',
    },
  }),
});

export default function RunningText({
  children,
  limitWidth = true,
  margin = 'standard',
  ...props
}: Props) {
  const { theme } = useTheme();

  return (
    <StyledRunningText
      theme={theme}
      limitWidth={limitWidth}
      className="fabric--running-text"
      margin={margin}
      {...props}
    >
      {children}
    </StyledRunningText>
  );
}
