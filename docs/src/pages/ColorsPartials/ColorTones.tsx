import React from 'react';

import { useTheme } from '@heliconhq/core';

type Props = {
  group: 'definitive' | 'semantic';
};

const ColorTones = ({ group }: Props) => {
  const { layer } = useTheme();

  return (
    <div>
      {Object.entries(layer.palette[group]).map(([name, values]) => (
        <div key={name}>
          <div>{name}</div>
          <div
            style={{
              display: 'grid',
              marginBottom: '1rem',
              gridAutoFlow: 'column',
            }}
          >
            {Object.entries(values)
              .filter(([code]) => code !== 'contrast')
              .map(([code, color]) => (
                <div
                  key={code}
                  children={code === '700' && 'A'}
                  title={`layer.palette.${group}[${code}]`}
                  style={{
                    height: '4rem',
                    background: color,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ColorTones;
