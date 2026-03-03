import React from 'react';
import { TextBlock, Metric, Text, Tooltip, Icon } from '@heliconhq/core';
import Example from '../docsComponents/Example/Example';

export default () => (
  <>
    <TextBlock>
      <code>Metric</code> is a layout component designed to display metrics. It
      is usually placed inside a container such as a <code>Panel</code> (see
      [Panel]). The metrics are specified as properties of the component and any
      additional children of the component will be displayed on the right-hand
      side.
    </TextBlock>

    <Example<typeof Metric.Header> withTitle Component={Metric.Header}>
      {(_, props) => (
        <Metric>
          <Metric.Header isPadded={props.isPadded}>
            <Text size="xsmall" appearance="textMuted">
              Value During Period
            </Text>

            <Tooltip content="Some extra content">
              <Icon icon="info" />
            </Tooltip>
          </Metric.Header>
        </Metric>
      )}
    </Example>
    <Example<typeof Metric.Value>
      presetProps={{ value: 27500.464 }}
      withTitle
      Component={Metric.Value}
    >
      {(_, props) => (
        <Metric>
          <Metric.Header>
            <Text size="xsmall" appearance="textMuted">
              Value During Period
            </Text>
          </Metric.Header>
          <Metric.Value {...props}></Metric.Value>
        </Metric>
      )}
    </Example>
  </>
);
