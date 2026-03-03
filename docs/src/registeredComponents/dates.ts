import DatePicker2 from '../components/DatePicker2';
import DateRangePicker from '../components/DateRangePicker';
import DateTimePicker from '../components/DateTimePicker';
import MonthPicker from '../components/MonthPicker';
import YearPicker from '../components/YearPicker';

const topCategory = 'dates';

export default [
  {
    component: DatePicker2,
    slug: 'datepicker2',
    name: 'DatePicker',
    topCategory,
  },
  {
    component: DateTimePicker,
    slug: 'datetimepicker',
    name: 'DateTimePicker',
    topCategory,
  },
  {
    component: MonthPicker,
    slug: 'monthpicker',
    name: 'MonthPicker',
    topCategory,
  },
  {
    component: YearPicker,
    slug: 'yearpicker',
    name: 'YearPicker',
    topCategory,
  },
  {
    component: DateRangePicker,
    slug: 'daterangepicker',
    name: 'DateRangePicker',
    topCategory,
  },
];
