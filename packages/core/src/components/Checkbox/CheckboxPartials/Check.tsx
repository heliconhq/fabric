import style from '../../../utils/style';

type Props = {
  indeterminate: boolean;
};

const StyledContainer = style('svg')({
  base: {
    width: '70%',
    height: '70%',
    transition: '180ms transform ease-in-out',
    transform: 'scale(0)',
  },
});

export default function Check({ indeterminate }: Props) {
  return (
    <StyledContainer
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      {indeterminate ? (
        <line
          className="checkbox-line"
          stroke="currentColor"
          strokeWidth="4"
          x1="2"
          y1="12"
          x2="21"
          y2="12"
        />
      ) : (
        <path
          className="checkbox-checkmark"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          d="M1.73 12.91l6.37 6.37L22.79 4.59"
        />
      )}
    </StyledContainer>
  );
}
