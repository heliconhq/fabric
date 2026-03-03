import Button from '../../Button';
import style from '../../../utils/style';

type Props = {
  onClose: () => void;
};
const Wrapper = style('div')({
  base: {
    position: 'absolute',
    right: '0.5rem',
    top: '0.5rem',
    pointerEvents: 'none',
  },
});

export default function CloseButton({ onClose }: Props) {
  return (
    <Wrapper>
      <Button icon="close" onClick={onClose} design="text" />
    </Wrapper>
  );
}
