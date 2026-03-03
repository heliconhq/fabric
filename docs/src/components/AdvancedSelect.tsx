import React from 'react';
import { TextBlock } from '@heliconhq/core';
import AdvancedSelect from '@heliconhq/select';
import Example from '../docsComponents/Example/Example';

export default () => (
  <>
    <TextBlock>
      <p>
        An <code>AdvancedSelect</code> field based on{' '}
        <a href="https://react-select.com/">React Select</a>. All props passed
        to this component are directly passed to the underlying component. Refer
        to their documentation for details.
      </p>
    </TextBlock>
    <Example<typeof AdvancedSelect>
      wide
      Component={AdvancedSelect as React.FunctionComponent}
      controlProps={{
        styles: {},
      }}
      presetProps={{
        options: [
          { value: 'gandalf', label: 'Gandalf' },
          { value: 'saruman', label: 'Saruman' },
          { value: 'radagast', label: 'Radagast' },
          { value: 'alatar', label: 'Alatar' },
          { value: 'pallando', label: 'Pallando' },
        ],
      }}
    ></Example>
  </>
);
