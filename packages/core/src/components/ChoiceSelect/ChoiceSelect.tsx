import { useTheme } from '../../hooks';
import SelectContainer from './ChoiceSelectPartials/ChoiceContainer';
import Choice from './ChoiceSelectPartials/Choice';

type ChoiceItem = {
  label: string | number;
  value: string | number;
};

type Props<T extends ChoiceItem> = {
  block?: boolean;
  values: ChoiceItem[];
  value: T | undefined;
  minChildWidth?: string;
  isDisabled?: boolean;
} & (T extends ChoiceItem
  ? {
      onChange?: (choice: T) => void;
    }
  : {
      onChange?: (choice: ChoiceItem) => void;
    });

export default function ChoiceSelect<T extends ChoiceItem>({
  block = false,
  values = [],
  value: assignedValue = undefined,
  onChange,
  minChildWidth = '10rem',
  isDisabled,
  ...props
}: Props<T>) {
  const { theme, layer } = useTheme();

  return (
    <SelectContainer
      theme={theme}
      layer={layer}
      block={block}
      className="fabric--choice-select"
      minChildWidth={minChildWidth}
      aria-disabled={isDisabled}
      {...props}
    >
      {values.map(({ label, value }) => (
        <Choice
          theme={theme}
          layer={layer}
          className="fabric--choice-select-choice"
          key={value}
          selected={assignedValue?.value === value}
          onClick={() =>
            typeof onChange === 'function' && onChange({ label, value })
          }
          minChildWidth={minChildWidth}
          block={block}
        >
          {label}
        </Choice>
      ))}
    </SelectContainer>
  );
}
