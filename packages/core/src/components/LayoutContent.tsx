import { ReactNode, ComponentProps } from 'react';
import style from '../utils/style';

type Props = {
  children?: ReactNode;
  /**
   * Allow pages to grow extra wide.
   */
  wide?: boolean;
  /**
   * Removes page padding.
   */
  compact?: boolean;
  /**
   * Max width of the content (only applies if `wide` is not set).
   */
  maxWidth?: string | number;
  /**
   * Props to pass to the inner element that wraps the children.
   */
  innerProps?: ComponentProps<'div'>;
};

type StyledLayoutContentProps = {
  compact: boolean;
  wide: boolean;
  maxWidth: string | number;
};

const StyledLayoutContent = style('div')<StyledLayoutContentProps>({
  base: ({ theme, compact, wide, maxWidth }) => ({
    padding: compact ? 0 : theme.spacing.standard,
    width: '100%',
    height: '100%',
    maxWidth: wide ? 'none' : maxWidth,
    margin: '0 auto',
  }),
});

export default function LayoutContent({
  children,
  wide = false,
  compact = false,
  maxWidth = '80rem',
  innerProps,
  ...props
}: Props) {
  return (
    <div className="fabric--layout-content" {...props}>
      <StyledLayoutContent
        wide={wide}
        compact={compact}
        maxWidth={maxWidth}
        {...innerProps}
      >
        {children}
      </StyledLayoutContent>
    </div>
  );
}
