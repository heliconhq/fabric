import React, { useState } from 'react';
import {
  App,
  Icon,
  Title,
  Panel,
  Container,
  Input,
  iconNames,
} from '@heliconhq/core';
import Example from '../docsComponents/Example/Example';

export default () => {
  const [filter, setFilter] = useState('');

  return (
    <>
      <Example presetProps={{ icon: 'ac-unit' }} Component={Icon}></Example>
      <Title>All icons</Title>
      <Container>
        <Panel>
          <Input
            block
            placeholder="Filter icons ..."
            onChange={(e) => setFilter(e.target.value)}
          />
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
            }}
          >
            {iconNames
              .filter(
                (iconName) =>
                  !filter ||
                  iconName.toLowerCase().includes(filter.toLowerCase())
              )
              .map((iconName) => (
                <div
                  key={iconName}
                  style={{
                    flex: '0 0 20%',
                    minWidth: 0,
                    textAlign: 'center',
                    padding: '1.5rem 0',
                  }}
                >
                  <Icon icon={iconName} block={false} />
                  <div
                    style={{
                      width: '100%',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                      lineHeight: '130%',
                    }}
                  >
                    {iconName}
                  </div>
                </div>
              ))}
          </div>
        </Panel>
      </Container>

      <Title>Extending or replacing icons</Title>
      <p>
        You can also override icons by supplying a dict containing
        name-component pairs via the `icons` property to the `App` component.
      </p>
      <p>
        Custom icon components should be thin wrappers around square svg objets
        that utilize `currentColor` to set the fg.
      </p>
      <App
        icons={{
          'ac-unit': () => (
            <svg viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="6" fill="currentColor" />
            </svg>
          ),
        }}
      >
        <Icon icon="ac-unit" />
      </App>
    </>
  );
};
