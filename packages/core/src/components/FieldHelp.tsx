import { ReactNode, FC } from 'react';
import style from '../utils/style';

import { useTheme } from '../hooks';

interface Props {
  children?: ReactNode;
}

const StyledFieldHelp = style('div')({
  base: ({ theme }) => ({
    color: theme.layer.palette.contextual.textMuted,
    marginTop: '0.4rem',
    fontSize: '0.9em',
  }),
});

const FieldHelp: FC<Props> = ({ children }) => {
  const { theme } = useTheme();

  return (
    <StyledFieldHelp className="fabric--field-help" theme={theme}>
      {children}
    </StyledFieldHelp>
  );
};

export default FieldHelp;
