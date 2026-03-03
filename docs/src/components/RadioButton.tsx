import React from 'react';
import { TextBlock, RadioButton } from '@heliconhq/core';
import Example from '../docsComponents/Example/Example';

export default () => (
  <>
    <TextBlock>
      <p>
        A custom <code>RadioButton</code> component.
      </p>
    </TextBlock>
    <Example controlProps={{ value: '1' }} Component={RadioButton}>
      {(_, props) => (
        <form>
          <RadioButton name="example" label="Raspberry" {...props} value="1" />
          <RadioButton name="example" {...props} label="Strawberry" value="2" />
          <RadioButton name="example" {...props} label="Goldberry" value="3" />
        </form>
      )}
    </Example>
  </>
);
