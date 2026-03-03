import React, { useEffect, useState } from 'react';
import calculateProps from './usePropsPartials/functions';
import type { availableProp, extendedComponent } from './types';

export default function useProps<T>(
  component: React.ComponentType<T> | React.ComponentType
) {
  const [defaultProps, setDefaultProps] = useState(
    calculateProps(component as extendedComponent)[0]
  );
  const [availableProps, setAvailableProps] = useState<availableProp[]>(
    calculateProps(component as extendedComponent)[1]
  );
  useEffect(() => {
    if (!component) {
      return;
    }
    const [defaults, available] = calculateProps(
      component as extendedComponent
    );
    setAvailableProps(available);
    setDefaultProps(defaults);
  }, []);
  return {
    defaultProps,
    availableProps,
  };
}
