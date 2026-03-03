import { useContext } from 'react';
import { ChartContext, ChartContextType } from './Chart';

const useChart = (): ChartContextType => {
  const contextValue = useContext(ChartContext);

  if (!contextValue) {
    throw Error('useChart must be used inside a Chart component');
  }

  return contextValue;
};

export default useChart;
