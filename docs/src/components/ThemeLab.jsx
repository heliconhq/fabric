import React from 'react';
import styled from '@emotion/styled';

import {
  TextBlock,
  Tabs,
  Tab,
  Layer,
  Panel,
  useTheme,
} from '@heliconhq/core';

const Text = (props) => <div style={{ marginBottom: '1rem' }} {...props} />;

const NewAction = styled.button(
  ({ layer }) => ({
    background: layer.palette.contextual.action,
    color: layer.palette.contextual.actionText,
    border: 0,
    padding: '0.4rem 0.8rem',
    borderRadius: '4px',
    fontWeight: 500,
    fontSize: '0.9rem',
    '&:hover': {
      background: layer.palette.contextual.actionHover,
    },
    '&:active': {
      background: layer.palette.contextual.actionActive,
    },
  }),
);

const NewNeutrals = () => {
  const { layer } = useTheme();

  return (
    <div
      style={{
        display: 'grid',
        marginBottom: '1rem',
        gridAutoFlow: 'column',
      }}>
        {Array(15).fill(null).map((_, j) => (
          <div key={j} data-lol={100 * (j + 1)} style={{
            height: '4rem',
            background: layer.palette.neutrals[100 * (j + 1)],
          }} />
        ))}
    </div>
  );
};

const NewColorRange = () => {
  const { layer } = useTheme();

  return (
    <div style={{
      marginBottom: '0.5rem',
      color: layer.palette.contextual.text,
    }}>
      <div style={{ marginBottom: '0.5rem' }}>{layer.name}</div>
      {Object.entries(layer.palette.definitive).map(([name, values], i) => (
        <>
          <div>{name}</div>
          <div
            key={i}
            style={{
              display: 'grid',
              marginBottom: '1rem',
              gridAutoFlow: 'column',
            }}>
              {Array(13).fill(null).map((_, j) => (
                <div key={j} children={j === 6 && 'A'} style={{
                  height: '4rem',
                  background: values[100 * (j + 1)],
                  color: values.contrast,
                }} />
              ))}
          </div>
        </>
      ))}
      <div>neutrals</div>
      <NewNeutrals />
    </div>
  );
};

const RenderStuff = () => {
  const { layer } = useTheme();

  return (
    <div style={{
      marginTop: '1rem',
      padding: '1rem',
      borderRadius: '4px',
      background: layer.palette.contextual.background,
      color: layer.palette.contextual.text,
      lineHeight: '150%',
      border: layer.border
        ? `1px solid ${layer.palette.contextual.border}`
        : 'none',
    }}>
      <Text style={{
        color: layer.palette.contextual.text,
      }}>Main title here</Text>
      <Text style={{
        color: layer.palette.contextual.textMuted,
      }}>Smaller title</Text>
      <div style={{
        height: '1px',
        background: layer.palette.contextual.divider,
        margin: '0.5rem 0',
      }} />
      <Text style={{
        color: layer.palette.contextual.disabled,
      }}>Disabled</Text>
      <div>
        <div style={{
          background: layer.palette.definitive.green[200],
          color: layer.palette.definitive.green[900],
          display: 'inline-block',
          padding: '0.1rem 0.5rem',
          borderRadius: '4px',
          margin: '0.5rem',
          marginLeft: 0,
          fontWeight: 500,
          fontSize: '0.9rem',
        }}>
          A TAG
        </div>
        <div style={{
          background: layer.palette.definitive.yellow[200],
          color: layer.palette.definitive.yellow[900],
          display: 'inline-block',
          padding: '0.1rem 0.5rem',
          borderRadius: '4px',
          margin: '0.5rem',
          fontWeight: 500,
          fontSize: '0.9rem',
        }}>
          ANOTHER TAG
        </div>
        <div style={{
          background: layer.palette.definitive.red[200],
          color: layer.palette.definitive.red[900],
          display: 'inline-block',
          padding: '0.1rem 0.5rem',
          borderRadius: '4px',
          margin: '0.5rem',
          fontWeight: 500,
          fontSize: '0.9rem',
        }}>
          ANOTHER TAG
        </div>
        <div style={{
          background: layer.palette.definitive.teal[700],
          color: layer.palette.definitive.teal.contrast,
          display: 'inline-block',
          padding: '0.1rem 0.5rem',
          borderRadius: '4px',
          margin: '0.5rem',
          fontWeight: 500,
          fontSize: '0.9rem',
        }}>
          ANOTHER TAG
        </div>
        <div style={{
          background: layer.palette.definitive.blue[700],
          color: layer.palette.definitive.blue.contrast,
          display: 'inline-block',
          padding: '0.1rem 0.5rem',
          borderRadius: '4px',
          margin: '0.5rem',
          fontWeight: 500,
          fontSize: '0.9rem',
        }}>
          ANOTHER TAG
        </div>
        <div style={{
          background: layer.palette.definitive.yellow[700],
          color: layer.palette.definitive.yellow.contrast,
          display: 'inline-block',
          padding: '0.1rem 0.5rem',
          borderRadius: '4px',
          margin: '0.5rem',
          fontWeight: 500,
          fontSize: '0.9rem',
        }}>
          ANOTHER TAG
        </div>
        <div>
          <NewAction layer={layer}>This is button</NewAction>
        </div>
        <div style={{
          background: layer.palette.contextual.card,
          padding: '1rem',
          borderRadius: '4px',
          margin: '1.5rem 0',
        }}>
          This is a card. It includes info that is cool.
          <NewAction layer={layer}>This is button</NewAction>
        </div>
      </div>
    </div>
  );
};

const RenderExample = () => (
  <>
    <Layer layer="default">
      <Panel>
        <RenderStuff />
        <Panel>
          <RenderStuff />
        </Panel>
      </Panel>
      <NewColorRange />
    </Layer>
    <Layer layer="navigation">
      <Panel>
        <RenderStuff />
        <Panel>
          <RenderStuff />
        </Panel>
      </Panel>
      <NewColorRange />
    </Layer>
  </>
);

export default () => (
  <>
    <TextBlock>
      Playground where you can preview theme colors.
    </TextBlock>

    <Tabs>
      <Tab id="examples" title="Examples">
        <RenderExample />
      </Tab>
    </Tabs>
  </>);
