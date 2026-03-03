import React from 'react';
import styled from '@emotion/styled';
import { useTheme, Table } from '@heliconhq/core';

const StyledArgs = styled.div`
  margin: ${(props) => props.theme.spacing.extended} 0;

  table {
    font-size: 1rem;
    .prop-name {
      font-weight: ${(props) => props.theme.typography.normal.medium};
    }

    tr {
      vertical-align: top;
    }

    .description {
      margin-bottom: 0.75rem;
      line-height: 150%;
    }

    .type-values {
      line-height: 200%;
    }

    .union-value,
    .type-value {
      display: inline-block;
      padding: 0.1rem 0.3rem;
      border-radius: 0.1rem;
      line-height: normal;
      background: ${({ layer }) => layer.palette.contextual.faded};
      color: ${({ layer }) => layer.palette.contextual.fadedText};
    }
  }
`;

const cleanDescription = (comments) => {
  if (!comments) {
    return null;
  }

  return comments
    .map(({ value }) =>
      value
        .replace(/^\*[ \t\f]*/, '')
        .replace(/\n[ \t\f]*\*[ \t\f]*\n/g, '\n\n')
        .replace(/\n[ \t\f]*\*[ \t\f]*/g, ' ')
    )
    .join('\n');
};

const flattenProps = ({ kind, types, value }) => {
  switch (kind) {
    case 'union':
      return {
        kind: 'union',
        values: types.reduce((acc, type) => {
          if (type.kind === 'generic') {
            return [...acc, flattenProps(type).values];
          }
          return [...acc, { kind: type.kind, value: type.value }];
        }, []),
      };
    case 'generic':
      if (value.kind === 'function') {
        return { kind: 'function' };
      }

      if (value.kind === 'union') {
        return flattenProps(value);
      }

      if (['id', 'import'].includes(value.kind)) {
        return { kind: value.name };
      }

      return { kind };
    case 'property':
      return flattenProps(value);
    default:
      return { kind };
  }
};

const getMembers = (members) => {
  let targets = [];

  if (Array.isArray(members)) {
    targets = members.filter((val) => ['object', 'array'].includes(typeof val));
  } else if (typeof members === 'object' && members !== null) {
    if ('members' in members) {
      return members.members;
    }

    targets = Object.values(members).filter((val) =>
      ['object', 'array'].includes(typeof val)
    );
  }

  if (targets.length) {
    for (let i = 0; i < targets.length; i += 1) {
      const found = getMembers(targets[i]);
      if (found !== null) {
        return found;
      }
    }
  }

  return null;
};

const cleanProps = (comp) => {
  const members = getMembers(comp.___types || {}) || [];
  return members.map(
    ({
      optional,
      key: { name },
      value,
      default: defaultValue,
      leadingComments,
    }) => ({
      required: !optional,
      name,
      value: flattenProps(value),
      description: cleanDescription(leadingComments),
      defaultValue,
    })
  );
};

const typeRepr = (type) => {
  if (Array.isArray(type)) {
    return `${type.map(typeRepr).join(' | ')}`;
  }

  const { kind, value, elements } = type;

  switch (kind) {
    case 'void':
      return 'undefined';
    case 'generic':
      if (value.kind === 'function') {
        return 'function';
      }

      if (value.kind === 'import') {
        return value.name;
      }

      return 'generic';
    case 'string':
      if (typeof value !== 'undefined') {
        return `'${value}'`;
      }

      return 'string';
    case 'array':
      return `[${elements.map(typeRepr).join(', ')}]`;
    case 'number':
      if (typeof value !== 'undefined') {
        return `${value}`;
      }

      return 'number';
    case 'boolean':
      return `${value}`;
    default:
      return value;
  }
};

const formatType = ({ kind, values }) => {
  switch (kind) {
    case 'union':
      return values
        .map((value, i) => (
          <span className="union-value" key={i}>
            {typeRepr(value || {})}
          </span>
        ))
        .reduce((prev, curr) => [prev, ', ', curr]);
    default:
      return <span className="type-value">{kind}</span>;
  }
};

const Args = ({ component }) => {
  const { theme, layer } = useTheme();
  const props = cleanProps(component);

  return (
    <StyledArgs theme={theme} layer={layer}>
      <Table
        columns={[
          {
            key: 'name',
            header: 'Name',
            render: (value, { required, defaultValue }) => (
              <span className="prop-name">
                {value}{' '}
                {required && typeof defaultValue === 'undefined' ? '*' : ''}
              </span>
            ),
          },
          {
            key: 'defaultValue',
            header: 'Default',
            render: (value) => (
              <>
                {typeof value === 'undefined' ? (
                  <span className="type-value">undefined</span>
                ) : (
                  <span className="type-value">{typeRepr(value)}</span>
                )}
              </>
            ),
          },
          {
            key: 'description',
            header: 'Description and type information',
            render: (description, { value }) => (
              <>
                {description !== null && (
                  <div className="description">{description}</div>
                )}
                <div className="type-values">{formatType(value)}</div>
              </>
            ),
          },
        ]}
        rows={props}
      />
    </StyledArgs>
  );
};

export default Args;
export { flattenProps, cleanProps, typeRepr };
