import React from 'react';
import { useTheme } from '../../../hooks';
import { IconName } from '../../../icons';
import style from '../../../utils/style';
import { Icon } from '../../Icon';

type BreadcrumbProps = {
  to: string;
  label: string;
  icon?: IconName;
  linkComponent: React.FC<{
    children: React.ReactNode[];
    to: string;
  }>;
};

const StyledBreadcrumb = style('div')({
  base: ({ theme }) => ({
    fontWeight: theme.typography.normal.medium,
    padding: '0.3rem 0',
    '> *': {
      color: 'inherit',
      textDecoration: 'none',
      display: 'flex',
      alignItems: 'center',
      textWrap: 'nowrap',
      '.fabric--icon': {
        marginRight: '0.2rem',
      },

      '&:hover': {
        textDecoration: 'underline',
      },
    },

    '&:last-child': {
      opacity: '0.75',

      '> *': {
        pointerEvents: 'none',
      },
    },
  }),
});

const Breadcrumb = ({
  label,
  to,
  icon,
  linkComponent: LinkComponent,
}: BreadcrumbProps) => {
  const { theme } = useTheme();
  return (
    <StyledBreadcrumb theme={theme}>
      <LinkComponent to={to}>
        {!!icon && <Icon icon={icon} size="1.2rem" />}
        {label}
      </LinkComponent>
    </StyledBreadcrumb>
  );
};

export default Breadcrumb;
