import { AppearanceValue } from '../../../types/theme';
import Button from '../../Button';
import { Icon } from '../../Icon';

type Props = {
  direction: 'right' | 'left';
  disabled: boolean;
  handleClick: (pageNumber: number) => void;
  currentPage: number;
  appearance: AppearanceValue;
  block: boolean;
};

export default function ArrowButton({
  disabled,
  direction,
  handleClick,
  currentPage,
  ...props
}: Props) {
  return (
    <Button
      className="page-link"
      disabled={disabled}
      onClick={() =>
        handleClick(currentPage + (direction === 'right' ? 1 : -1))
      }
      {...props}
    >
      <Icon icon={direction === 'right' ? 'chevron-right' : 'chevron-left'} />
    </Button>
  );
}
