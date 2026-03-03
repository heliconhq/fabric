import style from '../../../utils/style';

export default style('div')<{ block: boolean; disabled: boolean }>({
  base: ({ theme }) => ({
    position: 'relative',
    boxSizing: 'border-box',
    background: theme.layer.palette.contextual.field,
    '&:hover': {
      background: theme.layer.palette.contextual.fieldHover,
    },
    borderRadius: theme.bevels.reduced,
    ...(theme.config.components.input.borders && {
      border: `1px solid ${theme.layer.palette.contextual.divider}`,
    }),
    fontSize: '1.0rem',
    cursor: 'pointer',
    '&:focus-within': {
      borderColor: 'transparent',
      outline: `${theme.layer.palette.contextual.focus} solid 1px`,
    },
    svg: {
      height: '20px',
      position: 'absolute',
      right: '0.3rem',
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none',
    },
  }),
  variants: {
    block: {
      true: {
        display: 'block',
        width: '100%',
      },
    },
    disabled: {
      true: ({ theme }) => ({
        cursor: 'not-allowed',
        color: theme.layer.palette.contextual.disabledText,
        background: theme.layer.palette.contextual.disabled,
        '&:hover': {
          background: theme.layer.palette.contextual.disabled,
        },
      }),
    },
  },
});
