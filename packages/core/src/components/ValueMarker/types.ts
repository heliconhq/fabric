import {
  AppearanceValue,
  ExtendedSizeValue,
  LayerValue,
} from '../../types/theme';

export type StyledProps = {
  layer: LayerValue;
  appearance: AppearanceValue;
  size: ExtendedSizeValue;
  value?: string | number;
  rim?: boolean;
};
