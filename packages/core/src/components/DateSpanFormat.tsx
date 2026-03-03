import { isSameDay, isSameYear, format } from 'date-fns';
import Text from './Typography/Text';

type Props = {
  start: Date;
  end: Date;
};

const dateSpanFormat = (start: Date, end: Date) => {
  const startBits: string[] = [];
  startBits.push(format(start, 'p'));

  if (!isSameYear(start, end)) {
    startBits.push(format(start, 'PP'));
  } else if (!isSameDay(start, end)) {
    startBits.push(format(start, 'dd MMM'));
  }
  return `${startBits.join(' ')} - ${format(end, 'p PP')}`;
};

export default function DateSpanFormat({ start, end, ...props }: Props) {
  return (
    <Text className="fabric--date-span-format" {...props}>
      {dateSpanFormat(start, end)}
    </Text>
  );
}
