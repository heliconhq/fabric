import style from '../../../utils/style';

type StyledSelectProps = {
  disabled?: boolean;
  block?: boolean;
};

export default style('select')<StyledSelectProps>({
  base: ({ theme }) => ({
    width: '100%',
    appearance: 'none',
    backgroundColor: 'transparent',
    border: 'none',
    padding: '0.4rem 1.6rem 0.4rem 0.6rem',
    margin: '0',
    fontFamily: 'inherit',
    fontSize: 'inherit',
    cursor: 'inherit',
    lineHeight: '130%',
    boxSizing: 'border-box',
    color: theme.layer.palette.contextual.text,

    '&:focus': {
      outline: 'none',
    },
  }),
  variants: {
    disabled: {
      true: ({ theme }) => ({
        color: theme.layer.palette.contextual.disabledText,
      }),
    },
  },
});
