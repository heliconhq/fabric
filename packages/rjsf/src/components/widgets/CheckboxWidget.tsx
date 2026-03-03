import React, { useCallback } from "react";

import { Checkbox } from '@heliconhq/core';

import {
  ariaDescribedByIds,
  descriptionId,
  getTemplate,
  schemaRequiresTrueValue,
  FormContextType,
  RJSFSchema,
  StrictRJSFSchema,
  WidgetProps,
} from "@rjsf/utils";

function CheckboxWidget<
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any
>({
  schema,
  uiSchema,
  options,
  id,
  value,
  disabled,
  readonly,
  label,
  autofocus = false,
  onBlur,
  onFocus,
  onChange,
  registry,
}: WidgetProps<T, S, F>) {
  const DescriptionFieldTemplate = getTemplate<
    'DescriptionFieldTemplate',
    T,
    S,
    F
  >('DescriptionFieldTemplate', registry, options);
  // Because an unchecked checkbox will cause html5 validation to fail, only add
  // the "required" attribute if the field value must be "true", due to the
  // "const" or "enum" keywords
  const required = schemaRequiresTrueValue<S>(schema);

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) =>
      onChange(event.target.checked),
    [onChange]
  );

  const handleBlur = useCallback(
    (event: React.FocusEvent<HTMLInputElement>) =>
      onBlur(id, event.target.checked),
    [onBlur, id]
  );

  const handleFocus = useCallback(
    (event: React.FocusEvent<HTMLInputElement>) =>
      onFocus(id, event.target.checked),
    [onFocus, id]
  );

  return (
    <div className={`checkbox ${disabled || readonly ? 'disabled' : ''}`}>
      {schema.description && (
        <DescriptionFieldTemplate
          id={descriptionId<T>(id)}
          description={schema.description}
          schema={schema}
          uiSchema={uiSchema}
          registry={registry}
        />
      )}
      <label>
        <Checkbox
          type="checkbox"
          id={id}
          name={id}
          checked={typeof value === 'undefined' ? false : value}
          required={required}
          disabled={disabled || readonly}
          autoFocus={autofocus}
          onChange={handleChange}
          // onChange={() => console.log('fsdfsd')}
          onBlur={handleBlur}
          onFocus={handleFocus}
          aria-describedby={ariaDescribedByIds<T>(id)}
          label={label}
        />
      </label>
    </div>
  );
}

export default CheckboxWidget;
