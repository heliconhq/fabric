import React, { useState } from 'react';
import { Button, RunningText } from '@heliconhq/core';
import Example from '../docsComponents/Example/Example';

export default () => {
  const [clicks, setClicks] = useState(0);
  return (
    <>
      <RunningText>
        <p>
          A customizable<code>Button</code> component. It has various props for
          controlling appearance, size, and functionality, and can optionally
          display an icon or a loading spinner.
        </p>
        <p>You have clicked {clicks} times</p>
      </RunningText>
      <Example
        previewStyle={{ justifyContent: 'center', display: 'flex' }}
        wide
        controlProps={{ as: 'button' }}
        presetProps={{
          children: 'Click me!',
          onClick: () => setClicks((s) => s + 1),
        }}
        Component={Button}
      ></Example>
    </>
  );
};
