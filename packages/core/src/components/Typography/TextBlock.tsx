import { ReactNode } from 'react';
import style from '../../utils/style';

import Text from './Text';
import Container from '../Container';
import {
  ExtendedSizeValue,
  FontFamilyValue,
  MarginValue,
  HorizontalAlignmentValue,
  TextAppearanceValue,
} from '../../types/theme';

type Props = {
  children?: ReactNode;
  size?: ExtendedSizeValue;
  family?: FontFamilyValue;
  margin?: MarginValue;
  align?: HorizontalAlignmentValue;
  appearance?: TextAppearanceValue;
};

type StyledTextBlockProps = {
  align: HorizontalAlignmentValue;
  size: ExtendedSizeValue;
  margin: MarginValue;
};

const StyledTextBlock = style(Container)<StyledTextBlockProps>({
  base: ({ align }) => ({
    textAlign: align,
    lineHeight: '1.5',
  }),
});

export default function TextBlock({
  children,
  size = 'medium',
  family = 'normal',
  margin = 'reduced',
  align = 'left',
  appearance = 'text',
  ...props
}: Props) {
  return (
    <StyledTextBlock
      size={size}
      margin={margin}
      align={align}
      className="fabric--text-block"
    >
      <Text
        family={family}
        size={size}
        appearance={appearance}
        align={align}
        {...props}
      >
        {children}
      </Text>
    </StyledTextBlock>
  );
}
