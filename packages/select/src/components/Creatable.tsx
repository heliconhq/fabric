import { useTheme } from '@heliconhq/core';
import BaseCreatable from 'react-select/creatable';
import createTheme from '../theme/createTheme';
import createStyles from '../theme/createStyles';

export default function Creatable({ styles = {}, ...props }) {
  const { theme } = useTheme();
  return (
    <BaseCreatable
      theme={createTheme(theme)}
      styles={createStyles(theme, styles)}
      {...props}
    />
  );
}
