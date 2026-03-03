import { HTMLAttributes } from 'react';
import style from '../utils/style';

import { useTheme } from '../hooks';

type Props = HTMLAttributes<HTMLDivElement>;

const StyledHeader = style('div')({
  base: ({ theme }) => ({
    marginBottom: theme.spacing.standard,
    alignItems: 'center',
    flex: '0 0 auto',
  }),
});

const PageHeader = ({ children, ...props }: Props) => {
  const { theme } = useTheme();

  return (
    <StyledHeader theme={theme} className="fabric--page-header" {...props}>
      {children}
    </StyledHeader>
  );
};

PageHeader.displayName = 'PageHeader';

export default PageHeader;
