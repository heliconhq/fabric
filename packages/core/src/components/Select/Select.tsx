import { ChangeEvent, ReactNode, forwardRef } from 'react';
import ExpandMore from '../../icons/ExpandMore';
import { useTheme } from '../../hooks';
import SelectWrapper from './SelectPartials/SelectWrapper';
import StyledSelect from './SelectPartials/StyledSelect';
import Option from './SelectPartials/Option';

export type Props = {
  children?: ReactNode;
  disabled?: boolean;
  block?: boolean;
  value?: string | number;
  options?: { label: string | number; value: string | number }[];
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
};

const Select = forwardRef<HTMLSelectElement, Props>(
  (
    { disabled, children, block = false, value = '', options, ...props }: Props,
    ref
  ) => {
    const { theme } = useTheme();
    return (
      <SelectWrapper theme={theme} block={block} disabled={!!disabled}>
        <StyledSelect
          theme={theme}
          disabled={disabled}
          block={block}
          value={value}
          ref={ref}
          {...props}
        >
          {typeof options === 'undefined'
            ? children
            : options.map((option) => (
                <Option key={option.value} value={option.value}>
                  {option.label}
                </Option>
              ))}
        </StyledSelect>
        <ExpandMore />
      </SelectWrapper>
    );
  }
);

Select.displayName = 'Select';
export default Select;
