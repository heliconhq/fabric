import React, { useRef } from 'react';
import { Button, Container, TextBlock, ToastProvider } from '@heliconhq/core';
import Example from '../docsComponents/Example/Example';

export default () => {
  const ref = useRef<{
    addToast: ({
      content,
      timeout,
    }: {
      content: string;
      timeout?: number;
    }) => void;
  }>();
  return (
    <>
      <TextBlock>
        A <code>Toast</code> is mainly used to display notifications. It uses a
        React Context and Reducer hooks in the background.
      </TextBlock>

      <Example<typeof ToastProvider>
        presetProps={{
          maxToasts: 5,
          position: 'bottom',
          portal: false,
          ref,
          children: (
            <Container>
              <Container>
                <Button
                  onClick={() =>
                    ref?.current?.addToast({
                      content: 'This is a toast!',
                      timeout: 5000,
                    })
                  }
                >
                  Short toaster
                </Button>
              </Container>
              <Container>
                <Button
                  onClick={() =>
                    ref?.current?.addToast({
                      content: `This is a reasonably long text with a random number${Math.random()}`,
                    })
                  }
                >
                  Long toaster
                </Button>
              </Container>
            </Container>
          ),
        }}
        Component={ToastProvider}
      ></Example>
    </>
  );
};
