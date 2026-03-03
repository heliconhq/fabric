import Dialog from '../components/Dialog';
import Modal from '../components/Modal';
import BaseModal from '../components/BaseModal';
import Drawer from '../components/Drawer';
import Menu from '../components/Menu';
import ModalPage from '../components/ModalPage';
import PopoverBase from '../components/PopoverBase';
import PageHeader from '../components/PageHeader';

const category = 'overlays';
const topCategory = 'core';

export default [
  {
    component: PageHeader,
    slug: 'page-header',
    name: 'PageHeader (deprecate?)',
    category,
    topCategory,
  },
  {
    component: BaseModal,
    slug: 'base-modal',
    name: 'BaseModal',
    category,
    topCategory,
  },
  {
    component: Drawer,
    slug: 'drawer',
    name: 'Drawer',
    category,
    topCategory,
  },
  {
    component: PopoverBase,
    slug: 'popover-base',
    name: 'PopoverBase',
    category,
    topCategory,
  },
  {
    component: Menu,
    slug: 'menu',
    name: 'Menu',
    category,
    topCategory,
  },
  {
    component: ModalPage,
    slug: 'modal-page',
    name: 'ModalPage',
    category,
    topCategory,
  },
  {
    component: Dialog,
    slug: 'dialog',
    name: 'Dialog',
    category,
    topCategory,
  },
  {
    component: Modal,
    slug: 'modal',
    name: 'Modal',
    category,
    topCategory,
  },
];
