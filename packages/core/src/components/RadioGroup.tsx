import { MarginValue } from '../types/theme';
import style from '../utils/style';
import RadioButton from './RadioButton';

type Option = {
  value: string | number;
  label: string;
};

type Direction = 'row' | 'row-reverse' | 'column' | 'column-reverse';

type RadioGroupProps = {
  name: string;
  options: Option[];
  direction: Direction;
  spacing: MarginValue;
  selected: Option['value'];
  onSelect: (option: Option) => void;
};

type StyleProp = {
  direction: Direction;
  spacing: MarginValue;
};

const StyledRadioGroup = style('div')<StyleProp>({
  base: ({ direction, spacing, theme }) => ({
    display: 'flex',
    flexDirection: direction,
    gap: theme.spacing[spacing],
  }),
});

export default function RadioGroup({
  name,
  options,
  direction = 'column',
  spacing = 'none',
  selected,
  onSelect,
}: RadioGroupProps) {
  return (
    <StyledRadioGroup spacing={spacing} direction={direction}>
      {options.map((opt) => (
        <RadioButton
          key={opt.value}
          name={name}
          value={opt.value}
          label={opt.label}
          checked={opt.value === selected}
          onClick={() => onSelect(opt)}
        />
      ))}
    </StyledRadioGroup>
  );
}
