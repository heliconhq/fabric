import React from 'react';

export type kinds =
  | 'boolean'
  | 'union'
  | 'import'
  | 'string'
  | 'number'
  | 'object'
  | 'array'
  | 'void'
  | 'arrayType'
  | 'function'
  | 'overrideStringExtended'
  | 'hidden'
  | 'generic';

export type propMember = {
  kind: kinds;
  key?: propMember;
  value?: propMember | 'string';
  optional?: boolean;
  leadingComments?: propMember[];
  types?: { value: string }[];
  name?: string;
  members?: Array<unknown>;
};

export type availableProp = {
  kind: kinds;
  propName: string;
  name?: string;
  types?: { value: string; kind?: kinds }[];
  required: boolean;
  description?: string;
  optional?: boolean;
};
export type extendedComponent = React.FunctionComponent & {
  ___types: {
    typeParams: {
      kind: string;
      params: [{ value: { members: propMember[] } }];
    };
    value: {
      members: propMember[];
      kind: string;
      types: propMember[];
    };
    types?: propMember[];
    kind?: string;
    name?: { name?: string };
  };
  __defaultProps: object;
};
