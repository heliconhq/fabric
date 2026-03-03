import { ReactNode } from 'react';

import style from '../utils/style';
import { SetLayer, PaddingValue, MarginValue } from '../types/theme';
import SwitchLayer from './SwitchLayer';

type Props = {
  children?: ReactNode;
  className?: string;
  layer: SetLayer;
  padding?: PaddingValue;
  margin?: MarginValue;
};

type StyleProps = {
  padding: PaddingValue;
  margin: MarginValue;
};

const StyledLayer = style('div')<StyleProps>({
  base: ({ theme, padding, margin }) => ({
    padding: theme.spacing[padding],
    marginBottom: theme.spacing[margin] || margin,
    background: theme.layer.palette.contextual.background,
    color: theme.layer.palette.contextual.text,
  }),
});

export default function Layer({
  layer = 'default',
  margin = 'none',
  padding = 'none',
  ...props
}: Props) {
  return (
    <SwitchLayer layer={layer}>
      <StyledLayer
        margin={margin}
        padding={padding}
        className="fabric--layer"
        {...props}
      />
    </SwitchLayer>
  );
}
