import React from 'react';

import { useTheme } from '@heliconhq/core';

const Neutrals = () => {
  const { layer } = useTheme();

  return (
    <div
      style={{
        display: 'grid',
        gridAutoFlow: 'column',
      }}
    >
      {Object.entries(layer.palette.neutrals).map(([code, color]) => (
        <div
          key={code}
          title={`layer.palette.neutrals[${code}]`}
          style={{
            height: '4rem',
            background: color,
          }}
        />
      ))}
    </div>
  );
};

export default Neutrals;
