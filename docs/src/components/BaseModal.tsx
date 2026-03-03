import React, { useState } from 'react';
import {
  BaseModal,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
  TextBlock,
} from '@heliconhq/core';

import Example from '../docsComponents/Example/Example';

export default () => {
  const [open, setOpen] = useState(false);

  const Content = (
    <ModalContent
      centered={false}
      scrollInside={false}
      size={'small'}
      bevel={'standard'}
    >
      <ModalHeader onClose={() => setOpen(false)}>Header</ModalHeader>
      <ModalBody scrollInside={false}>
        <div>
          {Array(30)
            .fill(0)
            .map((_, i) => (
              <p key={i}>
                Lorem ipsum. <br />
              </p>
            ))}
          Last row. <br />
        </div>
      </ModalBody>
      <ModalFooter>Footer</ModalFooter>
    </ModalContent>
  );

  return (
    <>
      <TextBlock>
        You can use the <code>BaseModal</code> component together with
        <code>ModalContent</code>, <code>ModalHeader</code>,
        <code>ModalBody</code>, and <code>ModalFooter</code> to create custom
        modal components.
      </TextBlock>
      <Example<typeof BaseModal>
        presetProps={{ children: Content }}
        controlProps={{ open, onClose: () => setOpen(false) }}
        Component={BaseModal}
      >
        {(Component) => (
          <div>
            <Button onClick={() => setOpen(!open)}>Open</Button>
            {Component}
          </div>
        )}
      </Example>
      <Example<typeof ModalContent>
        presetProps={{
          children: 'This is ModalContent, its a container.',
        }}
        Component={ModalContent}
      ></Example>
      <Example<typeof ModalBody>
        presetProps={{
          children: 'This is ModalBody, its a container.',
        }}
        Component={ModalBody}
      ></Example>
      <Example<typeof ModalHeader>
        presetProps={{
          children: 'This is the header',
        }}
        Component={ModalHeader}
      ></Example>
      <Example<typeof ModalFooter>
        presetProps={{
          children: 'This is the footer',
        }}
        Component={ModalFooter}
      ></Example>
    </>
  );
};
