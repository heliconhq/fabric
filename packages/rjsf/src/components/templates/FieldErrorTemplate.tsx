import React from 'react';

import { FieldError } from '@heliconhq/core';

import {
  errorId,
  FieldErrorProps,
  FormContextType,
  RJSFSchema,
  StrictRJSFSchema,
} from '@rjsf/utils';

function FieldErrorTemplate<
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any
>(props: FieldErrorProps<T, S, F>) {
  const { errors = [], idSchema } = props;
  if (errors.length === 0) {
    return null;
  }
  const id = errorId<T>(idSchema);

  return (
    <div>
      <div id={id}>
        {errors
          .filter((elem) => !!elem)
          .map((error, index: number) => (
            <FieldError key={index}>{error}</FieldError>
          ))}
      </div>
    </div>
  );
}

export default FieldErrorTemplate;
