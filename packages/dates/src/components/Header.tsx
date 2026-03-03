import { ReactNode } from 'react';
import { format, addYears, subYears, isBefore, isAfter, startOfYear, endOfYear, startOfMonth, endOfMonth, isEqual } from 'date-fns';

import { Button, Text } from '@heliconhq/core';

type Props = {
  date: Date;
  formatDate: (date: Date) => ReactNode;
  nextDisabled?: boolean;
  prevDisabled?: boolean;
  next: () => void;
  prev: () => void;
  onClickNextLevel?: (val: boolean) => void;
};

type PickerProps = {
  date: Date;
  onDecrease: () => void;
  onIncrease: () => void;
  prevButtonDisabled?: boolean;
  nextButtonDisabled?: boolean;
  onClickNextLevel?: (val: boolean) => void;
  minDate?: Date;
  maxDate?: Date;
  itemNumber?: number
};

const Header = ({
  date,
  formatDate,
  nextDisabled,
  prevDisabled,
  next,
  prev,
  onClickNextLevel,
}: Props) => (
  <div
    style={{
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    }}
  >
    <Button
      onClick={prev}
      disabled={prevDisabled}
      icon="chevron-left"
      design="text"
    />
    {onClickNextLevel ? (
      <Button onClick={() => onClickNextLevel(true)} design="text">
        {formatDate(date)}
      </Button>
    ) : (
      <Text size="small" weight="medium">
        {formatDate(date)}
      </Text>
    )}
    <Button
      onClick={next}
      disabled={nextDisabled}
      icon="chevron-right"
      design="text"
    />
  </div>
);

const DatePickerHeader = ({
  onDecrease,
  onIncrease,
  ...props
}: PickerProps) => {
  
  const prevButtonDisabled = props.minDate && (isBefore(startOfMonth(props.date),props.minDate) || isEqual(startOfMonth(props.date),props.minDate))
  const nextButtonDisabled = props.maxDate && (isAfter(endOfMonth(props.date),props.maxDate)|| isEqual(endOfMonth(props.date),props.maxDate))
  

  return(
  <Header
    formatDate={(val) => format(val, 'MMM, yyyy')}
    prevDisabled={prevButtonDisabled}
    nextDisabled={nextButtonDisabled}
    prev={onDecrease}
    next={onIncrease}
    {...props}
  />
)};

const MonthPickerHeader = ({
  onDecrease,
  onIncrease,
  ...props
}: PickerProps) => {
  const prevButtonDisabled = props.minDate && (isBefore(startOfYear(props.date),props.minDate) || isEqual(startOfYear(props.date),props.minDate))
  const nextButtonDisabled = props.maxDate && (isAfter(endOfYear(props.date),props.maxDate) || isEqual(endOfYear(props.date),props.maxDate))
  
  return (
  <Header
    formatDate={(val) => format(val, 'yyyy')}
    prevDisabled={prevButtonDisabled}
    nextDisabled={nextButtonDisabled}
    prev={onDecrease}
    next={onIncrease}
    {...props}
  />
)};

const YearPickerHeader = ({
  onDecrease,
  onIncrease,
  itemNumber,
  ...props
}: PickerProps) => {
  const offset = Number(format(props.date, 'yyyy')) % (itemNumber || 12) || (itemNumber || 12);
  const endOffset = (itemNumber ||12) - offset;
  
  const prevButtonDisabled = props.minDate && (isBefore(subYears(props.date,offset),props.minDate) || isEqual(subYears(props.date,offset),props.minDate))
  const nextButtonDisabled = props.maxDate && (isAfter(addYears(props.date,endOffset),props.maxDate) || isAfter(addYears(props.date,endOffset),props.maxDate))

  return (
    <Header
      formatDate={(val) => `${format(subYears(val, offset - 1), 'yyyy')} - ${format(
          addYears(val, endOffset),
          'yyyy'
        )}`}
      prevDisabled={prevButtonDisabled}
      nextDisabled={nextButtonDisabled}
      prev={onDecrease}
      next={onIncrease}
      {...props}
    />
  );
};

export { DatePickerHeader, MonthPickerHeader, YearPickerHeader };
export default Header;
