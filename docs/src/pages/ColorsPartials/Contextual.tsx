import React from 'react';

import { useTheme, Table, Text } from '@heliconhq/core';

const Contextual = () => {
  const { layer } = useTheme();
  return (
    <>
      <Table
        columns={[
          {
            header: 'Name',
            key: 'name',
            render: (value) => (
              <Text family="monospace">{value as string}</Text>
            ),
          },
          {
            header: 'Color',
            key: 'color',
            render: (value) => (
              <div
                style={{
                  width: '2.4rem',
                  height: '2.4rem',
                  background: value as string,
                  border: `1px solid ${layer.palette.contextual.border}`,
                }}
              />
            ),
          },
        ]}
        rows={Object.entries(layer.palette.contextual).map(([name, color]) => ({
          name: `layer.palette.contextual.${name}`,
          color,
        }))}
      />
    </>
  );
};

export default Contextual;
