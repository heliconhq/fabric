import { PropsWithChildren } from 'react';
import { useTheme } from '../../../hooks';
import style from '../../../utils/style';
import Button from '../../Button';

const StyledTimeScrub = style('div')({
  base: ({ theme }) => ({
    position: 'relative',
    padding: '1rem',
    borderRadius: theme.bevels.reduced,
    display: 'flex',
    '&:after': {
      content: "''",
      height: '6px',
      width: '6px',
      background: theme.layer.palette.contextual.text,
      position: 'absolute',
      bottom: '0',
      left: '50%',
      transform: 'translateX(-50%)',
    },
  }),
});

const StyledButton = style(Button)({
  base: {
    userSelect: 'none',
  },
});

type Props = {
  onMouseDown: (direction: 'prev' | 'next') => void;
  onMouseUp: (direction: 'prev' | 'next') => void;
  prevDisabled: boolean;
  nextDisabled: boolean;
};

export default function TimeScrubContainer({
  prevDisabled,
  nextDisabled,
  onMouseDown,
  onMouseUp,
  children,
}: PropsWithChildren<Props>) {
  const { theme } = useTheme();
  return (
    <StyledTimeScrub className="fabric--time-scrub" theme={theme}>
      <StyledButton
        icon="chevron-left"
        onMouseDown={() => {
          onMouseDown('prev');
        }}
        onMouseLeave={() => onMouseUp('prev')}
        onClick={() => onMouseUp('prev')}
        slim
        design="outline"
        disabled={prevDisabled}
      />
      {children}
      <StyledButton
        icon="chevron-right"
        onMouseDown={() => {
          onMouseDown('next');
        }}
        onMouseLeave={() => onMouseUp('next')}
        onClick={() => onMouseUp('next')}
        slim
        design="outline"
        disabled={nextDisabled}
      />
    </StyledTimeScrub>
  );
}
