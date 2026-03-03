import React from 'react';
import { Bar, TextBlock } from '@heliconhq/core';
import Example from '../docsComponents/Example/Example';

export default () => (
  <>
    <TextBlock>
      Bars are used as to signal progress or proportions between a
      <code>value</code> and a <code>max</code>. Labels can be specified with{' '}
      <code>minLabel</code> and
      <code>maxLabel</code>. <code>minLabel</code> is, despite its name and
      position, typically used to represent the current value. Bars can also
      have an <code>afterLabel</code> to indicate a value.
    </TextBlock>
    <Example<typeof Bar>
      presetProps={{ minLabel: 0, maxLabel: 100 }}
      wide
      Component={Bar}
    />
  </>
);
