import React from 'react';

import { FieldHelp } from '@heliconhq/core';

import {
  helpId,
  FieldHelpProps,
  FormContextType,
  RJSFSchema,
  StrictRJSFSchema,
} from '@rjsf/utils';

export default function FieldHelpTemplate<
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any
>(props: FieldHelpProps<T, S, F>) {
  const { idSchema, help } = props;
  if (!help) {
    return null;
  }
  const id = helpId<T>(idSchema);
  if (typeof help === 'string') {
    return (
      <FieldHelp id={id}>
        {help}
      </FieldHelp>
    );
  }
  return (
    <FieldHelp id={id}>
      {help}
    </FieldHelp>
  );
}
