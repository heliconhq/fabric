import DateSpanFormat from '../components/DateSpanFormat';
import ListItem from '../components/ListItem';
import Metric from '../components/Metric';
import PropList from '../components/PropList';
import PropTable from '../components/PropTable';
import Table from '../components/Table';

const category = 'datadisplay';
const topCategory = 'core';

export default [
  {
    component: PropTable,
    slug: 'proptable',
    name: 'PropTable',
    category,
    topCategory,
  },
  {
    component: DateSpanFormat,
    slug: 'date-span-format',
    name: 'DateSpanFormat',
    category,
    topCategory,
  },
  {
    component: PropList,
    slug: 'proplist',
    name: 'PropList',
    category,
    topCategory,
  },
  {
    component: Metric,
    slug: 'metric',
    name: 'Metric',
    category,
    topCategory,
  },
  {
    component: ListItem,
    slug: 'ListItem',
    name: 'ListItem',
    category,
    topCategory,
  },
  {
    component: Table,
    slug: 'table',
    name: 'Table',
    category,
    topCategory,
  },
];
