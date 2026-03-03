import React, { useState } from 'react';
import { Button, Drawer, TextBlock } from '@heliconhq/core';

import Example from '../docsComponents/Example/Example';

export default () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <TextBlock>
        A <code>Drawer</code> is similar to a modal dialog, but slides in from
        one of the edges of the browser window. It is mainly used to display
        additional information and/or navigation.
      </TextBlock>
      <Example<typeof Drawer>
        controlProps={{ render: open, onClose: () => setOpen(!open) }}
        presetProps={{ children: 'This is content.' }}
        Component={Drawer}
      >
        {(Component) => (
          <>
            <Button onClick={() => setOpen(!open)}>Open drawer</Button>
            {Component}
          </>
        )}
      </Example>
    </>
  );
};
