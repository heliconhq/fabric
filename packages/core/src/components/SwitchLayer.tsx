import { ReactNode } from 'react';

import { useTheme, useLayer, LayerProvider } from '../hooks';
import { ActiveTheme, LayerValue } from '../types/theme';

type Layer = string | string[] | undefined;

type Props = {
  children?:
    | ReactNode
    | ((args: { theme: ActiveTheme; layer: LayerValue }) => ReactNode);
  layer: Layer;
};

const firstExistingLayer = (theme: ActiveTheme, layerName: Layer) => {
  if (typeof layerName === 'undefined') {
    return null;
  }

  if (Array.isArray(layerName)) {
    for (let i = 0; i < layerName.length; i += 1) {
      if (layerName[i] in theme.layers) {
        return layerName[i];
      }
    }
  }

  if (typeof layerName === 'string' && layerName in theme.layers) {
    return layerName;
  }

  return null;
};

const getNextLayer = (
  theme: ActiveTheme,
  layer: Layer,
  currentLayer: string
): string => {
  const suggestedLayer = firstExistingLayer(theme, layer);

  if (suggestedLayer !== null) {
    return suggestedLayer;
  }

  const { next } = theme.layers[currentLayer];
  if (typeof next !== 'undefined') {
    return next;
  }

  return currentLayer;
};

const SwitchLayer = ({ layer, children, ...props }: Props) => {
  const { theme } = useTheme();
  const { layer: currentLayer } = useLayer();

  const nextLayer = getNextLayer(theme, layer, currentLayer);

  return <LayerProvider children={children} layer={nextLayer} {...props} />;
};

export default SwitchLayer;
