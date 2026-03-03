import { useState } from 'react';

import ChoiceSelect from '../ChoiceSelect';
import SegmentSelector from './SegmentSelector';
import style from '../../utils/style';
import { useTheme } from '../../hooks';

export type DateRange = {
  startDate: Date;
  endDate: Date;
};

export type Period = 'hour' | 'day' | 'month' | 'year';

export type PeriodChoice = {
  label: string;
  value: Period;
};

interface Props {
  range: DateRange;
  defaultPeriod: Period;
  minDate?: Date;
  maxDate?: Date;
  onChange: (updatedDateRange: DateRange, period: Period) => void;
  isDisabled?: boolean;
  periods?: Period[];
  shortMonths?: boolean;
}

const periodChoices: PeriodChoice[] = [
  { label: 'Hour', value: 'hour' },
  { label: 'Day', value: 'day' },
  { label: 'Month', value: 'month' },
  { label: 'Year', value: 'year' },
];

const Container = style('div')({
  base: ({ theme }) => ({
    display: 'grid',
    gridTemplateColumns: 'repeat(2, auto)',
    alignItems: 'center',
    gap: theme.spacing.reduced,
  }),
});

const PeriodSelector = style(ChoiceSelect<PeriodChoice>)({
  base: {
    alignItems: 'center',
    height: '100%',
    width: '100%',
    justifyContent: 'center',
  },
});

const PeriodPicker = ({
  range,
  defaultPeriod,
  minDate,
  maxDate,
  onChange,
  isDisabled = false,
  periods = ['day', 'month', 'year'],
  shortMonths = false,
}: Props) => {
  const [selectedPeriod, setSelectedPeriod] = useState(() => defaultPeriod);
  const { theme } = useTheme();

  const currentPeriodChoice = periodChoices.find(
    (period) => period.value === selectedPeriod
  );

  const filteredPeriodChoices = periodChoices.filter((period) =>
    periods.includes(period.value)
  );

  return (
    <Container theme={theme}>
      <SegmentSelector
        range={range}
        period={selectedPeriod}
        minDate={minDate}
        maxDate={maxDate}
        onChange={(updatedRange) => onChange(updatedRange, selectedPeriod)}
        isDisabled={isDisabled}
        shortMonths={shortMonths}
      />
      <PeriodSelector
        values={filteredPeriodChoices}
        value={currentPeriodChoice}
        onChange={(choice) => setSelectedPeriod(choice.value)}
        isDisabled={isDisabled}
      />
    </Container>
  );
};

export default PeriodPicker;
