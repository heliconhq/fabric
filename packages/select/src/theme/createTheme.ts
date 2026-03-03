import { ActiveTheme } from '@heliconhq/core/dist/types/theme';
import { defaultTheme } from 'react-select';

export default function createTheme({ layer }: ActiveTheme) {
  return {
    ...defaultTheme,
    colors: {
      ...defaultTheme.colors,
      primary: layer.palette.semantic.primary[700],
      primary25: layer.palette.neutrals[300],
      primary50: layer.palette.neutrals[400],
      primary75: layer.palette.semantic.primary[700],
      neutral0: layer.palette.contextual.field,
      neutral5: layer.palette.contextual.action,
      neutral10: layer.palette.contextual.action,
      neutral20: layer.palette.contextual.divider,
      neutral30: layer.palette.contextual.divider,
      neutral40: layer.palette.contextual.divider,
      neutral50: layer.palette.contextual.textMuted,
      neutral60: layer.palette.contextual.textMuted,
      neutral70: layer.palette.contextual.text,
      neutral80: layer.palette.contextual.text,
      neutral90: layer.palette.contextual.text,
      danger: layer.palette.semantic.negative.contrast,
      dangerLight: layer.palette.semantic.negative[700],
    },
  };
}
