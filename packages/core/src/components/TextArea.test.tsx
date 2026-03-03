/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import { useState } from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { BackdropProvider, ThemeProvider } from '../hooks';
import Field from './Field';

import TextArea, { Props } from './TextArea';

const TextAreaField = (props: Props) => (
  <BackdropProvider>
    <ThemeProvider themeName="default-light-theme">
      <Field label="About you" labelFor="about-you">
        <TextArea id="about-you" {...props} />
      </Field>
    </ThemeProvider>
  </BackdropProvider>
);

const ControlledTextArea = () => {
  const [textareaValue, setTextareaValue] = useState('');
  return (
    <TextAreaField
      value={textareaValue}
      onChange={(event: React.FormEvent<HTMLInputElement>) =>
        setTextareaValue(event.currentTarget.value)
      }
    />
  );
};

describe('TextArea', () => {
  it('Should reflect uncontrolled value change', async () => {
    const user = userEvent.setup();
    render(<TextAreaField />);

    const textArea = screen.getByLabelText('About you');
    await user.type(textArea, 'anything');
    expect(screen.getByDisplayValue('anything')).toBeInTheDocument();
  });

  it('Should reflect rows config', () => {
    const { rerender } = render(<TextAreaField />);
    const textArea = screen.getByLabelText('About you');

    expect(textArea).toHaveAttribute('rows', '2');

    rerender(<TextAreaField rows={4} />);
    expect(textArea).toHaveAttribute('rows', '4');
  });

  it('Should check if placeholder exists', () => {
    const { rerender } = render(<TextAreaField />);

    expect(screen.getByPlaceholderText('Write something')).toBeInTheDocument();

    rerender(<TextAreaField placeholder="Live a little" />);
    expect(screen.getByPlaceholderText('Live a little')).toBeInTheDocument();
  });

  it('Should reflect controlled value change', async () => {
    const user = userEvent.setup();
    render(<ControlledTextArea />);

    const textArea = screen.getByLabelText('About you');
    await user.type(textArea, 'mickey mouse');
    expect(screen.getByDisplayValue('mickey mouse')).toBeInTheDocument();
  });
});
