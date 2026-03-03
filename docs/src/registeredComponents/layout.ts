import PageContent from '../components/PageContent';
import Container from '../components/Container';
import Grid from '../components/Grid';
import Pane from '../components/Pane';
import Section from '../components/Section';
import Spaced from '../components/Spaced';
import WrappingHorizontalLayout from '../components/WrappingHorizontalLayout';

const category = 'layout';
const topCategory = 'core';

export default [
  {
    component: Container,
    slug: 'container',
    name: 'Container',
    category,
    topCategory,
  },
  {
    component: PageContent,
    slug: 'pagecontent',
    name: 'PageContent',
    category,
    topCategory,
  },
  {
    component: Section,
    slug: 'section',
    name: 'Section',
    category,
    topCategory,
  },
  {
    component: Grid,
    slug: 'grid',
    name: 'Grid',
    category,
    topCategory,
  },
  {
    component: Spaced,
    slug: 'spaced',
    name: 'Spaced',
    category,
    topCategory,
  },
  {
    component: Pane,
    slug: 'pane',
    name: 'Pane (deprecate?)',
    category,
    topCategory,
  },
  {
    component: WrappingHorizontalLayout,
    slug: 'wrappinghorizontallayout',
    name: 'WrappingHorizontalLayout',
    category,
    topCategory,
  },
];
