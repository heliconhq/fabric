import { ReactNode } from 'react';

import { useTheme } from '../hooks';
import { AppearanceValue, LayerValue } from '../types/theme';
import style from '../utils/style';

type Props = {
  children?: ReactNode;
  appearance?: AppearanceValue;
  className?: string;
};

type StyledProps = {
  layer: LayerValue;
  appearance: AppearanceValue;
};

const StyledBackdrop = style('div')<StyledProps>({
  base: ({ layer, appearance }) => ({
    background:
      appearance === 'neutral'
        ? layer.palette.contextual.action
        : layer.palette.semantic[appearance][700],
    color:
      appearance === 'neutral'
        ? layer.palette.contextual.actionText
        : layer.palette.semantic[appearance].contrast,
    '> *:last-child': {
      marginBottom: 0,
    },
  }),
});

export default function Backdrop({
  children,
  appearance = 'neutral',
  className,
  ...props
}: Props) {
  const { layer } = useTheme();

  return (
    <StyledBackdrop
      layer={layer}
      appearance={appearance}
      className={className}
      {...props}
    >
      {children}
    </StyledBackdrop>
  );
}
