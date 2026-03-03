import React from 'react';
import { TextBlock, Donut } from '@heliconhq/core';
import Example from '../docsComponents/Example/Example';

export default () => (
  <>
    <TextBlock>
      A <code>Donut</code> is a pie chart that can be used to visualize
      proportions between different values in a <code>series</code>. Children
      are automatically centered horizontally and vertically within a{' '}
      <code>Donut</code>. You can control the <code>strokeWidth</code> and set
      the <code>rounded</code> boolean property on a series.
    </TextBlock>
    <Example presetProps={{ children: 'A+' }} Component={Donut}></Example>
  </>
);
