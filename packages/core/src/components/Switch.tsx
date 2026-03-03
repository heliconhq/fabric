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
  onChange?: () => void;
};

const StyledSwitchHandle = style('div')({
  base: ({ theme }) => ({
    position: 'relative',
    background: theme.layer.palette.contextual.neutral,
    width: '1.8rem',
    height: '1rem',
    padding: '0.2rem 0',
    borderRadius: '.5rem',
    transition: 'background 100ms ease-in-out',
    overflow: 'hidden',

    '.fabric--switch:hover &': {
      background: theme.layer.palette.contextual.neutralHover,
    },

    '&:after': {
      display: 'block',
      content: '""',
      width: 'calc(1rem - 4px)',
      height: 'calc(1rem - 4px)',
      margin: '2px',
      borderRadius: '50%',
      background: theme.layer.palette.semantic.focus.contrast,
      position: 'absolute',
      top: 0,
      left: 0,
      transition: 'left 100ms ease-in-out',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.15)',
    },

    'input:checked + &': {
      background: `${theme.layer.palette.semantic.focus[700]} !important`,
      '&:after': {
        left: 'calc(100% - 1rem)',
      },
    },
  }),
});

export default function Switch({
  label,
  disabled = false,
  checked,
  alignLabel = 'right',
  margin = 'compact',
  inline = false,
  ...props
}: Props) {
  const { theme } = useTheme();

  return (
    <ToggleBase
      type="checkbox"
      margin={margin}
      inline={inline}
      disabled={disabled}
      alignLabel={alignLabel}
      className="fabric--switch"
      label={label}
      checked={checked}
      {...props}
    >
      <StyledSwitchHandle theme={theme} />
    </ToggleBase>
  );
}
