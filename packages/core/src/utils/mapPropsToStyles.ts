import type { CSSObject } from '@emotion/react';
import { ActiveTheme } from '../types/theme';

type VariantTypeMap<T> = T extends true ? 'true' : T extends string ? T : never;

export type StyleValue<StyleProps> =
  | CSSObject
  | ((props: StyleProps & { theme: ActiveTheme }) => CSSObject);

export type Variants<StyleProps> = {
  [PropName in keyof StyleProps]?: {
    [VariationValue in VariantTypeMap<
      StyleProps[PropName]
    >]?: StyleValue<StyleProps>;
  };
};

type CompoundVariant<StyleProps> = {
  variants: Partial<StyleProps>;
  style: StyleValue<StyleProps>;
};

export type CompoundVariants<StyleProps> = CompoundVariant<StyleProps>[];

interface mapPropsToStylesParams<StyleProps> {
  variants?: Variants<StyleProps>;
  compoundVariants?: CompoundVariants<StyleProps>;
}

function getSimpleVariantsSyles<StyleProps extends object>(
  variants: mapPropsToStylesParams<StyleProps>['variants'],
  props: StyleProps
) {
  if (!variants) {
    return [];
  }

  const variantProps = Object.keys(props)
    .filter((prop) => prop in variants)
    .sort(
      (a, b) =>
        Object.keys(variants).indexOf(a) - Object.keys(variants).indexOf(b)
    );

  const simpleVariantsStyles = variantProps
    .map((variantProp) => {
      const variantPropValue = props[variantProp as keyof StyleProps];
      const availableVariants = variants[variantProp as keyof StyleProps];
      const matchingStyles =
        availableVariants?.[
          variantPropValue as VariantTypeMap<typeof variantPropValue>
        ];

      return matchingStyles;
    })
    .filter(Boolean);

  return simpleVariantsStyles;
}

function mapPropsToStyles<StyleProps extends object>({
  variants,
  compoundVariants = [],
}: mapPropsToStylesParams<StyleProps>) {
  return (props: StyleProps) => {
    const simpleVariantsStyles = getSimpleVariantsSyles(variants, props);

    const compundVariantsStyles = compoundVariants
      .filter((compoundVariant) => {
        const isMatching = Object.entries(compoundVariant.variants).every(
          ([targetVariantKey, targetVariantValue]) =>
            props?.[targetVariantKey as keyof StyleProps] === targetVariantValue
        );

        return isMatching;
      })
      .map((matchingVariant) => matchingVariant.style);

    return [...simpleVariantsStyles, ...compundVariantsStyles];
  };
}

export default mapPropsToStyles;
