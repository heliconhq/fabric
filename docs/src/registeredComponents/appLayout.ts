import Layout from '../components/Layout';
import LayoutContent from '../components/LayoutContent';

const category = 'core-layout';
const topCategory = 'core';

export default [
  {
    component: Layout,
    slug: 'layout',
    name: 'Layout',
    category,
    topCategory,
  },
  {
    component: LayoutContent,
    slug: 'layout-content',
    name: 'LayoutContent',
    category,
    topCategory,
  },
];
