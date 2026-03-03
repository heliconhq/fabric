import React from 'react';

import { Label, Container } from '@heliconhq/core';

import {
  FieldTemplateProps,
  FormContextType,
  RJSFSchema,
  StrictRJSFSchema,
  getTemplate,
  getUiOptions,
} from '@rjsf/utils';

function FieldTemplate<
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any
>(props: FieldTemplateProps<T, S, F>) {
  const {
    id,
    label,
    children,
    errors,
    help,
    description,
    hidden,
    required,
    displayLabel,
    registry,
    uiSchema,
  } = props;
  const uiOptions = getUiOptions(uiSchema);
  const WrapIfAdditionalTemplate = getTemplate<
    'WrapIfAdditionalTemplate',
    T,
    S,
    F
  >('WrapIfAdditionalTemplate', registry, uiOptions);
  if (hidden) {
    return <div className="hidden">{children}</div>;
  }
  return (
    <Container>
      <WrapIfAdditionalTemplate {...props}>
        {displayLabel && (
          <Container margin="compact">
            <Label required={required} htmlFor={id}>{label}</Label>
          </Container>
        )}
        {displayLabel && description ? description : null}
        {children}
        {errors}
        {help}
      </WrapIfAdditionalTemplate>
    </Container>
  );
}

export default FieldTemplate;
