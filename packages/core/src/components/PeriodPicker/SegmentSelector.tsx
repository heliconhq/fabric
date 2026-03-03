import { useCallback, useEffect, useMemo, useState } from 'react';

import { add } from 'date-fns/add';

import {
  format,
  isAfter,
  isBefore,
  startOfDay,
  endOfDay,
  startOfMonth,
  endOfMonth,
  startOfYear,
  endOfYear,
  isToday,
  isEqual,
  startOfHour,
  endOfHour,
} from 'date-fns';

import Button from '../Button';
import { Icon } from '../Icon';
import Text from '../Typography/Text';

import { DateRange, Period } from './PeriodPicker';

import style from '../../utils/style';
import { useTheme } from '../../hooks';

interface Props {
  period: Period;
  range: DateRange;
  minDate?: Date;
  maxDate?: Date;
  onChange: (range: DateRange) => void;
  isDisabled?: boolean;
  shortMonths?: boolean;
}

const Container = style('div')({
  base: ({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding: theme.spacing.minimal,
    paddingLeft: theme.spacing.compact,
    border: `1px solid ${theme.layer.palette.contextual.border}`,
    borderRadius: theme.bevels.reduced,
    cursor: 'default',

    '&[aria-disabled="true"]': {
      opacity: 0.75,
      pointerEvents: 'none',
    },
  }),
});

const Arrow = style(Button)({
  base: {
    padding: 0,
  },
});

const CurrentPeriod = style(Text)({
  base: ({ theme }) => ({
    marginRight: theme.spacing.minimal,
    whiteSpace: 'nowrap',
  }),
});

const getFormattedPeriods = (date: Date, shortMonths?: boolean) => ({
  hour: `${format(date, 'LLL dd HH:mm')}-${format(
    add(date, { hours: 1 }),
    'HH:mm'
  )}`,
  day: isToday(date)
    ? 'Today'
    : format(date, shortMonths ? 'LLL dd' : 'LLLL dd'),
  month: format(date, shortMonths ? 'LLL yyyy' : 'LLLL yyyy'),
  year: format(date, 'yyyy'),
});

const buildGetRange =
  (period: Period) =>
  (date?: Date): DateRange | null => {
    if (!date) {
      return null;
    }

    if (period === 'year') {
      return {
        startDate: startOfYear(date),
        endDate: endOfYear(date),
      };
    }

    if (period === 'month') {
      return {
        startDate: startOfMonth(date),
        endDate: endOfMonth(date),
      };
    }

    if (period === 'day') {
      return {
        startDate: startOfDay(date),
        endDate: endOfDay(date),
      };
    }
    return {
      startDate: startOfHour(date),
      endDate: endOfHour(date),
    };
  };

const SegmentSelector = ({
  range,
  period,
  minDate,
  maxDate,
  onChange,
  isDisabled,
  shortMonths,
}: Props) => {
  const { theme } = useTheme();
  const [referenceDate, setReferenceDate] = useState(() => range.startDate);

  const getRange = useCallback(buildGetRange(period), [period]);
  const referenceRange = useMemo(
    () => getRange(referenceDate),
    [getRange, referenceDate]
  );

  const minRange = getRange(minDate);
  const maxRange = getRange(maxDate);

  const isMin =
    !!minRange &&
    !!referenceRange &&
    isEqual(referenceRange.startDate, minRange.startDate);

  const isMax =
    !!maxRange &&
    !!referenceRange &&
    isEqual(referenceRange.endDate, maxRange.endDate);

  useEffect(() => {
    if (referenceRange) {
      onChange(referenceRange);
    }
  }, [referenceRange]);

  const changeDate = (isAdd: boolean) => {
    const updatedDate = add(referenceDate, {
      [`${period}s`]: isAdd ? 1 : -1,
    });

    const { startDate } = getRange(minDate) || {};
    const { endDate } = getRange(maxDate) || {};

    const isAfterPeriodMin = !startDate || !isBefore(updatedDate, startDate);
    const isBeforePriodMax = !endDate || !isAfter(updatedDate, endDate);

    const isWithinPeriodRange = isAfterPeriodMin && isBeforePriodMax;

    if (isWithinPeriodRange) {
      const isBeforeAbsoluteMin = minDate && isBefore(updatedDate, minDate);
      const isAfterAbsoluteMax = maxDate && isAfter(updatedDate, maxDate);

      if (isBeforeAbsoluteMin) {
        setReferenceDate(minDate);
        return;
      }

      if (isAfterAbsoluteMax) {
        setReferenceDate(maxDate);
        return;
      }

      setReferenceDate(updatedDate);
    }
  };

  const formattedPeriods = getFormattedPeriods(referenceDate, shortMonths);

  return (
    <Container theme={theme} aria-disabled={isDisabled}>
      <CurrentPeriod theme={theme}>{formattedPeriods[period]}</CurrentPeriod>
      <Arrow
        onClick={() => changeDate(false)}
        size="small"
        design="text"
        disabled={isMin}
        slim
      >
        <Icon icon="chevron-left" />
      </Arrow>
      <Arrow
        onClick={() => changeDate(true)}
        size="small"
        design="text"
        disabled={isMax}
        slim
      >
        <Icon icon="chevron-right" />
      </Arrow>
    </Container>
  );
};

export default SegmentSelector;
