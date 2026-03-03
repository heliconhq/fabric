import React from 'react';

import { Button } from '@heliconhq/core';

import {
  FormContextType,
  IconButtonProps,
  RJSFSchema,
  StrictRJSFSchema,
} from '@rjsf/utils';

function IconButton<
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any
>(props: IconButtonProps<T, S, F>) {
  const {
    icon,
    // className,
    // uiSchema,
    // registry,
    ...otherProps
  } = props;
  return (
    <Button
      type="button"
      icon={icon}
      size="small"
      {...otherProps}
    / >
  );
}

function MoveDownButton<
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any
>(props: IconButtonProps<T, S, F>) {
  return (
    <IconButton
      title="Move down"
      icon="expand-more"
      {...props}
    />
  );
}

function MoveUpButton<
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any
>(props: IconButtonProps<T, S, F>) {
  return (
    <IconButton
      title="Move up"
      icon="expand-less"
      {...props}
    />
  );
}

function RemoveButton<
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any
>(props: IconButtonProps<T, S, F>) {
  return (
    <IconButton
      title="Remove"
      icon="close"
      {...props}
    />
  );
}

export default IconButton;
export { RemoveButton, MoveUpButton, MoveDownButton };
