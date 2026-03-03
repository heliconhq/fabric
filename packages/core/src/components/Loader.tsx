import style from '../utils/style';

import Spinner from './Spinner';
import Text from './Typography/Text';

type Props = {
  size?: 'small' | 'medium' | 'large' | string;
  text?: string;
};

const StyledLoader = style('div')({
  base: {
    height: '100%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '.loading-content': {
      textAlign: 'center',
    },
    '.fabric--text': {
      marginTop: '1rem',
    },
  },
});

export default function Loader({ size = 'large', text, ...props }: Props) {
  return (
    <StyledLoader className="fabric--loader" {...props}>
      <div className="loading-content">
        <Spinner size={size} />
        {text && <Text>{text}</Text>}
      </div>
    </StyledLoader>
  );
}
