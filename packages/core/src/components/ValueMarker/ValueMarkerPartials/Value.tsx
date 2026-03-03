import style from '../../../utils/style';
import { StyledProps } from '../types';

const fontSizes = {
  xsmall: '0.5rem',
  small: '0.7rem',
  medium: '0.8rem',
  large: '0.9rem',
  xlarge: '1.2rem',
};

export default style('div')<Pick<StyledProps, 'size'>>({
  base: ({ theme, size }) => ({
    display: 'inline-block',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '80%',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    lineHeight: 'normal',
    fontWeight: theme.typography.normal.medium,
    fontSize: fontSizes[size],
  }),
});
