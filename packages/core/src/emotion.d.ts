import '@emotion/react';
import { ActiveTheme } from './types/theme';

declare module '@emotion/react' {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface Theme extends ActiveTheme {}
}
