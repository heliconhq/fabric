import React, { useState } from 'react';
import { Modal, Button, TextBlock } from '@heliconhq/core';

import Example from '../docsComponents/Example/Example';

const Content = (
  <>
    <TextBlock>
      They did not sing or tell stories that day, even though the weather
      improved; nor the next day, nor the day after. They had begun to feel that
      danger was not far away on either side. They camped under the stars, and
      their horses had more to eat than they had; for there was plenty of grass,
      but there was not much in their bags, even with what they had got from the
      trolls. One morning they forded a river at a wide shallow place full of
      the noise of stones and foam. The far bank was steep and slippery. When
      they got to the top of it, leading their ponies, they saw that the great
      mountains had marched down very near to them. Already they seemed only a
      day's easy journey from the feet of the nearest. Dark and drear it looked,
      though there were patches of sunlight on its brown sides, and behind its
      shoulders the tips of snow-peaks gleamed.
    </TextBlock>
    <TextBlock>
      "Is that The Mountain?" asked Bilbo in a solemn voice, looking at it with
      round eyes. He had never seen a thing that looked so big before.
    </TextBlock>
  </>
);

export default () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <TextBlock>
        A very basic <code>Modal</code> component used to display additional
        information. This is the simplest of the components in the "modals"
        family. A close button will be added to the <code>Overlay</code> if
        there's no title present.
      </TextBlock>
      <Example<typeof Modal>
        presetProps={{ children: Content }}
        controlProps={{ open, onClose: () => setOpen(false) }}
        Component={Modal}
      >
        {(Component) => (
          <div>
            <Button onClick={() => setOpen(!open)}>Open</Button>
            {Component}
          </div>
        )}
      </Example>
    </>
  );
};
