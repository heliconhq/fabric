import React from 'react';
import { RunningText, Callout } from '@heliconhq/core';

export default () => (
  <RunningText>
    <p>We need a lot of different colors in our data heavy applications. These
    colors need to be available in various different tones.</p>
    <p>We also need to support several vastly different background colors for
      use in different parts of these applications.</p>
    <p>This means we cannot rely on a single set of tones for each color. We
      need a set of tones for <em>every color</em> and <em>every
        background</em> we support.</p>
    <p>We solve this by defining different "layers" in the application. Each
    layer is like a small theme that dictates how everything within the layer
      behaves.</p>

    <h2>Selecting layers</h2>

    <p>All applications start on the "default" layer. You can select a layer
      by using the <code>Layer</code> component, or any component that uses
      it. You can provide the name, or a list of names, of the preferred layer
      you want. If that layer is not available in the currently active theme,
      the <em>next</em> layer will be selected. If there is no <em>next</em>
      layer, the current layer will be used.</p>

    <p>So what does that really mean? Say you have the following code:</p>

    <pre>{"<Layer layer={['navigation', 'sidebar']}><MyComponent /></Layer>"}</pre>

    <ul>
      <li>If the current theme has a layer named "navigation", that will be used.</li>
      <li>Otherwise, if the current theme has a layer named "sidebar", that will be used.</li>
      <li>Otherwise, if the currently active layer has defined a "next" layer,
        that will be used.</li>
      <li>Otherwise, the currently active layer will be re-used.</li>
    </ul>

    <p>If you do not specify a layer, the next one will automatically be
      selected (if it exists):</p>

    <pre>{'<Layer><MyComponent /></Layer>'}</pre>

    <p>This is very useful in scenarios where you have nested layers, but
      cannot specify which layer to actually use for every individual layer
      (<code>Panel</code> for example).</p>

    <h2>Defining layers in your theme</h2>

    <p>Besides selecting a "semantic" color palette, this is typically where
      you'd spend the most of your time when creating a new theme.</p>

    <p>All themes must define a at-least a "default" layer. You should
      probably also define at-least one "next" layer after the default layer
      for panels. Some standard components are configured to use the following
      layers as well:</p>

    <ul>
      <li>sidebar</li>
      <li>navigation</li>
      <li>overlay</li>
    </ul>

    <p>You can define a layer in your theme under the <code>layers</code> key:</p>

    <pre>{`layers: {
  default: {
    base: '#f8f8f8',
    contrast: '#222222',
    mix: 3,
    next: 'panel',
  },
}
`}</pre>

    <p>The following keys are available:</p>

    <ul>
      <li><code>base</code>: The base - or background - color of the layer.</li>
      <li><code>contrast</code>: The contrast color. Used for text and to
        generate neutral tones.</li>
      <li><code>mix</code>: Amount of contrast color to mix into the base
        color. Useful when you have nested layers and want them to
        increase/decrease in lightness without picking all the right color
        codes.</li>
      <li><code>modifyContrast</code>: Integer value (positive or negative) to
        modify contrast (-100 - 100).</li>
      <li><code>next</code>: The next layer to use when a new
        <code>Layer</code> component is introduced.</li>
      <li><code>colorSpace</code>: Color space to use when mixing colors.
        Defaults to "rgb". "lab" typically works better for dark base colors.
        Available options: rgb, hsl, lab, lch, lrgb.
      </li>
      <li><code>black</code>: Absolute black color. Default is typically fine.</li>
      <li><code>white</code>: Absolute white color. Default is typically fine.</li>
    </ul>

    <Callout title="A work in progress" appearance="warning">
      I'm adding more keys as you're reading this. Aliases, inheritance,
        and layer-specific component configuration.
    </Callout>

    <h2>Accessing layer colors</h2>

    <p>You can access the layer colors using the <code>useTheme()</code> hook.</p>

    <pre>{`const Comp = () => {
  const { theme: { layer } } = useTheme();
  return <div style={{ color: layer.palette.contextual.text }}>Hi!</div>;
}
`}</pre>

    <p>Note that you have to use an up-to-date theme object if you're
      initializing a new layer!</p>
    <pre>{`const Comp = () => (
  <Layer>
    {({ theme: { layer } }) => (
      <div style={{ color: layer.palette.contextual.text }}>Hi!</div>;
    ))}
  </Layer>
);
`}</pre>
    <p>Learn more about available colors and how to use them in the next chapter.</p>
  </RunningText>
);
