export default {
  name: 'default-theme',
  typography: {
    baseSize: '15px',
    normal: {
      family: '"IBM Plex Sans", sans-serif',
      thin: 300,
      normal: 400,
      medium: 500,
      bold: 600,
    },
    display: {
      family: '"IBM Plex Sans", sans-serif',
      thin: 300,
      normal: 400,
      medium: 500,
      bold: 600,
    },
    monospace: {
      family: 'Inconsolata, monospace',
      thin: 400,
      normal: 400,
      medium: 500,
      bold: 700,
    },
  },
  spacing: {
    maximum: '4.0rem',
    extended: '2.8rem',
    standard: '1.6rem',
    reduced: '1.0rem',
    compact: '0.7rem',
    minimal: '0.3rem',
    none: '0',
  },
  elevation: {
    standard: '0px 3px 9px #00000f',
    reduced: '0px 2px 5px #00000d',
    minimal: '0px 2px 3px #00000f',
  },
  bevels: {
    standard: '0.25rem',
    reduced: '0.2rem',
    compact: '0.15rem',
    minimal: '0.1rem',
    none: '0',
  },
  config: {
    components: {
      panel: {
        borders: false,
        elevated: false,
      },
      button: {
        fontSizes: {
          small: '0.8rem',
          medium: '0.9rem',
          large: '1.0rem',
        },
      },
      highlight: {
        themeName: 'vsLight',
      },
      editor: {
        themeName: 'github',
      },
      input: {
        borders: true,
      },
    },
    groups: {
      formFields: {},
    },
    external: {
      mapbox: 'mapbox://styles/mapbox/streets-v11',
    },
  },
  palette: {
    definitive: {
      red: '#e7464e',
      green: '#409D44',
      blue: '#0078B4',
      yellow: '#ffd75a',
      magenta: '#f5319d',
      cyan: '#6dbec2',
      purple: '#7d64fa',
      orange: '#f5a50b',
      indigo: '#4D60FA',
      violet: '#d91ad9',
      coral: '#fa8c6b',
      amber: '#faba6b',
      brown: '#926e51',
      lime: '#b0d418',
      olive: '#7c7c00',
      teal: '#4E9885',
    },
    semantic: {
      cta: '#0078B4',
      primary: '#0078B4',
      positive: '#409D44',
      negative: '#e7464e',
      info: '#0078B4',
      focus: '#0078B4',
      warning: '#f5a50b',
    },
    chart: {
      primary: '#e7464e',
      secondary: '#409D44',
      trinary: '#0078B4',
    },
  },
  layers: {
    default: {
      base: '#f8f8f8',
      contrast: '#222222',
      next: 'panel',
    },
    sidebar: {
      base: '#efefef',
      contrast: '#222222',
    },
    navigation: {
      base: '#efefef',
      contrast: '#222222',
    },
    panel: {
      base: '#ffffff',
      contrast: '#222222',
      next: 'subPanel',
    },
    subPanel: {
      base: '#f9f9f9',
      contrast: '#222222',
      mix: 3,
      next: 'panel',
    },
    overlay: {
      base: '#00000099',
      contrast: '#ffffff',
      next: 'panel',
    },
  },
  breakpoints: {
    sm: '576px',
    md: '768px',
    lg: '1200px',
  },
};
