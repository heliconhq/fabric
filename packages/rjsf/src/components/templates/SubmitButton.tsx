import React from 'react';

import { Button } from '@heliconhq/core';

import {
  getSubmitButtonOptions,
  FormContextType,
  RJSFSchema,
  StrictRJSFSchema,
  SubmitButtonProps,
} from '@rjsf/utils';

function SubmitButton<
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any
>({ uiSchema }: SubmitButtonProps<T, S, F>) {
  const {
    submitText,
    norender,
    props: submitButtonProps = {},
  } = getSubmitButtonOptions<T, S, F>(uiSchema);
  if (norender) {
    return null;
  }
  return (
    <div>
      <Button
        type="submit"
        {...submitButtonProps}
        className={`btn btn-info ${submitButtonProps.className}`}
      >
        {submitText}
      </Button>
    </div>
  );
}

export default SubmitButton;
