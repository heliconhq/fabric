import { availableProp, extendedComponent, propMember } from '../types';

export function flatten(data: propMember, tag?: string): propMember {
  return Object.entries(data).reduce((r, [k, v]) => {
    if (!Array.isArray(v) && typeof v === 'object') {
      Object.assign(
        r,
        flatten(
          v,
          // eslint-disable-next-line no-nested-ternary
          v.kind === 'arrayType'
            ? 'array'
            : v.kind === 'function'
            ? 'function'
            : undefined
        )
      );
    } else {
      if (tag) {
        // eslint-disable-next-line
        r['tag'] = tag;
      }
      // eslint-disable-next-line no-param-reassign
      r[k] = v;
    }
    return r as propMember;
  }, {}) as propMember;
}

const extractDataFromMember = (
  member: propMember,
  undefinedDefaults: object = {}
): availableProp => {
  const flattMember = flatten(member);
  if (member?.key?.name) {
    // eslint-disable-next-line no-param-reassign
    undefinedDefaults[member.key.name] = undefined;
  }
  if (flattMember.kind === 'object') {
    if (flattMember.members) {
      flattMember.kind = 'array';
    }
  }
  const comment = member.leadingComments && member.leadingComments[0].value;
  return {
    ...flattMember,
    propName: member?.key?.name || 'unknown',
    required: !member.optional,
    description: comment as string | undefined,
  };
};

const calculateProps = (
  component: extendedComponent
): [object, availableProp[]] => {
  const undefinedDefaults = {};
  let available: availableProp[] = [];
  if (component?.___types?.value?.members) {
    available = component.___types.value.members.map(
      (member): availableProp =>
        extractDataFromMember(member, undefinedDefaults)
    );
  }
  // For combined props
  if (component?.___types?.value?.kind === 'intersection') {
    const members = component.___types.value.types.map((type) => {
      const membs = type?.members?.map((member) =>
        extractDataFromMember(member as propMember, undefinedDefaults)
      );
      return membs;
    });

    available = members.filter((e) => e !== undefined).flat();
  }
  if (component?.___types?.kind === 'intersection') {
    const members = component?.___types?.types?.map((type) => {
      if (typeof type?.value === 'object') {
        const membs = type?.value?.members?.map((member) =>
          extractDataFromMember(member as propMember, undefinedDefaults)
        );
        return membs;
      }
      return undefined;
    });
    if (members) {
      available = members.filter((e) => e !== undefined).flat();
    }
  }
  // For PropsWithChildren
  if (component?.___types?.typeParams?.kind === 'typeParams') {
    // Props with children
    if (
      Array.isArray(component.___types.typeParams?.params[0]?.value?.members)
    ) {
      available = component.___types.typeParams.params[0].value.members.map(
        (member) => extractDataFromMember(member, undefinedDefaults)
      );
    }
    // generics

    if (
      component?.___types?.value?.types &&
      component?.___types?.value?.types[0]?.members
    ) {
      available = component?.___types?.value?.types[0]?.members.map((member) =>
        extractDataFromMember(member as propMember, undefinedDefaults)
      );
    }
  }

  const defaults = { ...undefinedDefaults, ...component.__defaultProps };
  return [defaults, available];
};

export default calculateProps;
