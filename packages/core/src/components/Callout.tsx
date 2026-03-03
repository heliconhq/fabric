import { ReactNode } from 'react';

import { useTheme } from '../hooks';
import { MarginValue, AppearanceValue, PaddingValue } from '../types/theme';
import style from '../utils/style';
import Title from './Typography/Title';

type Props = {
  children?: ReactNode;
  title?: string;
  margin?: MarginValue;
  padding?: PaddingValue;
  appearance?: AppearanceValue;
};

type StyleProps = {
  appearance: AppearanceValue;
  margin: string;
  padding: string;
};

const StyledCallout = style('div')<StyleProps>({
  base: ({ theme, appearance, padding, margin }) => ({
    padding,
    marginBottom: margin,
    borderRadius: theme.bevels.standard,
    background:
      appearance === 'neutral'
        ? theme.layer.palette.neutrals[100]
        : theme.layer.palette.semantic[appearance][100],
    '&, .fabric--text, .fabric--title .title-text': {
      color:
        appearance === 'neutral'
          ? theme.layer.palette.contextual.text
          : theme.layer.palette.semantic[appearance][1200],
    },
  }),
});

export default function Callout({
  children,
  appearance = 'primary',
  padding = 'reduced',
  margin = 'reduced',
  title,
  ...props
}: Props) {
  const { theme } = useTheme();
  const paddingValue = theme.spacing[padding];
  const marginValue = theme.spacing[margin];
  return (
    <StyledCallout
      theme={theme}
      appearance={appearance}
      margin={marginValue}
      padding={paddingValue}
      className="fabric--callout"
      {...props}
    >
      {typeof title !== 'undefined' && <Title level="h4">{title}</Title>}
      <div className="callout-content">{children}</div>
    </StyledCallout>
  );
}
