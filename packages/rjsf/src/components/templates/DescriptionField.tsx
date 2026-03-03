import React from 'react';

import { TextBlock } from '@heliconhq/core';

import {
  DescriptionFieldProps,
  FormContextType,
  RJSFSchema,
  StrictRJSFSchema,
} from '@rjsf/utils';

function DescriptionField<
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any
>(props: DescriptionFieldProps<T, S, F>) {
  const { id, description } = props;
  if (!description) {
    return null;
  }

  if (typeof description === 'string') {
    return (
      <TextBlock id={id}>
        {description}
      </TextBlock>
    );
  }

  return (
    <TextBlock id={id}>
      {description}
    </TextBlock>
  );
}

export default DescriptionField;
