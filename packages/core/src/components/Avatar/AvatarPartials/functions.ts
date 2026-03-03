import {
  ActiveTheme,
  ColorRange,
  DefinitiveColorValue,
} from '../../../types/theme';

export const getInitials = (name: string | undefined) => {
  if (!name) {
    return '-';
  }
  const bits = name.trim().split(/\s+/);

  if (bits.length >= 2) {
    return `${bits[0][0]}${bits[bits.length - 1][0]}`.toUpperCase();
  }
  return bits[0][0].toUpperCase();
};

export const simpleHash = (s: string) => {
  /* eslint-disable no-bitwise */
  let hash = 0;
  for (let i = 0, len = s.length; i < len; i += 1) {
    const chr = s.charCodeAt(i);
    hash = (hash << 5) - hash + chr;
    hash |= 0;
  }
  return hash;
};

export const getColor = (
  theme: ActiveTheme,
  color: DefinitiveColorValue,
  initials: string
) => {
  if (color) {
    return theme.layer.palette.definitive[color];
  }

  const colorNames = Object.keys(theme.layer.palette.definitive).filter(
    (colorName) => colorName !== 'gray'
  );
  const hash = simpleHash(initials);
  const colorName = colorNames[hash % colorNames.length];
  return theme.layer.palette.definitive[colorName] as ColorRange;
};
