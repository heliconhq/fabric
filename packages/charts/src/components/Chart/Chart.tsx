import {
  useEffect,
  PropsWithChildren,
  ReactNode,
  createContext,
  useState,
} from 'react';

import { style } from '@heliconhq/core';
import { scaleOrdinal } from '@visx/scale';
import { Margin } from '@visx/xychart';

interface Props {
  margin?: Margin;
  colorMap?: {
    [labelKey: string]: string;
  };
  mapKeyToLabel?: (key: string) => ReactNode;
}

export type ChartContextType = Pick<Props, 'mapKeyToLabel' | 'margin'> & {
  labelKeys: string[];
  availableColors: string[];
  activeColors: string[];
  getIsSeriesActive: (labelKey: string) => boolean;
  getIsSeriesDisabled: (labelKey: string) => boolean;
  getSeriesColor: ReturnType<typeof scaleOrdinal<string, string>>;
  handleLabelToggle: (labelKey: string) => void;
};

const ChartContext = createContext<ChartContextType | undefined>(undefined);

const Wrapper = style('div')({
  base: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
});

const Chart = ({
  margin,
  colorMap = {},
  mapKeyToLabel,
  children,
}: PropsWithChildren<Props>) => {
  const labelKeys = Object.keys(colorMap);
  const availableColors = Object.values(colorMap);

  const [disabledSeries, setDisabledSeries] = useState(new Set<string>());

  const getIsSeriesActive = (labelKey: string) => !disabledSeries.has(labelKey);
  const getIsSeriesDisabled = (labelKey: string) =>
    disabledSeries.has(labelKey);

  useEffect(() => {
    setDisabledSeries(new Set<string>());
  }, [colorMap]);

  const getSeriesColor = scaleOrdinal<string, string>({
    domain: labelKeys,
    range: availableColors,
  });
  const handleLabelToggle = (labelKey: string) => {
    if (disabledSeries.has(labelKey)) disabledSeries.delete(labelKey);
    else disabledSeries.add(labelKey);
    setDisabledSeries(new Set(disabledSeries));
  };

  const activeColors = labelKeys
    .filter((k) => !disabledSeries.has(k))
    .map((key) => colorMap[key]);

  return (
    <ChartContext.Provider
      value={{
        margin,
        labelKeys,
        availableColors,
        activeColors,
        getSeriesColor,
        getIsSeriesActive,
        getIsSeriesDisabled,
        handleLabelToggle,
        mapKeyToLabel,
      }}
    >
      <Wrapper>{children}</Wrapper>
    </ChartContext.Provider>
  );
};

export { Chart, ChartContext };
