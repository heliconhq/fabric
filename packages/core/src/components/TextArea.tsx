import { forwardRef, ComponentProps } from 'react';

import style from '../utils/style';

import { useTheme } from '../hooks';

type Props = {
  placeholder?: string;
  rows?: number;
  block?: boolean;
  resizable?: boolean;
} & ComponentProps<'textarea'>;

type StyleProps = {
  block: boolean;
  resizable: boolean;
};

const StyledTextArea = style('textarea')<StyleProps>({
  base: ({ theme, resizable }) => ({
    width: '100%',
    borderRadius: theme.bevels.reduced,
    fontSize: '1.0rem',
    padding: '0.4rem 0.6rem',
    background: theme.layer.palette.contextual.field,
    color: 'inherit',
    border: 0,
    resize: resizable ? 'both' : 'none',
    '&:disabled': {
      cursor: 'not-allowed',
      background: theme.layer.palette.contextual.disabled,
      color: theme.layer.palette.contextual.disabledText,
    },
  }),
  variants: {
    block: {
      true: {
        display: 'block',
        width: '100%',
      },
    },
  },
});

const TextArea = forwardRef<HTMLTextAreaElement, Props>(
  (
    {
      block = false,
      rows = 6,
      placeholder,
      resizable = false,
      ...props
    }: Props,
    ref
  ) => {
    const { theme } = useTheme();

    return (
      <StyledTextArea
        ref={ref}
        theme={theme}
        block={block}
        rows={rows}
        placeholder={placeholder}
        resizable={resizable}
        className="fabric--textArea"
        {...props}
      />
    );
  }
);

TextArea.displayName = 'TextArea';
export default TextArea;
