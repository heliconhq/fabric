import { ComponentProps } from 'react';

import style from '../../../utils/style';
import { Icon } from '../../Icon';
import { SizeValue } from '../../../types/theme';
import { Prettify } from '../../../types/helpers';

type StyleProps = Prettify<
  Pick<ComponentProps<typeof Icon>, 'icon'> & {
    iconPosition: 'left' | 'right';
    hasLabel: boolean;
  }
>;

type Props = StyleProps & {
  size: SizeValue;
};

const StyledButtonIcon = style(Icon)<StyleProps>({
  variants: {
    iconPosition: {
      right: ({ hasLabel }) => ({
        paddingLeft: hasLabel ? '0.4rem' : 0,
      }),
      left: ({ hasLabel }) => ({
        paddingRight: hasLabel ? '0.4rem' : 0,
      }),
    },
  },
});

const iconSizes = {
  small: '1.1rem',
  medium: '1.5rem',
  large: '1.6rem',
};

export default function ButtonIcon(props: Props) {
  return (
    <StyledButtonIcon
      size={iconSizes[props.size]}
      block={true}
      iconPosition={props.iconPosition}
      hasLabel={props.hasLabel}
      icon={props.icon}
    />
  );
}
