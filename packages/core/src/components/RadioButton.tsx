import { ReactNode } from 'react';
import style from '../utils/style';

import { useTheme } from '../hooks';
import { MarginValue, LeftRightAlignmentValue } from '../types/theme';
import ToggleBase from './ToggleBase';

type Props = {
  label?: ReactNode;
  checked?: boolean;
  disabled?: boolean;
  alignLabel?: LeftRightAlignmentValue;
  margin?: MarginValue;
  inline?: boolean;
  name?: string;
  value?: string | number;
  onClick?: () => void;
};

type StyleProps = {
  disabled: boolean;
};

const InputControl = style('div')<StyleProps>({
  base: ({ theme }) => ({
    display: 'flex',
    placeItems: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: '18px',
    height: '18px',
    borderRadius: '50%',
    border: `1px solid ${theme.layer.palette.contextual.border}`,
    background: theme.layer.palette.contextual.field,

    '&:before': {
      display: 'block',
      content: "''",
      width: '8px',
      height: '8px',
      borderRadius: '50%',
      background: theme.layer.palette.semantic.primary.contrast,
      transition: '180ms transform ease-in-out',
      transform: 'scale(0)',
    },

    'input:checked + &': {
      background: theme.layer.palette.semantic.primary[700],
      borderColor: theme.layer.palette.semantic.primary[700],
      color: theme.layer.palette.semantic.primary.contrast,

      '&:before': {
        transform: 'scale(1)',
      },
    },
  }),
  variants: {
    disabled: {
      true: ({ theme }) => ({
        background: theme.layer.palette.contextual.disabled,
      }),
    },
  },
});

export default function RadioButton({
  disabled = false,
  alignLabel = 'right',
  margin = 'compact',
  inline = false,
  ...props
}: Props) {
  const { theme } = useTheme();

  return (
    <ToggleBase
      margin={margin}
      inline={inline}
      disabled={disabled}
      alignLabel={alignLabel}
      className="fabric--radio-button"
      type="radio"
      {...props}
    >
      <InputControl theme={theme} disabled={disabled} />
    </ToggleBase>
  );
}
