import React from "react";

import {
  ErrorListProps,
  FormContextType,
  RJSFValidationError,
  RJSFSchema,
  StrictRJSFSchema,
} from "@rjsf/utils";

function ErrorList<
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any
>({ errors }: ErrorListProps<T, S, F>) {
  return (
    <div className="panel panel-danger errors" style={{ display: 'none' }}>
      <div className="panel-heading">
        <h3 className="panel-title">Errors</h3>
      </div>
      <ul className="list-group">
        {errors.map((error: RJSFValidationError, i: number) => (
          <li key={i} className="list-group-item text-danger">
            {error.stack}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ErrorList;
