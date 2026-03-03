import DatePicker from './DatePicker';

type TimeProps = {
  value?: string | number | readonly string[] | undefined;
  onInputChange?: (value: string) => void;
};

type Props = TimeProps & React.ComponentProps<typeof DatePicker>;

const TimePicker = ({ value, onInputChange }: TimeProps) => (
  <input
    value={value}
    onChange={(e) => onInputChange && onInputChange(e.target.value)}
  />
);

export default function DateTimePicker(props: Props) {
  return (
    <DatePicker
      dateFormat="yyyy/MM/dd HH:mm"
      timeFormat="HH:mm"
      showTimeSelect
      customTimeInput={<TimePicker {...props} />}
      {...props}
    />
  );
}
