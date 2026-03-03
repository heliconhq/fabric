import BarChart from '../components/Chart/Bar';
import BarGroupChart from '../components/Chart/BarGroup';
import BarSplitChart from '../components/Chart/BarSplit';
import BarStackChart from '../components/Chart/BarStack';
import LineChart from '../components/Chart/Line';
import LineBackgroundChart from '../components/Chart/LineBackground';
import AreaChart from '../components/Chart/Area';
import AreaFCRDChart from '../components/Chart/AreaFCRD';
import EventsTimelineChart from '../components/Chart/EventsTimeline';
import MixedChart from '../components/Chart/Mixed';
import PieChart from '../components/Chart/PieChart';

export default [
  {
    component: BarChart,
    slug: 'bar-chart',
    name: 'BarChart',
    topCategory: 'charts',
  },
  {
    component: BarGroupChart,
    slug: 'bar-group-chart',
    name: 'BarGroupChart',
    topCategory: 'charts',
  },
  {
    component: BarStackChart,
    slug: 'bar-stack-chart',
    name: 'BarStackChart',
    topCategory: 'charts',
  },
  {
    component: BarSplitChart,
    slug: 'bar-split-chart',
    name: 'BarSplitChart',
    topCategory: 'charts',
  },
  {
    component: LineChart,
    slug: 'line-chart',
    name: 'LineChart',
    topCategory: 'charts',
  },
  {
    component: LineBackgroundChart,
    slug: 'line-background-chart',
    name: 'LineBackgroundChart',
    topCategory: 'charts',
  },
  {
    component: AreaChart,
    slug: 'area-chart',
    name: 'AreaChart',
    topCategory: 'charts',
  },
  {
    component: AreaFCRDChart,
    slug: 'area-fcrd-chart',
    name: 'AreaFCRDChart',
    topCategory: 'charts',
  },
  {
    component: EventsTimelineChart,
    slug: 'events-timeline-chart',
    name: 'Events Timeline Chart',
    topCategory: 'charts',
  },
  {
    component: MixedChart,
    slug: 'chart',
    name: 'MixedChart',
    topCategory: 'charts',
  },
  {
    component: PieChart,
    slug: 'pie-chart',
    name: 'Pie Chart',
    topCategory: 'charts',
  },
];
