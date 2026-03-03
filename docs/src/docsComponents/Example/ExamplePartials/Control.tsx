/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { Dispatch, SetStateAction, useState } from 'react';

import { Field, Input, Select, Switch, TextArea } from '@heliconhq/core';
import { DatePicker } from '@heliconhq/dates';
import type { availableProp, kinds } from '../../../hooks/useProps/types';

type Props = {
  prop: availableProp;
  currentProps: object;
  defaultProps: object;
  controlProps?: object;
  setProps: Dispatch<SetStateAction<object>>;
};

const Control = ({
  prop,
  currentProps,
  setProps,
  defaultProps,
  controlProps,
}: Props) => {
  const [haveError, setHaveError] = useState(false);
  const skippedKeys = [...Object.keys(controlProps || {}), 'children'];
  if (skippedKeys.includes(prop.propName) || prop.kind === 'void') {
    return null;
  }
  switch (prop.kind) {
    case 'hidden': {
      return null;
    }
    case 'boolean': {
      return (
        <Field key={prop.propName}>
          <Switch
            label={prop.propName}
            onChange={() =>
              setProps({
                ...currentProps,
                [prop.propName]: !currentProps[prop.propName],
              })
            }
            checked={currentProps[prop.propName]}
          />
        </Field>
      );
    }
    case 'string': {
      if (prop.types) {
        const options = prop.types || [];

        return (
          <Field key={prop.propName} label={prop.propName}>
            <Select
              value={currentProps[prop.propName]}
              onChange={(e) => {
                const nextValue = e.target.value || defaultProps[prop.propName];
                setProps({ ...currentProps, [prop.propName]: nextValue });
              }}
            >
              {options.map((optionValue) => (
                <option
                  label={optionValue.value || 'Set to default'}
                  value={optionValue.value}
                  key={optionValue.value ?? 'undefined'}
                ></option>
              ))}
            </Select>
          </Field>
        );
      }

      return (
        <Field key={prop.propName} label={prop.propName}>
          <Input
            value={currentProps[prop.propName]}
            onChange={(e) =>
              setProps({
                ...currentProps,
                [prop.propName]: e.target.value,
              })
            }
          />
        </Field>
      );
    }
    case 'import': {
      if (prop.propName === 'children') {
        return null;
      }
      return (
        <Field key={prop.propName} label={prop.propName}>
          <Input
            value={currentProps[prop.propName]}
            onChange={(e) =>
              setProps({
                ...currentProps,
                [prop.propName]: e.target.value,
              })
            }
          />
        </Field>
      );
    }
    case 'number': {
      return (
        <Field key={prop.propName} label={prop.propName}>
          <Input
            type="number"
            value={currentProps[prop.propName]}
            onChange={(e) => {
              setProps({
                ...currentProps,
                [prop.propName]: Number.isNaN(parseFloat(e.target.value))
                  ? undefined
                  : parseFloat(e.target.value),
              });
            }}
          />
        </Field>
      );
    }
    case 'array': {
      return (
        <Field
          errorText={haveError ? 'Could not parse, showing default value' : ''}
          key={prop.propName}
          label={prop.propName}
        >
          <TextArea
            resizable={true}
            value={JSON.stringify(currentProps[prop.propName])}
            onChange={(e) => {
              let parsed;
              setHaveError(false);
              try {
                parsed = JSON.parse(e.target.value);
              } catch {
                setHaveError(true);
              }
              setProps({
                ...currentProps,
                [prop.propName]: parsed,
              });
            }}
            block={false}
            rows={5}
          />
        </Field>
      );
    }
    case 'overrideStringExtended': {
      return (
        <Field key={prop.propName} label={prop.propName}>
          <TextArea
            resizable={true}
            value={currentProps[prop.propName]}
            onChange={(e) =>
              setProps({
                ...currentProps,
                [prop.propName]: e.target.value,
              })
            }
            block={false}
            rows={5}
          />
        </Field>
      );
    }
    case 'union': {
      const options = prop.types || [];
      return (
        <Field key={prop.propName} label={prop.propName}>
          <Select
            value={currentProps[prop.propName]}
            onChange={(e) => {
              const nextValue = e.target.value || defaultProps[prop.propName];
              setProps({ ...currentProps, [prop.propName]: nextValue });
            }}
          >
            {options.map((optionValue) => {
              if (optionValue.kind === 'generic') {
                const subTypes = optionValue.value as unknown as {
                  types?: {
                    value: string;
                    kind: kinds;
                  }[];
                };
                const types = subTypes.types ? subTypes.types : [];
                return types.map((ov) => (
                  <option
                    label={ov.value || 'Set to default'}
                    value={ov.value}
                    key={ov.value ?? 'undefined'}
                  ></option>
                ));
              }
              return (
                <option
                  label={optionValue.value || 'Set to default'}
                  value={optionValue.value}
                  key={optionValue.value ?? 'undefined'}
                ></option>
              );
            })}
          </Select>
        </Field>
      );
    }
    default:
      if (prop.name === 'default.ReactNode') {
        return (
          <Field key={prop.name} label={prop.propName}>
            <Input
              value={currentProps[prop.propName]}
              onChange={(e) =>
                setProps({
                  ...currentProps,
                  [prop.propName]: e.target.value,
                })
              }
            />
          </Field>
        );
      }
      if (prop.name === 'Date') {
        return (
          <Field key={prop.name} label={prop.propName}>
            <DatePicker
              selected={currentProps[prop.propName]}
              onChange={(date) => {
                setProps({
                  ...currentProps,
                  [prop.propName]: date,
                });
              }}
            ></DatePicker>
          </Field>
        );
      }
      console.log(prop);
      console.warn('Unknown control:', prop.propName);
      return <Field key={prop.propName}>Unknown control</Field>;
  }
};

export default Control;
