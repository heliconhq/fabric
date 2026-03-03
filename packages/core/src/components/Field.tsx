import { ReactNode } from 'react';
import style from '../utils/style';

import Container from './Container';
import Label from './Form';
import FieldError from './FieldError';
import FieldHelp from './FieldHelp';
import { MarginValue } from '../types/theme';

type Props = {
  children?: ReactNode;
  label?: ReactNode;
  labelFor?: string;
  labelExtra?: ReactNode;
  helpText?: ReactNode;
  errorText?: ReactNode;
  margin?: MarginValue;
};

const LabelContainer = style('div')({
  base: {
    marginBottom: '0.4rem',
  },
});

export default function Field({
  label,
  labelFor,
  labelExtra,
  helpText,
  errorText,
  children,
  margin = 'standard',
  ...props
}: Props) {
  return (
    <Container className="fabric--field" margin={margin} {...props}>
      {typeof label !== 'undefined' && (
        <LabelContainer className="label-content">
          <Label htmlFor={labelFor} extra={labelExtra}>
            {label}
          </Label>
        </LabelContainer>
      )}
      <div className="field-content">{children}</div>
      {!!helpText && <FieldHelp>{helpText}</FieldHelp>}
      {!!errorText && <FieldError>{errorText}</FieldError>}
    </Container>
  );
}
