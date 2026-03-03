import { ComponentProps, forwardRef } from 'react';

import { useTheme } from '../hooks';
import style from '../utils/style';

type InputProps = ComponentProps<'input'> & {
  type?:
    | 'text'
    | 'number'
    | 'email'
    | 'password'
    | 'tel'
    | 'date'
    | 'month'
    | 'search'
    | 'time'
    | 'url'
    | 'week'
    | 'datetime-local'
    | 'file';
  block?: boolean;
  width?: 'inherit' | '200px';
};

type StyleProps = {
  local?: string;
  block: boolean;
  fileDesign: boolean;
  width?: 'inherit' | '200px' | undefined;
};

const StyledInput = style('input')<StyleProps>({
  base: ({ block, theme, width }) => ({
    display: 'block',
    boxSizing: 'border-box',
    fontSize: '1.0rem',
    width: block ? '100%' : width,
    color: 'inherit',
    background: theme.layer.palette.contextual.field,
    border: 0,
    borderRadius: theme.bevels.reduced,
    ...(theme.config.components.input.borders && {
      border: `1px solid ${theme.layer.palette.contextual.divider}`,
    }),
    padding: '0.4rem 0.6rem',
    '&:hover': {
      background: theme.layer.palette.contextual.fieldHover,
    },
    '&:disabled': {
      cursor: 'not-allowed',
      background: theme.layer.palette.contextual.disabled,
      color: theme.layer.palette.contextual.disabledText,
    },
  }),
  variants: {
    fileDesign: {
      true: {
        background: 'none',
        border: 0,
        borderRadius: 'none',
        padding: 0,
        '&:hover': {
          background: 'none',
        },
      },
    },
  },
});

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ type, block, ...props }: InputProps, ref) => {
    const { theme } = useTheme();

    return (
      <StyledInput
        theme={theme}
        type={type || 'text'}
        block={Boolean(block)}
        width={props.width}
        ref={ref}
        fileDesign={type === 'file'}
        {...props}
      />
    );
  }
);

Input.displayName = 'Input';

export default Input;
