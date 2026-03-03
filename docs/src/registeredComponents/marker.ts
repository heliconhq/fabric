import DonutMarker from '../components/DonutMarker';
import IconMarker from '../components/IconMarker';
import PinMarker from '../components/PinMarker';
import PulseMarker from '../components/PulseMarker';
import ValueMarker from '../components/ValueMarker';

const category = 'markers';
const topCategory = 'core';

export default [
  {
    component: PulseMarker,
    slug: 'pulse-marker',
    name: 'PulseMarker',
    category,
    topCategory,
  },
  {
    component: ValueMarker,
    slug: 'value-marker',
    name: 'ValueMarker',
    category,
    topCategory,
  },
  {
    component: DonutMarker,
    slug: 'donut-marker',
    name: 'DonutMarker',
    category,
    topCategory,
  },
  {
    component: PinMarker,
    slug: 'pin-marker',
    name: 'PinMarker',
    category,
    topCategory,
  },
  {
    component: IconMarker,
    slug: 'icon-marker',
    name: 'IconMarker',
    category,
    topCategory,
  },
];
