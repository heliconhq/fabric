import { css } from '@emotion/react';
import { ActiveTheme, LayerValue } from '../../../types/theme';

export default function globalStyle(
  theme: ActiveTheme,
  layer: LayerValue,
  { allowScrolling }
) {
  return css`
    html {
      box-sizing: border-box;
      font-size: ${theme.typography.baseSize};
      font-family: ${theme.typography.normal.family};
      height: 100%;
    }

    body {
      scroll-behavior: smooth;
      overflow-x: hidden !important;
      line-height: 1;
      overflow: ${allowScrolling ? 'inherit' : 'hidden'};
    }

    code,
    pre {
      font-family: ${theme.typography.monospace.family};
    }

    p {
      line-height: 1.5;
      margin-bottom: 1.5rem;
    }

    @media (max-width: 1200px) {
      html {
        font-size: 15px;
      }
    }

    @media (max-width: 1024px) {
      html {
        font-size: 14px;
      }
    }

    input,
    button,
    textarea,
    select {
      font: inherit;
    }

    a {
      color: ${layer.palette.contextual.link};
    }

    *,
    *:before,
    *:after {
      box-sizing: inherit;
    }

    *:focus-visible {
      outline: ${layer.palette.contextual.focus} solid 1px;
    }

    html,
    body,
    p,
    ol,
    ul,
    li,
    dl,
    dt,
    dd,
    blockquote,
    figure,
    fieldset,
    legend,
    textarea,
    pre,
    iframe,
    hr,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    td,
    th {
      margin: 0;
      padding: 0;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-size: 100%;
      font-weight: normal;
    }

    button,
    input,
    select,
    textarea {
      margin: 0;
    }

    img,
    video {
      height: auto;
      max-width: 100%;
    }
  `;
}
