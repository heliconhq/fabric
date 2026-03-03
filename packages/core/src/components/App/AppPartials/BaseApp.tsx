import { Global } from '@emotion/react';
import { PropsWithChildren } from 'react';
import { useAppState, useAuth, useTheme } from '../../../hooks';
import globalStyle from './GlobalStyles';
import style from '../../../utils/style';

type Props = {
  fixedHeight: boolean;
};

const StyledContainer = style('div')<Props>({
  base: {
    height: 'auto',
  },
  variants: {
    fixedHeight: {
      true: {
        height: '100vh',
      },
    },
  },
});

export default function BaseApp({
  fixedHeight,
  children,
}: PropsWithChildren<Props>) {
  const { theme, layer } = useTheme();
  const { allowScrolling } = useAppState();
  const { authEnabled, authenticated } = useAuth();

  const shouldShowLoadingState = authEnabled && !authenticated;

  if (shouldShowLoadingState) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Global styles={globalStyle(theme, layer, { allowScrolling })} />
      <StyledContainer
        fixedHeight={fixedHeight}
        style={{ height: fixedHeight ? '100vh' : 'auto' }}
        className="fabric--app"
      >
        {children}
      </StyledContainer>
    </>
  );
}
