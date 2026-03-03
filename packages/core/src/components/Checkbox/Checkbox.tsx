import { ReactNode } from 'react';

import { MarginValue, LeftRightAlignmentValue } from '../../types/theme';
import ToggleBase from '../ToggleBase';

import { useTheme } from '../../hooks';
import CheckboxContainer from './CheckboxPartials/CheckboxContainer';
import Check from './CheckboxPartials/Check';

type Props = {
  label?: ReactNode;
  checked?: boolean;
  indeterminate?: boolean;
  disabled?: boolean;
  alignLabel?: LeftRightAlignmentValue;
  margin?: MarginValue;
  inline?: boolean;
  onClick?: () => void;
};

export default function Checkbox({
  label,
  disabled = false,
  checked,
  alignLabel = 'right',
  margin = 'compact',
  inline = false,
  indeterminate = false,
  ...props
}: Props) {
  const { theme } = useTheme();
  return (
    <ToggleBase
      margin={margin}
      inline={inline}
      disabled={disabled}
      alignLabel={alignLabel}
      className="fabric--checkbox"
      label={label}
      type="checkbox"
      checked={checked}
      ref={(input) => {
        if (input !== null) {
          // eslint-disable-next-line no-param-reassign
          input.indeterminate = !checked && indeterminate;
        }
      }}
      {...props}
    >
      <CheckboxContainer disabled={disabled} theme={theme}>
        <Check indeterminate={indeterminate} />
      </CheckboxContainer>
    </ToggleBase>
  );
}
