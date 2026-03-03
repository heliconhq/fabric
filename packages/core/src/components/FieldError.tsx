import { ReactNode, FC } from 'react';
import style from '../utils/style';

import { useTheme } from '../hooks';

interface Props {
  children?: ReactNode;
}

const StyledFieldError = style('div')({
  base: ({ theme }) => ({
    color: theme.layer.palette.contextual.negativeText,
    marginTop: '0.4rem',
    fontSize: '0.9em',
  }),
});

const FieldError: FC<Props> = ({ children }) => {
  const { theme } = useTheme();

  return (
    <StyledFieldError className="fabric--field-error" theme={theme}>
      {children}
    </StyledFieldError>
  );
};

export default FieldError;
