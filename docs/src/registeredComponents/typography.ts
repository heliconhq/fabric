import TextBlock from '../components/TextBlock';
import Text from '../components/Text';
import Title from '../components/Title';
import RunningText from '../components/RunningText';

const category = 'typography';
const topCategory = 'core';

export default [
  {
    component: Title,
    slug: 'title',
    name: 'Title',
    category,
    topCategory,
  },
  {
    component: Text,
    slug: 'text',
    name: 'Text',
    category,
    topCategory,
  },
  {
    component: TextBlock,
    slug: 'textblock',
    name: 'TextBlock',
    category,
    topCategory,
  },
  {
    component: RunningText,
    slug: 'running-text',
    name: 'RunningText',
    category,
    topCategory,
  },
];
