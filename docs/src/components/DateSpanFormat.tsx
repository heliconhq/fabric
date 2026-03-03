import React from 'react';
import { DateSpanFormat, Spaced } from '@heliconhq/core';
import Example from '../docsComponents/Example/Example';

export default () => (
  <>
    <Example
      Component={DateSpanFormat}
      presetProps={{ start: new Date('1992-04-03T23:23:23'), end: new Date() }}
    >
      {(component) => <Spaced vertical={true}>{component}</Spaced>}
    </Example>
  </>
);
