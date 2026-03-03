import React from 'react';
import { TextBlock } from '@heliconhq/core';
import Example from '../docsComponents/Example/Example';

export default () => (
  <>
    <TextBlock>
      <code>TextBlocks</code> are almost identical to the <code>Text</code>{' '}
      component (see [Text]) with the exception that they have an adjustable{' '}
      <code>margin</code>.
    </TextBlock>
    <Example<typeof TextBlock> Component={TextBlock}>
      {(Component, p) => (
        <>
          <TextBlock {...p}>
            In a hole in the ground there lived a hobbit. Not a nasty, dirty,
            wet hole, filled with the ends of worms and an oozy smell, nor yet a
            dry, bare, sandy hole with nothing in it to sit down on or to eat:
            it was a hobbit-hole, and that means comfort.
          </TextBlock>
          <TextBlock {...p}>
            It had a perfectly round door like a porthole, painted green, with a
            shiny yellow brass knob in the exact middle. The door opened on to a
            tube­shaped hall like a tunnel: a very comfortabletunnel without
            smoke, with panelled walls, and floors tiled and carpeted, provided
            with polished chairs, and lots and lots of pegs for hats and coats
            -­ the hobbit was fond of visitors.
          </TextBlock>
        </>
      )}
    </Example>
  </>
);
