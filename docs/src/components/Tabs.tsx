import React from 'react';
import { Tabs, Tab, TextBlock } from '@heliconhq/core';
import Example from '../docsComponents/Example/Example';

export default () => (
  <>
    <TextBlock>
      <code>Tabs</code> are ideal for navigation within a page. The{' '}
      <code>Tabs</code> component can also have secondary actions via the{' '}
      <code>actions</code> property.
    </TextBlock>
    <Example<typeof Tabs> Component={Tabs}>
      {(_, props) => (
        <>
          <Tabs {...props}>
            <p></p>
            <Tab id="part-1" title="Part 1">
              <TextBlock>
                In a hole in the ground there lived a hobbit. Not a nasty,
                dirty, wet hole, filled with the ends of worms and an oozy
                smell, nor yet a dry, bare, sandy hole with nothing in it to sit
                down on or to eat: it was a hobbit-hole, and that means comfort.
              </TextBlock>
            </Tab>
            <Tab id="part-2" title="Part 2">
              <TextBlock>
                It had a perfectly round door like a porthole, painted green,
                with a shiny yellow brass knob in the exact middle. The door
                opened on to a tube-shaped hall like a tunnel: a very
                comfortable tunnel without smoke, with panelled walls, and
                floors tiled and carpeted, provided with polished chairs, and
                lots and lots of pegs for hats and coats — the hobbit was fond
                of visitors.
              </TextBlock>
            </Tab>
          </Tabs>
        </>
      )}
    </Example>
  </>
);
