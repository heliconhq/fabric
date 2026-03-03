import { extendTheme, processTheme } from '../utils';

import baseTheme from './base.theme';

export default processTheme(extendTheme(baseTheme, {
  name: 'default-light-theme',
  layers: {},
  config: {},
}));
