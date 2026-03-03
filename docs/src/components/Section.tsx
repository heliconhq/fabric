import React from 'react';
import { TextBlock, Section } from '@heliconhq/core';
import Example from '../docsComponents/Example/Example';

export default () => (
  <>
    <TextBlock>
      Container used to ensure consistent spacing between different sections of
      a page.
    </TextBlock>
    <Example Component={Section}>
      {(_, props) => (
        <>
          <Section {...props}>
            <TextBlock>Some text in the first section</TextBlock>
          </Section>
          <Section {...props}>
            <TextBlock>Some text in the second section</TextBlock>
          </Section>
          <Section {...props}>
            <TextBlock>Some text in the third section</TextBlock>
          </Section>
        </>
      )}
    </Example>
  </>
);
