import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Field, Input } from '.';
import { BackdropProvider, ThemeProvider } from '../hooks';

const InputField = () => (
  <BackdropProvider>
    <ThemeProvider themeName='default-light-theme'>
      <Field
        label="First Name"
        labelFor="about-you"
      >
        <Input id="about-you" />
      </Field>
    </ThemeProvider>
  </BackdropProvider>
);

describe('Field Component', () => {
  it('Should reflect input value', async () => {
    const user = userEvent.setup();

    render(<InputField />);

    const firstName = screen.getByLabelText('First Name');

    await user.type(firstName, 'anything');

    expect(firstName).toHaveDisplayValue('anything');
  });
});
