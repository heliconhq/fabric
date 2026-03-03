import React from 'react';
import BaseForm from '@rjsf/core';
import { RJSFSchema, RegistryWidgetsType } from '@rjsf/utils';
import validator from '@rjsf/validator-ajv8';

import {
  CheckboxWidget,
  SelectWidget,
  TextareaWidget,
  RadioWidget,
} from './widgets';

import {
  ObjectFieldTemplate,
  FieldTemplate,
  TitleFieldTemplate,
  WrapIfAdditionalTemplate,
  DescriptionFieldTemplate,
  SubmitButton,
  AddButton,
  RemoveButton,
  MoveUpButton,
  MoveDownButton,
  ArrayFieldTemplate,
  ArrayFieldItemTemplate,
  BaseInputTemplate,
  ArrayFieldTitleTemplate,
  FieldErrorTemplate,
  FieldHelpTemplate,
  ErrorListTemplate,
} from './templates';

const WIDGETS: RegistryWidgetsType = {
  CheckboxWidget,
  TextareaWidget,
  SelectWidget,
  RadioWidget,
};

const TEMPLATES = {
  ObjectFieldTemplate,
  FieldTemplate,
  TitleFieldTemplate,
  WrapIfAdditionalTemplate,
  DescriptionFieldTemplate,
  ArrayFieldTemplate,
  ArrayFieldItemTemplate,
  BaseInputTemplate,
  ArrayFieldTitleTemplate,
  FieldErrorTemplate,
  ErrorListTemplate,
  FieldHelpTemplate,
  ButtonTemplates: {
    SubmitButton,
    AddButton,
    RemoveButton,
    MoveUpButton,
    MoveDownButton,
  },
};

const SchemaForm = ({
  schema,
  uiSchema,
  onChange,
  onSubmit,
  formData,
  templates,
  widgets,
  embedded = false,
  ...props
}) => (
  <BaseForm
    schema={schema}
    formData={formData}
    uiSchema={uiSchema}
    onChange={onChange}
    onSubmit={onSubmit}
    validator={validator}
    widgets={{ ...WIDGETS, ...widgets }}
    templates={{ ...TEMPLATES, ...templates }}
    children={null}
    {...(embedded ? { tagName: 'div', children: <div /> } : undefined)}
    {...props}
  />
);

export { RJSFSchema };
export default SchemaForm;
