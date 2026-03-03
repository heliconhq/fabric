import React, { useState } from 'react';
import { Editor } from '@heliconhq/editor';
import Example from '../docsComponents/Example/Example';

export default () => {
  const [value, setValue] = useState('SELECT * FROM "hoppla.poppla"');
  return (
    <>
      <Example
        controlProps={{ value, onChange: setValue }}
        wide
        Component={Editor as React.FC}
      ></Example>
    </>
  );
};
