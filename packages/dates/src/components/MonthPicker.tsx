import { useState } from 'react';

import BasePicker from './BasePicker';
import { MonthPickerHeader, YearPickerHeader } from './Header';

type Props = {
  selected: Date;
  inline: boolean;
  date: Date;
};

type HeaderProps = {
  date: Date;
  increaseYear: () => void;
  decreaseYear: () => void;
  increaseMonth: () => void;
  decreaseMonth: () => void;
};

export default function MonthPicker(props: Props) {
  const [pickYear, setPickYear] = useState(false);
  const [openToDate, setOpenToDate] = useState<Date | null>(null);
  if (pickYear) {
    return (
      <BasePicker
        shouldCloseOnSelect={false}
        allowSameDay
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
        selected={props.selected}
        openToDate={openToDate ?? undefined}
        onSelect={(date) => {
          setOpenToDate(date as Date);
          setPickYear(false);
        }}
      />
    );
  }
  return (
    <BasePicker
      renderCustomHeader={({
        increaseYear,
        decreaseYear,
        date,
        ...headerProps
      }: HeaderProps) => (
        <MonthPickerHeader
          {...headerProps}
          date={date}
          onIncrease={increaseYear}
          onDecrease={decreaseYear}
          onClickNextLevel={setPickYear}
        />
      )}
      openToDate={openToDate ?? undefined}
      showMonthYearPicker
      dateFormat="MMMM yyyy"
      {...props}
    />
  );
}
