import React from 'react';

import { Title } from '@heliconhq/core';

import {
  FormContextType,
  TitleFieldProps,
  RJSFSchema,
  StrictRJSFSchema,
} from '@rjsf/utils';

const REQUIRED_FIELD_SYMBOL = '*';

function TitleField<
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any
>(props: TitleFieldProps<T, S, F>) {
  const { id, title, required } = props;
  return (
    <Title id={id} level="h3">
      {title}
      {required && <span className="required">{REQUIRED_FIELD_SYMBOL}</span>}
    </Title>
  );
}

export default TitleField;
