import React, { useState, useRef } from 'react';
import { Dialog, Button, Field, Input, TextBlock, Switch } from '@heliconhq/core';
import Example from '../docsComponents/Example/Example';

export default () => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  return (
    <>
      <TextBlock>
        Use the <code>Dialog</code> component to present small forms or short
        messages to the user.
      </TextBlock>
      <Example controlProps={{ autofocus: ref, open }} Component={Dialog}>
        {(_, props) => (
          <div>
            <Button onClick={() => setOpen(true)}>Open dialog</Button>
            <Dialog {...props} onCancel={() => setOpen(false)} onOk={() => setOpen(false)} open={open}>
              <TextBlock>
                This is an important form. Please fill in all the fields!
              </TextBlock>
              <form>
                <Field label="Preferred wizard name">
                  <Input
                    placeholder="Enter your wizard name ..."
                    ref={ref}
                    block
                  />
                </Field>
                <Field label="Name of your dragon">
                  <Input placeholder="Enter dragon name ..." block />
                </Field>
                <Switch label="Enable extra magical powers." />
              </form>
            </Dialog>
          </div>
        )}
      </Example>
    </>
  );
};
