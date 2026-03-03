import style from '../../../utils/style';

type StyleProps = {
  disabled: boolean;
};

export default style('span')<StyleProps>({
  base: ({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '1.3rem',
    height: '1.3rem',
    border: `1px solid ${theme.layer.palette.contextual.border}`,
    background: theme.layer.palette.contextual.field,
    borderRadius: theme.bevels.reduced,
    'input:checked + &, input:indeterminate + &': {
      background: theme.layer.palette.semantic.primary[700],
      borderColor: theme.layer.palette.semantic.primary[700],
      color: theme.layer.palette.semantic.primary.contrast,
      svg: {
        transform: 'scale(1)',
      },
    },
  }),
  variants: {
    disabled: {
      true: ({ theme }) => ({
        background: theme.layer.palette.contextual.disabled,
      }),
    },
  },
});
