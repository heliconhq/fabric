import React from 'react';

import { Title } from '@heliconhq/core';

import {
  getUiOptions,
  titleId,
  ArrayFieldTitleProps,
  FormContextType,
  RJSFSchema,
  StrictRJSFSchema,
} from '@rjsf/utils';

function ArrayFieldTitleTemplate<
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any
>(props: ArrayFieldTitleProps<T, S, F>) {
  const {
    idSchema,
    title,
    uiSchema,
    required,
  } = props;
  const options = getUiOptions<T, S, F>(uiSchema);

  const { label: displayLabel = true } = options;

  if (!title || !displayLabel) {
    return null;
  }
  return (
    <Title
      id={titleId<T>(idSchema)}
      level="h4"
      // required={required}
      // schema={schema}
      // uiSchema={uiSchema}
      // registry={registry}
    >{title}</Title>
  );
}

export default ArrayFieldTitleTemplate;
