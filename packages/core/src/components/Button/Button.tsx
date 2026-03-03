import React from 'react';
import cn from 'classnames';

import { useTheme } from '../../hooks';
import ButtonLabel from './ButtonPartials/ButtonLabel';
import ButtonIcon from './ButtonPartials/ButtonIcon';
import type { ButtonProps } from './types';
import StyledButton from './ButtonPartials/BaseButton';
import StyledSpinner from './ButtonPartials/ButtonSpinner';

export default function Button({
  className,
  children,
  size = 'medium',
  icon,
  iconPosition = 'left',
  disabled = false,
  isLoading = false,
  active = false,
  block = false,
  appearance = 'neutral',
  design = 'regular',
  slim = false,
  as,
  ...props
}: ButtonProps & React.ComponentProps<'button'>) {
  const { theme, layer } = useTheme();

  const hasLabel = !!children;
  const hasIcon = !!icon;

  return (
    <StyledButton
      slim={slim}
      design={design}
      appearance={appearance}
      block={block}
      as={as}
      active={active}
      className={cn('fabric--button', className)}
      theme={theme}
      layer={layer}
      disabled={disabled || isLoading}
      hasIcon={hasIcon}
      hasOnlyIcon={hasIcon && !hasLabel}
      size={size}
      role="button"
      {...props}
    >
      <ButtonLabel
        isLoading={isLoading}
        iconPosition={iconPosition}
        className="fabric--button-label"
      >
        {!!icon && (
          <ButtonIcon
            icon={icon}
            size={size}
            iconPosition={iconPosition}
            hasLabel={hasLabel}
          />
        )}
        <div className="fabric--button-label-text">{children}</div>
      </ButtonLabel>
      {isLoading && <StyledSpinner size={size} />}
    </StyledButton>
  );
}
