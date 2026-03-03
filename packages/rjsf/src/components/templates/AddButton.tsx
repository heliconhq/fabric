import React from 'react';

import {
  FormContextType,
  IconButtonProps,
  RJSFSchema,
  StrictRJSFSchema,
} from '@rjsf/utils';

import IconButton from './IconButton';

function AddButton<
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any
>({
  onClick,
  disabled,
  registry,
}: IconButtonProps<T, S, F>) {
  return (
    <IconButton
      icon="add-box"
      onClick={onClick}
      disabled={disabled}
      registry={registry}
    />
  );
}

export default AddButton;
