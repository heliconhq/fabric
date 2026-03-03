import { ReactNode } from 'react';
import style from '../../utils/style';
import {
  MarginValue,
  TitleSizeValues,
  TextAppearanceValue,
} from '../../types/theme';
import { useTheme } from '../../hooks';
import TitleContainer from './TitlePartials/TitleContainer';

type Props = {
  children?: ReactNode;
  level?: TitleSizeValues;
  margin?: MarginValue;
  extra?: ReactNode;
  pretitle?: ReactNode;
  subtitle?: ReactNode;
  appearance?: TextAppearanceValue;
  text?: string;
};

const StyledExtra = style('div')({
  base: {
    marginLeft: 'auto',
    display: 'flex',
    alignItems: 'center',
    '> *:not(:first-of-type)': {
      marginLeft: '0.5rem',
    },
  },
});

const StyledPretitle = style('div')({
  base: ({ theme }) => ({
    marginBottom: '0.3rem',
    fontSize: '0.9rem',
    fontFamily: theme.typography.display.family,
    fontWeight: theme.typography.display.medium,
    color: theme.layer.palette.contextual.textFaint,
  }),
});

const StyledSubtitle = style('div')({
  base: ({ theme }) => ({
    marginTop: '0.3rem',
    fontSize: '0.9rem',
    color: theme.layer.palette.contextual.textMuted,
  }),
});

export default function Title({
  children,
  level = 'h2',
  margin = 'standard',
  extra,
  pretitle,
  subtitle,
  appearance = 'text',
  text,
  ...props
}: Props) {
  const { theme } = useTheme();

  return (
    <TitleContainer
      theme={theme}
      level={level}
      margin={margin}
      appearance={appearance}
      className="fabric--title"
      {...props}
    >
      <div>
        {pretitle && <StyledPretitle theme={theme}>{pretitle}</StyledPretitle>}
        <div className="title-text">{children ?? text}</div>
        {subtitle && <StyledSubtitle theme={theme}>{subtitle}</StyledSubtitle>}
      </div>
      {typeof extra !== 'undefined' && <StyledExtra>{extra}</StyledExtra>}
    </TitleContainer>
  );
}
