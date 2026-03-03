import React from 'react';
import { TextBlock, BinaryDonut } from '@heliconhq/core';
import Example from '../docsComponents/Example/Example';

export default () => (
  <>
    <TextBlock>
      A <code>BinaryDonut</code> is a simple pie chart that can be used to
      quickly visualize proportions between a <code>value</code> and a
      <code>max</code>. Use the <code>Donut</code> component for more elaborate
      visualizations. The color of the area representing the <code>value</code>{' '}
      is controlled with the <code>appearance</code> prop. <code>rounded</code>{' '}
      and
      <code>strokeWidth</code> can also be used to control the appearance.
    </TextBlock>
    <Example<typeof BinaryDonut> Component={BinaryDonut}></Example>
  </>
);
