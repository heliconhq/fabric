import { ReactElement, useContext } from 'react';

import { Tooltip, TooltipContext } from '@visx/xychart';
import { RenderTooltipParams, TooltipProps } from '@visx/xychart/lib/components/Tooltip';

type BaseProps<T extends object> = Omit<TooltipProps<T>, 'renderTooltip'>

type Props<T extends object> = BaseProps<T> & {
  children: (params: RenderTooltipParams<T>) => ReactElement
}

function ChartTooltip<Datum extends object>({
  children,
  ...props
}: Props<Datum>) {
  const tooltipContext = useContext(TooltipContext);

  if (!tooltipContext) {
    return null;
  }

  return (
    <Tooltip<Datum>
      {...props}
      renderTooltip={children}
    />
  );
}

export default ChartTooltip;
