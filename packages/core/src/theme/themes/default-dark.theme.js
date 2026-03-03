import { extendTheme, processTheme } from '../utils';

import baseTheme from './base.theme';

export default processTheme(
  extendTheme(baseTheme, {
    name: 'default-dark-theme',
    layers: {
      default: {
        base: '#222222',
        contrast: '#f8f8f8',
        colorSpace: 'lab',
        modifyContrast: 2,
        next: 'panel',
      },
      panel: {
        base: '#222222',
        contrast: '#f8f8f8',
        mix: 4,
        colorSpace: 'lab',
        modifyContrast: 2,
        next: 'default',
      },
      sidebar: {
        base: '#222222',
        contrast: '#f8f8f8',
        mix: 4,
        colorSpace: 'lab',
        modifyContrast: 2,
        next: 'default',
      },
      navigation: {
        base: '#222222',
        contrast: '#f8f8f8',
        mix: 4,
        colorSpace: 'lab',
        modifyContrast: 2,
        next: 'default',
      },
    },
    config: {
      components: {
        input: {
          borders: true,
        },
        panel: {
          borders: false,
        },
        highlight: {
          themeName: 'vsDark',
        },
        editor: {
          themeName: 'twilight',
        },
      },
      external: {
        mapbox: 'mapbox://styles/gurraman/ck73up1yt1vsb1ip2cbf6e25i',
      },
    },
  })
);
