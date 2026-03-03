import React from 'react';

import { PropsOf, Theme } from '@emotion/react';

import styled, {
  FilteringStyledOptions,
  StyledComponent,
  StyledOptions,
} from '@emotion/styled';

import type {
  CompoundVariants,
  StyleValue,
  Variants,
} from './mapPropsToStyles';

import mapPropsToStyles from './mapPropsToStyles';

interface StyleRules<StyleProps> {
  base?: StyleValue<StyleProps>;
  variants?: Variants<StyleProps>;
  compoundVariants?: CompoundVariants<StyleProps>;
}

export interface ApplyStyles<
  ComponentProps extends object,
  SpecificComponentProps extends object = object,
  JSXProps extends object = object
> {
  /**
   * @typeparam AdditionalProps  Additional props to add to your styled component
   */
  <AdditionalProps extends object = object>(
    styleRules: StyleRules<AdditionalProps>
  ): StyledComponent<
  ComponentProps & AdditionalProps,
  SpecificComponentProps,
  JSXProps
  >;
}

export interface Style {
  <
    C extends React.ComponentClass<React.ComponentProps<C>>,
    ForwardedProps extends keyof React.ComponentProps<C> &
    string = keyof React.ComponentProps<C> & string
  >(
    component: C,
    options: FilteringStyledOptions<React.ComponentProps<C>, ForwardedProps>
  ): ApplyStyles<
  Pick<PropsOf<C>, ForwardedProps> & {
    theme?: Theme;
  },
    object,
  {
    ref?: React.Ref<InstanceType<C>>;
  }
  >;

  <C extends React.ComponentClass<React.ComponentProps<C>>>(
    component: C,
    options?: StyledOptions<React.ComponentProps<C>>
  ): ApplyStyles<
  PropsOf<C> & {
    theme?: Theme;
  },
    object,
  {
    ref?: React.Ref<InstanceType<C>>;
  }
  >;

  <
    C extends React.ComponentType<React.ComponentProps<C>>,
    ForwardedProps extends keyof React.ComponentProps<C> &
    string = keyof React.ComponentProps<C> & string
  >(
    component: C,
    options: FilteringStyledOptions<React.ComponentProps<C>, ForwardedProps>
  ): ApplyStyles<
  Pick<PropsOf<C>, ForwardedProps> & {
    theme?: Theme;
  }
  >;

  <C extends React.ComponentType<React.ComponentProps<C>>>(
    component: C,
    options?: StyledOptions<React.ComponentProps<C>>
  ): ApplyStyles<
  PropsOf<C> & {
    theme?: Theme;
  }
  >;

  <
    Tag extends keyof JSX.IntrinsicElements,
    ForwardedProps extends keyof JSX.IntrinsicElements[Tag] &
    string = keyof JSX.IntrinsicElements[Tag] & string
  >(
    tag: Tag,
    options: FilteringStyledOptions<JSX.IntrinsicElements[Tag], ForwardedProps>
  ): ApplyStyles<
  { theme?: Theme; as?: React.ElementType },
  Pick<JSX.IntrinsicElements[Tag], ForwardedProps>
  >;

  <Tag extends keyof JSX.IntrinsicElements>(
    tag: Tag,
    options?: StyledOptions<JSX.IntrinsicElements[Tag]>
  ): ApplyStyles<{ theme?: Theme; as?: React.ElementType }, JSX.IntrinsicElements[Tag]>;
}

const style: Style = (tag: React.ComponentClass<object, unknown>, options?: StyledOptions) => {
  const applyStylesToComponent = styled(tag, options);

  return function applyStyles<StyleProps extends object>(
    styleRules: StyleRules<StyleProps>,
  ) {
    const { variants, compoundVariants } = styleRules;

    return applyStylesToComponent<StyleProps>(
      styleRules.base,
      mapPropsToStyles({ variants, compoundVariants }),
    );
  };
};

export default style;
