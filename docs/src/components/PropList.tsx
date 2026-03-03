import React from 'react';
import { TextBlock, PropList, ListProp } from '@heliconhq/core';
import Example from '../docsComponents/Example/Example';

export default () => (
  <>
    <TextBlock>
      <p>
        A <code>PropList</code> that displays a set of key-value-pairs in a
        table. <code>PropList</code> is a basic container, <code>ListProp</code>
        is used to display data
      </p>
    </TextBlock>
    <Example
      presetProps={{ children: 'This is children' }}
      Component={ListProp}
    >
      {(Component, props) => (
        <PropList {...props}>
          {Component}
          <ListProp label="Character">Gollum</ListProp>
          <ListProp label="Beatrice">Gillar glass</ListProp>
        </PropList>
      )}
    </Example>
  </>
);
