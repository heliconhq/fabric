import React from 'react';
import { Tooltip, TextBlock, Icon } from '@heliconhq/core';
import Example from '../docsComponents/Example/Example';

export default () => (
  <>
    <TextBlock>
      <code>Tooltips</code> are used to display small snippets of information on
      hover. The component implements a fairly naive auto-positioning system (it
      centers the tooltip above the wrapped element(s) and nudges it a little if
      it does not fit horizontally).
    </TextBlock>
    <Example<typeof Tooltip>
      presetProps={{
        children: <Icon icon="info" />,
        content: 'This is a tooltip with some content',
      }}
      Component={Tooltip}
    />
  </>
);
