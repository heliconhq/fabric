import { render, screen } from '@testing-library/react';
import { matchers } from '@emotion/jest';

import styled from '@emotion/styled';
import style from './style';

expect.extend(matchers);

type StyleProps = {
  size?: 'small' | 'large';
  appearance?: 'success' | 'danger';
  outline?: boolean;
  disabled?: boolean;
  slim?: boolean;
};

const Container = styled('div')({
  bacground: 'green',
});

const VariantComponent = style(Container)<StyleProps>({
  base: {
    background: 'red',
  },
  variants: {
    size: {
      large: ({ slim }) => ({
        padding: slim ? '6px' : '8px',
      }),
      small: ({ slim }) => ({
        padding: slim ? '2px' : '4px',
      }),
    },
    appearance: {
      success: {
        background: 'green',
      },
      danger: {
        background: 'red',
      },
    },
    outline: {
      true: {
        background: 'none',
        border: '1px solid',
      },
    },
    disabled: {
      true: {
        background: 'gray',
      },
    },
  },
  compoundVariants: [
    {
      variants: {
        appearance: 'success',
        outline: true,
      },
      style: {
        borderColor: 'green',
      },
    },
    {
      variants: {
        appearance: 'danger',
        outline: true,
      },
      style: {
        borderColor: 'red',
      },
    },
  ],
});

describe('Variant Styled Components', () => {
  it('Should apply base styles', () => {
    const { rerender } = render(
      <VariantComponent size="large" slim>
        component
      </VariantComponent>
    );

    const component = screen.getByText('component');

    expect(component).toHaveStyleRule('background', 'red');
    expect(component).toHaveStyleRule('padding', '6px');

    rerender(<VariantComponent size="small">component</VariantComponent>);
    expect(component).toHaveStyleRule('padding', '4px');
  });

  it('Should apply corresponding variant style', () => {
    const { rerender } = render(
      <VariantComponent size="small">component</VariantComponent>
    );

    const component = screen.getByText('component');

    expect(component).toHaveStyleRule('padding', '4px');

    rerender(<VariantComponent size="large">component</VariantComponent>);
    expect(component).toHaveStyleRule('padding', '8px');

    rerender(
      <VariantComponent size="small" appearance="success">
        component
      </VariantComponent>
    );
    expect(component).toHaveStyleRule('padding', '4px');
    expect(component).toHaveStyleRule('background', 'green');

    rerender(
      <VariantComponent appearance="danger" outline>
        component
      </VariantComponent>
    );
    expect(component).toHaveStyleRule('background', 'none');
    expect(component).toHaveStyleRule('border-color', 'red');

    rerender(
      <VariantComponent appearance="success" outline>
        component
      </VariantComponent>
    );
    expect(component).toHaveStyleRule('background', 'none');
    expect(component).toHaveStyleRule('border-color', 'green');
  });

  it('Should apply styles in cascading order', () => {
    const { rerender } = render(
      <VariantComponent appearance="success">component</VariantComponent>
    );

    const component = screen.getByText('component');

    expect(component).toHaveStyleRule('background', 'green');

    rerender(
      <VariantComponent disabled appearance="success">
        component
      </VariantComponent>
    );
    expect(component).toHaveStyleRule('background', 'gray');
  });
});
