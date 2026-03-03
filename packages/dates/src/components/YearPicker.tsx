import { ComponentProps } from 'react';
import BasePicker from './BasePicker';
import { YearPickerHeader } from './Header';

type HeaderProps = {
  date: Date;
  increaseYear: () => void;
  decreaseYear: () => void;
  increaseMonth: () => void;
  decreaseMonth: () => void;
};

export default function YearPicker(props: ComponentProps<typeof BasePicker>) {
  return (
    <BasePicker
      renderCustomHeader={({
        increaseYear,
        decreaseYear,
        date,
        ...headerProps
      }: HeaderProps) => (
        <YearPickerHeader
          {...headerProps}
          date={date}
          onIncrease={increaseYear}
          onDecrease={decreaseYear}
        />
      )}
      showYearPicker
      dateFormat="yyyy"
      {...props}
    />
  );
}
