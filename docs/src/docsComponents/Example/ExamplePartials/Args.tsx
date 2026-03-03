import React from 'react';
import { Table, useTheme } from '@heliconhq/core';
import StyledArgs from './Args/BaseArgs';
import type { availableProp } from '../../../hooks/useProps/types';

type Props = {
  defaultProps: object;
  availableProps: availableProp[];
};

type KindValue = { kind?: string; name?: string; value?: KindValue | string };

const formatDefaultValue = (val: unknown) => {
  if (typeof val === 'string') {
    return `'${val}'`;
  }

  if (typeof val === 'boolean') {
    return `${val}`;
  }

  if (typeof val === 'number') {
    return `${val}`;
  }
  if (Array.isArray(val)) {
    return val.map((v) => <p key={JSON.stringify(v)}>{JSON.stringify(v)}</p>);
  }

  return 'undefined';
};

const formatTypes = (types: KindValue[] | KindValue, tag?: string) => {
  if (Array.isArray(types)) {
    return types.map((type, i) => {
      let renderValue = type.kind;
      if (
        (type.value && typeof type.value === 'string') ||
        typeof type.value === 'number'
      ) {
        renderValue = `'${type.value}'`;
      }
      if (typeof type.value === 'object') {
        renderValue = type.value.name ?? type.value.kind;
      }
      if (tag === 'array') {
        renderValue += '[]';
      }
      return (
        <span
          key={(type.name ?? type.kind ?? 'undefined') + i}
          className="union-value"
        >
          {renderValue}
        </span>
      );
    });
  }
  return types?.kind;
};

const formatDesc = (kind: string, tag?: string) => {
  if (kind === 'void') {
    return 'function: void';
  }
  if (kind === 'id' || kind === 'import') {
    return 'ReactNode';
  }
  if (tag === 'array') {
    return `${kind}[ ]`;
  }
  if (tag === 'function') {
    return 'function';
  }
  return kind;
};

const Args = ({ defaultProps, availableProps }: Props) => {
  const { theme, layer } = useTheme();
  return (
    <StyledArgs layer={layer} theme={theme}>
      <Table
        columns={[
          {
            key: 'propName',
            header: 'Name',
            render: (value) => {
              const prop = availableProps.find((p) => p.propName === value);
              return (
                <span className="prop-name">
                  {value as string} {prop?.required ? '*' : ''}
                </span>
              );
            },
          },
          {
            key: 'propName',
            header: 'Default',
            render: (value) => (
              <span className="type-value">
                {formatDefaultValue(defaultProps[value as string])}
              </span>
            ),
          },
          {
            key: 'types',
            header: 'Description and type information',
            render: (value, row) => {
              const r = row as {
                kind?: string;
                description?: string;
                tag: string;
              };
              return (
                <>
                  <div className="type-values">
                    {value ? (
                      formatTypes(value as KindValue, r.tag)
                    ) : (
                      <span className="type-value">
                        {r.kind && formatDesc(r.kind, r.tag)}
                      </span>
                    )}
                  </div>
                  {r.description && (
                    <div className="description">{r.description}</div>
                  )}
                </>
              );
            },
          },
        ]}
        rows={availableProps}
      />
    </StyledArgs>
  );
};
export default Args;
