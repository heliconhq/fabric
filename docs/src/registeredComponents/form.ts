import Field from '../components/Field';
import Input from '../components/Input';
import Label from '../components/Label';
import PeriodPicker from '../components/PeriodPicker';
import RadioButton from '../components/RadioButton';
import RadioGroup from '../components/RadioGroup';
import Select from '../components/Select';
import Switch from '../components/Switch';
import TextArea from '../components/TextArea';
import TimeScrub from '../components/TimeScrub';
import ChoiceSelect from '../components/ChoiceSelect';
import Checkbox from '../components/Checkbox';

const category = 'forms';
const topCategory = 'core';

export default [
  {
    component: Checkbox,
    slug: 'checkbox',
    name: 'Checkbox',
    category,
    topCategory,
  },
  {
    component: ChoiceSelect,
    slug: 'choiceselect',
    name: 'ChoiceSelect',
    category,
    topCategory,
  },
  {
    component: Field,
    slug: 'field',
    name: 'Field',
    category,
    topCategory,
  },
  {
    component: Label,
    slug: 'label',
    name: 'Label',
    category,
    topCategory,
  },
  {
    component: Input,
    slug: 'input',
    name: 'Input',
    category,
    topCategory,
  },
  {
    component: PeriodPicker,
    slug: 'period-picker',
    name: 'PeriodPicker',
    category,
    topCategory,
  },

  {
    component: TextArea,
    slug: 'textarea',
    name: 'TextArea',
    category,
    topCategory,
  },
  {
    component: Select,
    slug: 'select',
    name: 'Select',
    category,
    topCategory,
  },
  {
    component: Switch,
    slug: 'switch',
    name: 'Switch',
    category,
    topCategory,
  },
  {
    component: RadioButton,
    slug: 'radiobutton',
    name: 'RadioButton',
    category,
    topCategory,
  },
  {
    component: RadioGroup,
    slug: 'radiogroup',
    name: 'RadioGroup',
    category,
    topCategory,
  },
  {
    component: TimeScrub,
    slug: 'time-scrub',
    name: 'TimeScrub',
    category,
    topCategory,
  },
];
