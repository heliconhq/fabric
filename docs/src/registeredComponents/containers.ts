import Layer from '../components/Layer';
import Panel from '../components/Panel';
import Sidebar from '../components/Sidebar';

const category = 'containers';
const topCategory = 'core';

export default [
  {
    component: Layer,
    slug: 'layer',
    name: 'Layer',
    category,
    topCategory,
  },
  {
    component: Panel,
    slug: 'panel',
    name: 'Panel',
    category,
    topCategory,
  },
  {
    component: Sidebar,
    slug: 'sidebar',
    name: 'Sidebar',
    category,
    topCategory,
  },
];
