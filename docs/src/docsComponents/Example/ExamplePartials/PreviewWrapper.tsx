import { style } from '@heliconhq/core';

type StyleProps = {
  outline: boolean;
  wide: boolean;
};

export default style('div')<StyleProps>({
  base: {
    maxWidth: '100%',
  },
  variants: {
    outline: {
      true: {
        border: '1px dotted rgba(255, 192, 46,.5)',
      },
    },

    wide: {
      true: {
        width: '100%',
      },
    },
  },
});
