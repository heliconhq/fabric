import { ReactNode, ComponentProps } from 'react';

import { useTheme } from '../../hooks';
import style from '../../utils/style';
import {
  ExtendedSizeValue,
  FontFamilyValue,
  HorizontalAlignmentValue,
  TextAppearanceValue,
  TextWeightValue,
} from '../../types/theme';

type Props = {
  children?: ReactNode;
  block?: boolean;
  size?: ExtendedSizeValue;
  family?: FontFamilyValue;
  align?: HorizontalAlignmentValue;
  appearance?: TextAppearanceValue;
  weight?: TextWeightValue;
} & ComponentProps<'div'>;

type StyleProps = {
  block: boolean;
  size: ExtendedSizeValue;
  family: FontFamilyValue;
  align: HorizontalAlignmentValue;
  appearance: TextAppearanceValue;
  weight: TextWeightValue;
};

const sizes = {
  xsmall: '0.8em',
  small: '0.9em',
  medium: '1.0em',
  large: '1.2em',
  xlarge: '1.4em',
};

const StyledText = style('span')<StyleProps>({
  base: ({ size, theme, align, appearance, family, weight, block }) => ({
    fontSize: sizes[size],
    fontFamily: theme.typography[family].family,
    fontWeight: theme.typography[family][weight],
    display: block ? 'block' : 'inline',
    textAlign: align,
    color: theme.layer.palette.contextual[appearance] as string,
    code: {
      display: 'inline-block',
      padding: '0.05rem 0.3rem',
      borderRadius: '0.2rem',
      background: theme.layer.palette.contextual.backgroundFaint,
      border: `1px solid ${theme.layer.palette.contextual.divider}`,
    },
    a: {
      color: theme.layer.palette.contextual.link,
    },
  }),
});

export default function Text({
  children,
  block = true,
  align = 'left',
  size = 'medium',
  appearance = 'text',
  family = 'normal',
  weight = 'normal',
  ...props
}: Props) {
  const { theme } = useTheme();

  return (
    <StyledText
      theme={theme}
      appearance={appearance}
      size={size}
      weight={weight}
      block={block}
      align={align}
      family={family}
      className="fabric--text"
      {...props}
    >
      {children}
    </StyledText>
  );
}
