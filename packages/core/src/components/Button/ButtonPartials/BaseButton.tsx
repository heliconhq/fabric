import style from '../../../utils/style';
import type { ButtonProps } from '../types';
import type { AppearanceValue, LayerValue } from '../../../types/theme';
import type { Prettify } from '../../../types/helpers';

type StyleProps = Prettify<
  Pick<
    ButtonProps,
    'size' | 'design' | 'slim' | 'block' | 'disabled' | 'active'
  > & {
    appearance: AppearanceValue;
    as?: React.ElementType;
    layer: LayerValue;
    hasIcon: boolean;
    hasOnlyIcon: boolean;
    isFocusVisible?: boolean;
  }
>;

const StyledButton = style('button')<StyleProps>({
  base: ({ theme }) => ({
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    background: 'none',
    border: '1px solid',
    borderRadius: theme.bevels.reduced,
    whiteSpace: 'nowrap',
    width: 'fit-content',
    maxWidth: '100%',
    lineHeight: 'normal',
    overflow: 'hidden',
    fontWeight: theme.typography.normal.medium,
    textDecoration: 'none',
    cursor: 'pointer',
    textOverflow: 'ellipsis',
    userSelect: 'none',
    outline: 'none',
  }),
  variants: {
    isFocusVisible: {
      true: ({ layer }) => ({
        outline: `2px solid ${layer.palette.contextual.focus}`,
      }),
    },
    size: {
      large: ({ hasOnlyIcon, slim, theme, hasIcon }) => ({
        // eslint-disable-next-line no-nested-ternary
        padding: hasOnlyIcon
          ? '0 0.4rem'
          : slim || hasIcon
          ? '0 0.8rem'
          : '0 1.4rem',
        minWidth: '2.7rem',
        minHeight: '2.7rem',
        fontSize: theme.config.components.button.fontSizes.large,
      }),
      medium: ({ hasOnlyIcon, slim, theme, hasIcon }) => ({
        // eslint-disable-next-line no-nested-ternary
        padding: hasOnlyIcon
          ? '0 0.2rem'
          : slim || hasIcon
          ? '0 0.6rem'
          : '0 1.2rem',
        minWidth: '2.2rem',
        minHeight: '2.2rem',
        fontSize: theme.config.components.button.fontSizes.medium,
      }),
      small: ({ hasOnlyIcon, slim, theme, hasIcon }) => ({
        // eslint-disable-next-line no-nested-ternary
        padding: hasOnlyIcon
          ? '0 0.15rem'
          : slim || hasIcon
          ? '0 0.4rem'
          : '0 0.5rem',
        minWidth: '1.5rem',
        minHeight: '1.5rem',
        fontSize: theme.config.components.button.fontSizes.small,
      }),
    },
    design: {
      regular: ({ layer, appearance, active }) => ({
        borderColor:
          appearance === 'neutral'
            ? layer.palette.contextual.action
            : layer.palette.semantic[appearance][700],
        background:
          appearance === 'neutral'
            ? layer.palette.contextual.action
            : layer.palette.semantic[appearance][700],
        color:
          appearance === 'neutral'
            ? layer.palette.contextual.actionText
            : layer.palette.semantic[appearance].contrast,

        '&:not(:disabled):hover': {
          background:
            appearance === 'neutral'
              ? layer.palette.contextual.actionHover
              : layer.palette.semantic[appearance][800],
        },
        '&:not(:disabled):active': {
          background:
            appearance === 'neutral'
              ? layer.palette.contextual.actionActive
              : layer.palette.semantic[appearance][900],
        },
        ...(active && {
          background: `${
            appearance === 'neutral'
              ? layer.palette.contextual.actionActive
              : layer.palette.semantic[appearance][900]
          } !important`,
        }),
      }),
      text: ({ layer, appearance, active }) => ({
        borderColor: 'transparent',
        color:
          appearance === 'neutral'
            ? layer.palette.contextual.text
            : layer.palette.semantic[appearance][700],

        '&:not(:disabled):hover': {
          background:
            appearance === 'neutral'
              ? layer.palette.neutrals[100]
              : layer.palette.semantic[appearance][100],
        },
        '&:not(:disabled):active': {
          background:
            appearance === 'neutral'
              ? layer.palette.neutrals[200]
              : layer.palette.semantic[appearance][200],
        },
        ...(active && {
          background: `${
            appearance === 'neutral'
              ? layer.palette.neutrals[200]
              : layer.palette.semantic[appearance][200]
          } !important`,
        }),
      }),
      outline: ({ layer, active, appearance }) => ({
        borderColor:
          appearance === 'neutral'
            ? layer.palette.contextual.action
            : layer.palette.semantic[appearance][400],
        color:
          appearance === 'neutral'
            ? layer.palette.contextual.text
            : layer.palette.semantic[appearance][700],
        '&:not(:disabled):hover': {
          borderColor:
            appearance === 'neutral'
              ? layer.palette.contextual.actionHover
              : layer.palette.semantic[appearance][800],
        },
        '&:not(:disabled):active': {
          background: `${
            appearance === 'neutral'
              ? layer.palette.neutrals[100]
              : layer.palette.semantic[appearance][100]
          } !important`,
        },
        ...(active && {
          background: `${
            appearance === 'neutral'
              ? layer.palette.neutrals[100]
              : layer.palette.semantic[appearance][100]
          } !important`,
        }),
      }),
    },
    block: {
      true: {
        display: 'flex',
        width: '100%',
      },
    },
    disabled: {
      true: {
        cursor: 'not-allowed',
        opacity: 0.6,
      },
    },
  },
});

export default StyledButton;
