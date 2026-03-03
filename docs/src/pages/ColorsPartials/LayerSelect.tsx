import React, { useState } from 'react';
import { Pane, Select, useTheme, Text, Panel } from '@heliconhq/core';
import type { ActiveTheme } from '@heliconhq/core/dist/types/theme';

const getDefaultLayer = (theme: ActiveTheme) => {
  const layerName =
    Object.keys(theme.layers).find((panel) => panel === 'panel') ||
    Object.keys(theme.layers)[0];

  return layerName;
};

const LayerSelect = ({
  children,
}: {
  children: React.ReactElement<{ layer?: string }>;
}) => {
  const { theme } = useTheme();
  const [layer, setLayer] = useState<string>(getDefaultLayer(theme));
  const options = Object.keys(theme.layers).map((key) => ({
    value: key,
    label: key,
  }));

  if (layer === null) {
    return null;
  }

  return (
    <div>
      <Pane>
        <Text weight="bold">Layer to display colors on:</Text>
        <Select
          options={options}
          value={layer}
          onChange={(e) => setLayer(e.target.value)}
        />
      </Pane>
      <Panel layer={layer}>{children}</Panel>
    </div>
  );
};

export default LayerSelect;
