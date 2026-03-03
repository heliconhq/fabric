import React from 'react';
import { RunningText, Callout } from '@heliconhq/core';

import LayerSelect from './ColorsPartials/LayerSelect';
import ColorTones from './ColorsPartials/ColorTones';
import Neutrals from './ColorsPartials/Neutrals';
import Contextual from './ColorsPartials/Contextual';

export default () => (
  <>
    <RunningText>
      <p>Fabric supports four different color categories:</p>
      <ul>
        <li>
          <strong>Definitive</strong> colors (e.g. red, green, blue).
        </li>
        <li>
          <strong>Semantic</strong> colors (e.g. positive, negative, warning).
        </li>
        <li>
          <strong>Neutral</strong> colors (e.g. neutral-100, neutral-200).
        </li>
        <li>
          <strong>Contextual</strong> colors (e.g. border, text).
        </li>
      </ul>
      <p>
        You should primarily use <em>contextual</em> colors when building
        components. It is a mix of colors from all of the other categories, and
        the colors have been assigned names that convey some hints on where they
        should be used.
      </p>

      <h2>Definitive colors</h2>
      <p>
        Colors that are named after the actual color the variable contains. The
        color named "red" should always be a red-ish color, for example. These
        colors should be used sparingly and are often reserved for things like
        data and tags.
      </p>
      <p>
        You shouldn't have to touch these colors when creating a theme as The
        colors defined in the base theme can be used in most cases.
      </p>
      <LayerSelect>
        <ColorTones group="definitive" />
      </LayerSelect>

      <h2>Neutral tones</h2>
      <LayerSelect>
        <Neutrals />
      </LayerSelect>

      <h2>Semantic colors</h2>
      <p>
        Colors that have semantics, but can vary in actual color (e.g. a
        positive color doesn't need to be green for example).
      </p>
      <p>These are the colors you typically change in every new project.</p>
      <LayerSelect>
        <ColorTones group="semantic" />
      </LayerSelect>

      <h2>Contextual colors</h2>
      <p>
        Colors that are named based on the context in which they should be used
        (e.g. use the "border color" for borders).
      </p>
      <Callout appearance="warning" title="Warning!">
        These names are subject to change. I just got started!
      </Callout>
      <p>
        These are the colors that you'd typically use when creating components.
        If a color is missing you should primarily consider if it is a generally
        useful context and add it to Fabric. If it is a one-off you can resort
        to using the colors above.
      </p>
      <LayerSelect>
        <Contextual />
      </LayerSelect>
    </RunningText>
  </>
);
