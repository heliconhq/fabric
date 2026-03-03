import { useState } from 'react';

import BasePicker from './BasePicker';

import {
  DatePickerHeader,
  MonthPickerHeader,
  YearPickerHeader,
} from './Header';

type Props = React.ComponentProps<typeof BasePicker> & {
  selected: Date;
  inline?: boolean;
  date?: Date;
  block?: boolean;
};

type HeaderProps = {
  date: Date;
  increaseYear: () => void;
  decreaseYear: () => void;
  increaseMonth: () => void;
  decreaseMonth: () => void;
};

export default function DatePicker(props: Props) {
  const [pickMonth, setPickMonth] = useState(
    props.showMonthYearPicker || false
  );
  const [pickYear, setPickYear] = useState(props.showYearPicker || false);
  const [openToDate, setOpenToDate] = useState<Date | null>(null);

  // There's something interesting going on here. We can't use
  // YearPicker/MonthPicker here ... the next popper doesn't open
  // automatically. It only works if we use BasePicker.

  if (pickYear) {
    const extra = props.showYearPicker && { ...props };

    return (
      <BasePicker
        shouldCloseOnSelect={props.showYearPicker ?? false}
        allowSameDay
        selected={props.selected}
        inline={props.inline}
        renderCustomHeader={({
          increaseYear,
          decreaseYear,
          date,
          ...headerProps
        }: HeaderProps) => (
          <YearPickerHeader
            {...headerProps}
            maxDate={props.maxDate}
            minDate={props.minDate}
            date={date}
            onIncrease={increaseYear}
            onDecrease={decreaseYear}
            itemNumber={props.yearItemNumber}
          />
        )}
        showYearPicker
        openToDate={openToDate ?? undefined}
        onSelect={(date) => {
          setOpenToDate(date as Date);
          if (!props.showYearPicker) {
            setPickYear(false);
          }
        }}
        maxDate={props.maxDate}
        minDate={props.minDate}
        yearItemNumber={props.yearItemNumber}
        {...extra}
      />
    );
  }

  if (pickMonth) {
    const extra = props.showMonthYearPicker && { ...props };
    return (
      <BasePicker
        shouldCloseOnSelect={props.showMonthYearPicker ?? false}
        allowSameDay
        selected={props.selected}
        inline={props.inline}
        renderCustomHeader={({
          increaseYear,
          decreaseYear,
          date,
          ...headerProps
        }: HeaderProps) => (
          <MonthPickerHeader
            {...headerProps}
            date={date}
            maxDate={props.maxDate}
            minDate={props.minDate}
            onIncrease={increaseYear}
            onDecrease={decreaseYear}
            onClickNextLevel={setPickYear}
          />
        )}
        showMonthYearPicker
        openToDate={openToDate ?? undefined}
        onSelect={(date) => {
          setOpenToDate(date as Date);
          if (!props.showMonthYearPicker) {
            setPickMonth(false);
          }
        }}
        maxDate={props.maxDate}
        minDate={props.minDate}
        {...extra}
      />
    );
  }

  return (
    <BasePicker
      renderCustomHeader={({
        increaseMonth,
        decreaseMonth,
        date,
        ...headerProps
      }: HeaderProps) => (
        <DatePickerHeader
          {...headerProps}
          date={date}
          maxDate={props.maxDate}
          minDate={props.minDate}
          onIncrease={increaseMonth}
          onDecrease={decreaseMonth}
          onClickNextLevel={setPickMonth}
        />
      )}
      onSelect={() => setPickMonth(false)}
      openToDate={openToDate ?? undefined}
      dateFormat="yyyy/MM/dd"
      {...props}
    />
  );
}
