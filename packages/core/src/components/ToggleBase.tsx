import { ReactNode, forwardRef } from 'react';
import style from '../utils/style';

import { handleMargin } from '../theme';
import { useTheme } from '../hooks';
import { MarginValue, HorizontalAlignmentValue } from '../types/theme';

type Props = {
  children?: ReactNode;
  label?: ReactNode;
  className?: string;
  checked?: boolean;
  disabled?: boolean;
  alignLabel?: HorizontalAlignmentValue;
  margin?: MarginValue;
  inline?: boolean;
  type: 'checkbox' | 'radio';
  handleMargin?: string;
};

type StyleProps = {
  disabled: boolean;
  alignLabel: HorizontalAlignmentValue;
  margin: MarginValue;
  inline: boolean;
  handleMargin?: string;
};

const StyledSwitch = style('label')<StyleProps>({
  base: ({ theme, disabled, inline, alignLabel, margin }) => ({
    display: 'flex',
    marginBottom: inline ? 0 : handleMargin({ margin, theme }),
    ...(alignLabel === 'left' && {
      flexDirection: 'row-reverse',
      justifyContent: 'space-between',
    }),
    alignItems: 'center',
    opacity: disabled ? 0.5 : 1,
    cursor: 'pointer',

    '.toggle-base-toggler': {
      position: 'relative',

      '.toggle-base-hidden-input': {
        opacity: 0,
        zIndex: -1,
        position: 'absolute',
      },

      'input + *': {
        [`margin-${alignLabel}`]: '0.5em',
      },

      '&[disabled]': {
        opacity: 0.5,
        cursor: 'default',
      },
    },
  }),
});

const ToggleBase = forwardRef<HTMLInputElement, Props>(
  (
    {
      label,
      disabled = false,
      checked,
      alignLabel = 'right',
      margin = 'compact',
      inline = false,
      className,
      children,
      type = 'checkbox',
      ...props
    },
    ref
  ) => {
    const { theme } = useTheme();
    return (
      <StyledSwitch
        margin={margin}
        inline={inline}
        theme={theme}
        disabled={disabled}
        alignLabel={alignLabel}
        className={className}
      >
        <div className="toggle-base-toggler">
          <input
            className="toggle-base-hidden-input"
            type={type}
            disabled={disabled}
            checked={checked}
            ref={ref}
            {...props}
          />
          {children}
        </div>
        <div className="toggle-base-label">{label}</div>
      </StyledSwitch>
    );
  }
);

ToggleBase.displayName = 'ToggleBase';

export default ToggleBase;
