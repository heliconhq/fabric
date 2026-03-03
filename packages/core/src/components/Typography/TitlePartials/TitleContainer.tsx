import {
  ActiveTheme,
  ColorRange,
  MarginValue,
  TextAppearanceValue,
  TitleSizeValues,
} from '../../../types/theme';
import style from '../../../utils/style';

type StyledProps = {
  level: TitleSizeValues;
  margin?: MarginValue;
  appearance: TextAppearanceValue;
};

type abstractThemeType = {
  components: {
    title: {
      [level in TitleSizeValues]: {
        weight: string;
      };
    };
  };
};

const sizes: { [key in TitleSizeValues]: string } = {
  h1: '2.2em',
  h2: '1.8em',
  h3: '1.4em',
  h4: '1.1em',
  h5: '1.0em',
  h6: '0.9em',
};

const weights = {
  h1: 'bold',
  h2: 'medium',
  h3: 'medium',
  h4: 'medium',
  h5: 'medium',
  h6: 'medium',
};

const getColor = (theme: ActiveTheme, appearance: TextAppearanceValue) => {
  const color = theme?.layer?.palette?.semantic[appearance] as ColorRange;
  if (color && color[700]) {
    return color[700];
  }
  return theme.layer.palette.contextual[appearance] as string;
};

const getWeight = (theme: ActiveTheme, level: TitleSizeValues) => {
  const abstractTheme = theme as unknown as abstractThemeType;
  const weight =
    abstractTheme?.components?.title?.[level]?.weight ?? weights[level];

  return theme.typography.display[weight] as string;
};

export default style('div')<StyledProps>({
  base: ({ theme, margin, level, appearance }) => ({
    marginBottom: theme.spacing[margin ?? 'standard'],
    display: 'flex',
    alignItems: 'center',
    '.title-text': {
      fontFamily: theme.typography.display.family,
      fontSize: sizes[level || 'h1'],
      fontWeight: getWeight(theme, level),
      color: getColor(theme, appearance),
    },
  }),
});
