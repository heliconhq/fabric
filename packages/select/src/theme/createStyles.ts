import { ActiveTheme } from '@heliconhq/core/src/types/theme';
import { CSSProperties } from 'react';

export type Styles = Record<
  string,
  (
    provided: Record<string, string>,
    state: { isDisabled: boolean; isSelected: boolean }
  ) => Record<string, string | CSSProperties>
>;
export default function createStyles(
  { layer, config: { components } }: ActiveTheme,
  styles: Styles
): Styles {
  return {
    control: (provided, state) => ({
      ...provided,
      ...(typeof styles.control === 'function'
        ? styles.control(provided, state)
        : undefined),
      borderColor: components.input.borders
        ? layer.palette.contextual.divider
        : layer.palette.contextual.field,
      '&:hover': {
        borderColor: components.input.borders
          ? layer.palette.contextual.divider
          : layer.palette.contextual.field,
      },
    }),
    valueContainer: (provided, state) => ({
      ...provided,
      ...(typeof styles.valueContainer === 'function'
        ? styles.valueContainer(provided, state)
        : undefined),
      lineHeight: '120%',
    }),
    menuPortal: (provided, state) => ({
      ...provided,
      ...(typeof styles.menuPortal === 'function'
        ? styles.menuPortal(provided, state)
        : undefined),
      color: layer.palette.contextual.text,
    }),
    option: (provided, state) => ({
      ...provided,
      ...(typeof styles.option === 'function'
        ? styles.option(provided, state)
        : undefined),
      // eslint-disable-next-line no-nested-ternary
      color: state.isDisabled
        ? layer.palette.contextual.textFaint
        : state.isSelected
        ? layer.palette.semantic.primary.contrast
        : layer.palette.contextual.backdropMuted,
    }),
    clearIndicator: (provided, state) => ({
      ...provided,
      ...(typeof styles.clearIndicator === 'function'
        ? styles.clearIndicator(provided, state)
        : undefined),
    }),
    container: (provided, state) => ({
      ...provided,
      ...(typeof styles.container === 'function'
        ? styles.container(provided, state)
        : undefined),
    }),
    dropdownIndicator: (provided, state) => ({
      ...provided,
      ...(typeof styles.dropdownIndicator === 'function'
        ? styles.dropdownIndicator(provided, state)
        : undefined),
    }),
    group: (provided, state) => ({
      ...provided,
      ...(typeof styles.group === 'function'
        ? styles.group(provided, state)
        : undefined),
    }),
    groupHeading: (provided, state) => ({
      ...provided,
      ...(typeof styles.groupHeading === 'function'
        ? styles.groupHeading(provided, state)
        : undefined),
    }),
    indicatorsContainer: (provided, state) => ({
      ...provided,
      ...(typeof styles.indicatorsContainer === 'function'
        ? styles.indicatorsContainer(provided, state)
        : undefined),
    }),
    indicatorSeparator: (provided, state) => ({
      ...provided,
      ...(typeof styles.indicatorSeparator === 'function'
        ? styles.indicatorSeparator(provided, state)
        : undefined),
    }),
    input: (provided, state) => ({
      ...provided,
      ...(typeof styles.input === 'function'
        ? styles.input(provided, state)
        : undefined),
    }),
    loadingIndicator: (provided, state) => ({
      ...provided,
      ...(typeof styles.loadingIndicator === 'function'
        ? styles.loadingIndicator(provided, state)
        : undefined),
    }),
    loadingMessage: (provided, state) => ({
      ...provided,
      ...(typeof styles.loadingIndicator === 'function'
        ? styles.loadingMessage(provided, state)
        : undefined),
    }),
    menu: (provided, state) => ({
      ...provided,
      ...(typeof styles.menu === 'function'
        ? styles.menu(provided, state)
        : undefined),
    }),
    menuList: (provided, state) => ({
      ...provided,
      ...(typeof styles.menuList === 'function'
        ? styles.menuList(provided, state)
        : undefined),
    }),
    multiValue: (provided, state) => ({
      ...provided,
      ...(typeof styles.multiValue === 'function'
        ? styles.multiValue(provided, state)
        : undefined),
    }),
    multiValueLabel: (provided, state) => ({
      ...provided,
      ...(typeof styles.multiValueLabel === 'function'
        ? styles.multiValueLabel(provided, state)
        : undefined),
    }),
    multiValueRemove: (provided, state) => ({
      ...provided,
      ...(typeof styles.multiValueRemove === 'function'
        ? styles.multiValueRemove(provided, state)
        : undefined),
    }),
    noOptionsMessage: (provided, state) => ({
      ...provided,
      ...(typeof styles.noOptionsMessage === 'function'
        ? styles.noOptionsMessage(provided, state)
        : undefined),
    }),
    placeholder: (provided, state) => ({
      ...provided,
      ...(typeof styles.placeholder === 'function'
        ? styles.placeholder(provided, state)
        : undefined),
    }),
    singleValue: (provided, state) => ({
      ...provided,
      ...(typeof styles.singleValue === 'function'
        ? styles.singleValue(provided, state)
        : undefined),
    }),
  };
}
