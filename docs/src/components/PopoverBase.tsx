import React, { useState } from 'react';
import {
  Icon,
  PopoverBase,
  Button,
  Panel,
  TextBlock,
  RunningText,
} from '@heliconhq/core';
import styled from '@emotion/styled';
import Example from '../docsComponents/Example/Example';

export default () => {
  const [menu, setMenu] = useState(false);
  const [tooltip, setTooltip] = useState(false);

  const ClickActuator = (
    <Button
      onClick={() => setMenu(!menu)}
      active={menu}
      icon="more-horiz"
      slim
    />
  );

  const HoverActuator = (
    <div
      onMouseEnter={() => setTooltip(true)}
      onMouseLeave={() => setTooltip(false)}
    >
      <Icon icon="add" />
    </div>
  );

  const PopWrapper = styled.div`
    display: flex;
  `;

  const PopElements = styled.div`
    margin-right: 16px;

    &:last-child {
      margin-right: 0;
    }
  `;

  return (
    <>
      <RunningText>
        <p>
          This component is a Popover that can be used to display additional
          information or actions in response to user interaction with a specific
          element. It contains two main parts - the "actuator" (the element that
          triggers the popover), and the "content" (the actual content of the
          popover).
        </p>
        <p>
          The component is usable in its current state, but we are yet to finish
          a couple of features:
        </p>
        <ul>
          <li>Detect overflow and position accordingly</li>
        </ul>
      </RunningText>
      <Example
        overrideControls={{
          actuator: 'hidden',
          contentProps: 'hidden',
          visible: 'hidden',
        }}
        Component={PopoverBase}
      >
        {(_, props) => (
          <PopWrapper>
            <PopElements>
              <PopoverBase
                {...props}
                visible={tooltip}
                actuator={HoverActuator}
              >
                <Panel elevated padding="reduced">
                  <TextBlock>This is a popover text.</TextBlock>
                </Panel>
              </PopoverBase>
            </PopElements>
            <PopElements>
              <PopoverBase
                {...props}
                visible={menu}
                actuator={ClickActuator}
                onClose={() => setMenu(false)}
              >
                <Panel elevated padding="reduced">
                  <TextBlock margin="maximum">Hi there!</TextBlock>
                </Panel>
              </PopoverBase>
            </PopElements>
          </PopWrapper>
        )}
      </Example>
    </>
  );
};
