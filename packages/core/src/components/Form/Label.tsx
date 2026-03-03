import { ComponentProps, ReactNode } from 'react';
import LabelWrapper from './LabelPartials/LabelWrapper';
import StyledExtra from './LabelPartials/StyledExtra';

type Props = {
  children?: ReactNode;
  extra?: ReactNode;
} & ComponentProps<'label'>;

export default function Label({ children, extra, ...props }: Props) {
  return (
    <LabelWrapper className="fabric--label" {...props}>
      {children}
      {typeof extra !== 'undefined' && (
        <StyledExtra className="label-extra">{extra}</StyledExtra>
      )}
    </LabelWrapper>
  );
}
