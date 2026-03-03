import React from 'react';
import { RunningText, Callout } from '@heliconhq/core';

export default () => (
  <RunningText>
    <p>Themes allow you to customzie the Fabric look and feel. Their "shape"
      can vary a bit depending on when, where, and how they are used.</p>
    <h2>Partial themes</h2>
    <p>Themes contain <strong>a lot</strong> of configuration. Not only
      typography and color settings, but tones, neutrals, and separate
      component configurations for every <em>layer</em> (more on those later)
      available to the application.</p>
    <p>Just generating the tones of all available colors for every background
      would be extremely time consuming.</p>
    <p>We've created <code>processTheme()</code> to make creating themes a bit
      more convenient. It allows you to create a "partial" theme
      (<code>PartialTheme</code>) by defining a set of <em>core colors</em> and
      configurations. The partial theme is then used to automatically generate
      a full theme (<code>ProcessedTheme</code>).</p>

    <h2>Extending themes</h2>
    <p>We didn't stop there. Even with partial themes there are loads of
      settings that need to be defined. Creating your themes from scratch in
      every project would still be pretty annoying. That's why we supply a
      base-theme that can be extended with <code>extendTheme()</code>.</p>

    <p>Creating a new custom theme typically looks something this:</p>
    <pre>{`const myTheme = processTheme(extendTheme(baseTheme, {
  name: 'my-theme',
  layers: {
    default: {
      base: '#222222',
      contrast: '#f8f8f8',
      next: 'panel',
    },
    panel: {
      base: '#222222',
      contrast: '#f8f8f8',
      mix: 4,
      colorSpace: 'lab',
      next: 'default',
    },
  },
}));`}</pre>
    <p>That will extend the `baseTheme` with some settings you define and then
      process the result and generate a full theme that can be used in the
      application.</p>
    <Callout>
      Generating themes dynamically like this is pretty computationally heavy.
      We're working on tooling to solve that. You can save the output of
      <code>processTheme()</code> in a separate file in the meantime.
    </Callout>

    <h2>Active themes</h2>
    <p>Active themes are really similar to processed themes with the only
      difference being an additional key named <code>theme.layer</code> that
      contains a refererence to the currently active layer.</p>
    <p>A theme is "active" if it was retruned by the <code>useTheme()</code>
      hook or supplied as a callback via the <code>Layer</code> component.</p>
  </RunningText>
);
