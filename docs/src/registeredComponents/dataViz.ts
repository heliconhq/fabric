import Bar from '../components/Bar';
import BinaryDonut from '../components/BinaryDonut';
import Donut from '../components/Donut';
import HorizontalBars from '../components/HorizontalBars';
import Sparkline from '../components/Sparkline';
import Viewer2d from '../components/Viewer2d';

const category = 'dataviz';
const topCategory = 'core';

export default [
  {
    component: Bar,
    slug: 'bar',
    name: 'Bar',
    category,
    topCategory,
  },
  {
    component: BinaryDonut,
    slug: 'binary-donut',
    name: 'BinaryDonut',
    category,
    topCategory,
  },
  {
    component: Donut,
    slug: 'donut',
    name: 'Donut',
    category,
    topCategory,
  },
  {
    component: Sparkline,
    slug: 'sparkline',
    name: 'Sparkline',
    category,
    topCategory,
  },
  {
    component: HorizontalBars,
    slug: 'horizontalbars',
    name: 'HorizontalBars',
    category,
    topCategory,
  },
  {
    component: Viewer2d,
    slug: 'viewer2d',
    name: 'Viewer2d',
    category,
    topCategory,
  },
];
