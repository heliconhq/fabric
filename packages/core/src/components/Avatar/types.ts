import type {
  ColorRange,
  DefinitiveColorValue,
  ExtendedSizeValue,
} from '../../types/theme';

export type Props = {
  color?: DefinitiveColorValue;
  design?: 'round' | 'square';
  size?: ExtendedSizeValue;
  imageURL?: string;
  hasBorder?: boolean;
  name?: string;
};

export type StyleProps = Omit<Props, 'name'> & { colorRange: ColorRange };
