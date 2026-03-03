import Colors from '../pages/Colors';
import Components from '../pages/Components';
import Intro from '../pages/Intro';
import Layers from '../pages/Layers';
import Themes from '../pages/Themes';

const topCategory = 'overview';

export default [
  {
    component: Intro,
    slug: 'introduction',
    name: 'Introduction',
    topCategory,
  },
  {
    component: Components,
    slug: 'components',
    name: 'Writing components',
    topCategory,
  },
  {
    component: Themes,
    slug: 'theme-intro',
    name: 'Introduction',
    topCategory: 'themes',
  },
  {
    component: Layers,
    slug: 'layers',
    name: 'Layers',
    topCategory: 'themes',
  },
  {
    component: Colors,
    slug: 'color-system',
    name: 'Color system',
    topCategory: 'themes',
  },
];
