import React from 'react';
import { TextBlock, Spinner } from '@heliconhq/core';
import Example from '../docsComponents/Example/Example';

export default () => (
  <>
    <TextBlock>
      A <code>Spinner</code> is a spinning icon used to signal that something
      requires the user to wait a little (e.g. data is loading, or an action is
      being processed). interest in a plane such as a map or
      <code>Viewer2d</code>. It is similar to an <code>Icon</code> in the regard
      that it inherits the foreground color from the parent (
      <code>currentColor</code>). The appearance can be controlled via the{' '}
      <code>appearance</code> prop and the size can be controlled via the{' '}
      <code>size</code> prop. Spinners are often used in conjunction with{' '}
      <code>Overlay</code>
      components when the underlying UI should be covered during progress
    </TextBlock>
    <Example Component={Spinner}></Example>
  </>
);
