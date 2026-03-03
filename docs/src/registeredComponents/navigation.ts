import BreadCrumbs from '../components/BreadCrumbs';
import HorizontalNavbar from '../components/HorizontalNavbar';
import NavLink from '../components/NavLink';
import Pagination from '../components/Pagination';
import Tabs from '../components/Tabs';
import VerticalNavbar from '../components/VerticalNavbar';

const category = 'navigation';
const topCategory = 'core';

export default [
  {
    component: NavLink,
    slug: 'navlink',
    name: 'NavLink',
    category,
    topCategory,
  },
  {
    component: BreadCrumbs,
    slug: 'breadcrumbs',
    name: 'Breadcrumbs',
    category,
    topCategory,
  },
  {
    component: Tabs,
    slug: 'tabs',
    name: 'Tabs',
    category,
    topCategory,
  },
  {
    component: HorizontalNavbar,
    slug: 'horizontalNavbar',
    name: 'HorizontalNavbar',
    category,
    topCategory,
  },
  {
    component: VerticalNavbar,
    slug: 'verticalNavbar',
    name: 'VerticalNavbar',
    category,
    topCategory,
  },
  {
    component: Pagination,
    slug: 'pagination',
    name: 'Pagination',
    category,
    topCategory,
  },
];
