import { ReactNode } from 'react';
import style from '../utils/style';

type Props = {
  children?: ReactNode;
  expand: boolean;
};

type StyleProps = {
  expand: boolean;
};

const StyledPageContent = style('div')<StyleProps>({
  base: ({ expand }) => ({
    flex: '1 1 0',
    position: 'relative',

    ...(expand && {
      '& > *:first-of-type': {
        position: 'absolute',
        left: '0',
        top: '0',
        bottom: '0',
        right: '0',
        width: '100%',
        height: '100%',
      },
    }),
  }),
});

export default function PageContent({ children, expand = false }: Props) {
  return <StyledPageContent expand={expand}>{children}</StyledPageContent>;
}
