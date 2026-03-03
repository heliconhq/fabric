import BaseSelect from 'react-select';

import { useTheme } from '@heliconhq/core';

import createTheme from '../theme/createTheme';
import createStyles, { Styles } from '../theme/createStyles';

type Props = {
  isSearchable: boolean;
  isDisabled: boolean;
  isLoading: boolean;
  styles?: Styles;
  options: {
    label: string;
    value: string;
  }[];
};

const Select = ({
  styles = {},
  isLoading = false,
  isSearchable = false,
  isDisabled = false,
  ...props
}: Props) => {
  const { theme } = useTheme();
  return (
    <BaseSelect
      isLoading={isLoading}
      isDisabled={isDisabled}
      isSearchable={isSearchable}
      theme={createTheme(theme)}
      styles={createStyles(theme, styles)}
      {...props}
    />
  );
};

export default Select;
