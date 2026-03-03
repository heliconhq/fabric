import { ActiveTheme } from '../types/theme';

const getComponentConfig = (
  theme: ActiveTheme,
  componentName: string,
  valueName: string,
  propValue: boolean | undefined,
  defaultValue?: boolean
) => {
  if (typeof propValue !== 'undefined') {
    return propValue;
  }

  const layerConfigValue = theme?.layer?.config?.components?.[componentName]?.[
    valueName
  ] as string | undefined;
  if (typeof layerConfigValue !== 'undefined') {
    return layerConfigValue;
  }

  const configComponent = theme?.config?.components[componentName] as object;

  const configValue = configComponent?.[valueName] as string;
  if (typeof configValue !== 'undefined') {
    return configValue;
  }

  if (typeof defaultValue !== 'undefined') {
    return defaultValue;
  }

  return false;
};

export default getComponentConfig;
