import chroma, { InterpolationMode } from 'chroma-js';
import { APCAcontrast, sRGBtoY } from 'apca-w3';
import {
  PartialTheme,
  Semantic,
  DefinitiveBaseColors,
  Definitive,
  HexColor,
  ActiveTheme,
  ColorRange,
  BevelValue,
} from '../types/theme';

type Tone = [number, number, boolean];
type possibleThemeProp = object | undefined | string | number;

const TONES: Tone[] = [
  [100, 92, false],
  [200, 82, false],
  [300, 72, false],
  [400, 62, false],
  [500, 40, false],
  [600, 20, false],
  [700, 0, false],
  [800, 10, true],
  [900, 20, true],
  [1000, 40, true],
  [1100, 60, true],
  [1200, 72, true],
  [1300, 82, true],
];

const NEUTRALS = [
  [100, 4],
  [150, 6],
  [200, 8],
  [250, 10],
  [300, 12],
  [400, 16],
  [500, 20],
  [600, 30],
  [700, 40],
  [800, 50],
  [900, 60],
  [1000, 70],
  [1100, 80],
  [1200, 84],
  [1300, 88],
];

const isObject = (obj: possibleThemeProp) => !!obj && typeof obj === 'object';

type partOfThemeAndTheme<T extends keyof ActiveTheme, n extends string> = {
  [K in n]: keyof ActiveTheme[T];
} & {
  theme: ActiveTheme;
};

const handleMargin = ({
  margin = 'standard',
  theme,
}: partOfThemeAndTheme<'spacing', 'margin'>) => theme.spacing[margin] || margin;

const getBevel = (
  theme: ActiveTheme,
  {
    local,
    _component,
    _group,
    fallback = 'standard',
  }: {
    local?: BevelValue;
    _component?: unknown;
    _group?: unknown;
    fallback?: BevelValue;
  }
): string => {
  if (local && typeof theme.bevels[local] !== 'undefined') {
    return theme.bevels[local];
  }

  return theme.bevels[fallback];
};

const extendTheme = (base: object, theme: object) =>
  [...new Set([...Object.keys(base), ...Object.keys(theme)])].reduce(
    (acc, key) => {
      const baseValue = base[key] as possibleThemeProp;
      const themeValue = theme[key] as possibleThemeProp;

      if (isObject(baseValue) && isObject(themeValue)) {
        acc[key] = { ...extendTheme(baseValue, themeValue) };
      } else if (typeof themeValue !== 'undefined') {
        acc[key] = themeValue;
      } else {
        acc[key] = baseValue;
      }

      return acc;
    },
    {}
  );

const mix = (
  color1: HexColor,
  color2: HexColor,
  amount: number,
  colorspace?: InterpolationMode
) => chroma.mix(color1, color2, amount / 100, colorspace).hex();

const distance = (color1: HexColor, color2: HexColor) =>
  chroma.distance(color1, color2);

const isDark = (color: HexColor) => chroma(color).get('lab.l') < 70;

const bestContrast = (
  background: HexColor,
  color1: HexColor,
  color2: HexColor
) => {
  const contrast1 = chroma.contrast(background, color1);
  const contrast2 = chroma.contrast(background, color2);
  return contrast1 > contrast2 ? color1 : color2;
};

const contrastFallback = (
  background: HexColor,
  color1: HexColor,
  color2: HexColor
) => {
  const a = Math.abs(
    APCAcontrast(
      sRGBtoY(chroma(color1).rgb()),
      sRGBtoY(chroma(background).rgb())
    ) as number
  );
  const b = Math.abs(
    APCAcontrast(
      sRGBtoY(chroma(color2).rgb()),
      sRGBtoY(chroma(background).rgb())
    ) as number
  );
  return a > b ? color1 : color2;
};

const brighten = (color: HexColor, amount: number) =>
  chroma(color).brighten(amount).hex();

const darken = (color: HexColor, amount: number) =>
  chroma(color).darken(amount).hex();

const adjustContrast = (amount: number, mod: number, invert: boolean) => {
  if (amount === 0 || mod === 0) {
    return amount;
  }

  if (invert) {
    return Math.min(100, amount + mod);
  }

  return Math.max(0, amount - mod);
};

const generateContextualColors = (
  neutrals: ColorRange,
  semanticColors: Semantic
) => ({
  divider: neutrals[300],
  border: neutrals[300],

  disabled: neutrals[100],
  disabledText: neutrals[400],

  faded: neutrals[200],
  fadedText: neutrals[1100],

  selected: neutrals[200],

  backgroundMuted: neutrals[300],
  backgroundFaint: neutrals[100],

  neutral: neutrals[400],
  neutralHover: neutrals[500],

  field: neutrals[100],
  fieldHover: neutrals[200],
  fieldActive: semanticColors.primary[700],

  action: neutrals[200],
  actionHover: neutrals[300],
  actionActive: neutrals[400],
  actionText: neutrals[1100],

  hover: neutrals[100],
  active: neutrals[200],

  textMuted: neutrals[900],
  textFaint: neutrals[600],

  feature: semanticColors.primary[700],
  featureText: semanticColors.primary.contrast,

  link: semanticColors.primary[800],
  linkHover: semanticColors.primary[600],

  focus: semanticColors.primary[700],
  focusText: semanticColors.primary.contrast,

  card: neutrals[100],

  ...Object.entries(semanticColors).reduce(
    (acc, [name, colors]) => ({
      ...acc,
      [`${name}Text`]: colors[900],
      [`${name}TextMuted`]: colors[600],
      [`${name}TextFaint`]: colors[400],
    }),
    {}
  ),
});

const processTheme = (theme: PartialTheme) => ({
  ...theme,
  layers: Object.entries(theme.layers).reduce((acc, [key, baseLayerValue]) => {
    const {
      contrast,
      mix: mixAmount,
      colorSpace = 'rgb',
      next = key,
      modifyContrast = 0,
      black = '#181818',
      white = '#FFFFFF',
      config,
      border = false,
    } = baseLayerValue;

    const hasMixAmount = typeof mixAmount !== 'undefined';

    const base = hasMixAmount
      ? mix(baseLayerValue.base, contrast, mixAmount, colorSpace)
      : baseLayerValue.base;

    // Programatically generate a gray color if it does not already exist.
    const definitiveTargets: DefinitiveBaseColors = theme.palette.definitive;
    if (!('gray' in definitiveTargets)) {
      definitiveTargets.gray = mix(
        base,
        contrast,
        adjustContrast(50, modifyContrast, true),
        colorSpace
      );
    }

    const definitive: Definitive = Object.entries(definitiveTargets).reduce(
      (acc2, [colorName, colorValue]) => ({
        ...acc2,
        [colorName]: {
          contrast: contrastFallback(colorValue, white, black),
          ...TONES.reduce(
            (acc3, [suffix, amount, invert]) => ({
              ...acc3,
              [suffix]: mix(
                colorValue,
                invert ? contrast : base,
                adjustContrast(amount, modifyContrast, invert),
                colorSpace
              ),
            }),
            {}
          ),
        },
      }),
      {}
    ) as Definitive;

    const semantic: Semantic = Object.entries(theme.palette.semantic).reduce(
      (acc2, [colorName, colorValue]) => ({
        ...acc2,
        [colorName]: {
          contrast:
            (theme.config.overrides?.contrast?.palette?.semantic[
              colorName
            ] as string) ?? contrastFallback(colorValue, white, black),
          ...TONES.reduce(
            (acc3, [code, amount, invert]) => ({
              ...acc3,
              [code]: mix(
                colorValue,
                invert ? contrast : base,
                adjustContrast(amount, modifyContrast, invert),
                colorSpace
              ),
            }),
            {}
          ),
        },
      }),
      {}
    ) as Semantic;

    const neutrals = {
      ...NEUTRALS.reduce(
        (acc3, [code, amount]) => ({
          ...acc3,
          [code]: mix(
            base,
            contrast,
            adjustContrast(amount, modifyContrast, true),
            colorSpace
          ),
        }),
        {}
      ),
    };

    if (!('neutral' in semantic)) {
      semantic.neutral = definitive.gray;
    }
    const palette = {
      definitive,
      semantic,
      neutrals,
      contextual: {
        background: base,
        text: contrast,
        ...generateContextualColors(neutrals as ColorRange, semantic),
      },
    };

    return {
      ...acc,
      [key]: { next, config, palette, border },
    };
  }, {}),
});

export {
  mix,
  distance,
  isDark,
  bestContrast,
  contrastFallback,
  processTheme,
  extendTheme,
  brighten,
  darken,
  handleMargin,
  getBevel,
};
