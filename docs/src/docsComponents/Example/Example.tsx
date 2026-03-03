import {
  Button,
  Cell,
  Field,
  Grid,
  Hr,
  Panel,
  Select,
  Title,
  useTheme,
} from '@heliconhq/core';
import React, { ComponentProps, ReactNode, useEffect, useState } from 'react';
import { Highlight } from '@heliconhq/highlight';
import reactElementToJSXString from 'react-element-to-jsx-string';
import { availableProp, kinds } from '../../hooks/useProps/types';
import StyledExample from './ExamplePartials/ExampleBase';
import useProps from '../../hooks/useProps/useProps';
import Control from './ExamplePartials/Control';
import Args from './ExamplePartials/Args';
import PreviewWrapper from './ExamplePartials/PreviewWrapper';
import Settings from './ExamplePartials/Settings';

type Prettify<T> = {
  [K in keyof T]: T[K];
} & {};

type Props<T extends React.ComponentType<React.ComponentProps<T>>> = {
  hideControls?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Component: T & {
    ___types?: { name?: { name?: string } };
    children?: ReactNode;
  };
  presetProps?: Prettify<Partial<React.ComponentProps<T>>>;
  /* These props will overwrite when changed */
  controlProps?: Prettify<Partial<React.ComponentProps<T>>>;
  previewStyle?: React.CSSProperties;
  wide?: boolean;
  withTitle?: boolean;
  wideIfProp?: boolean;
  overrideControls?: { [key: string]: kinds };
  children?: (
    Component: React.JSX.Element,
    props: Partial<React.ComponentProps<T>>
  ) => React.ReactElement;
};

export default function Example<
  T extends React.ComponentType<React.ComponentProps<T>>
>({
  hideControls,
  Component,
  previewStyle,
  presetProps,
  controlProps,
  wide,
  children,
  withTitle,
  overrideControls,
}: Props<T>) {
  const { theme } = useTheme();
  const [layer, setLayer] = useState('panel');
  const [showCode, setShowCode] = useState(false);
  const { defaultProps, availableProps } = useProps(Component);
  const [outline, setOutline] = useState(false);
  const [currentProps, setCurrentProps] = useState({
    ...defaultProps,
    ...presetProps,
    ...controlProps,
  });
  const resetControls = () => {
    setCurrentProps({ ...defaultProps, ...presetProps, ...controlProps });
  };
  useEffect(() => {
    setCurrentProps({ ...currentProps, ...controlProps });
  }, [controlProps]);
  const name =
    Component.displayName || Component?.___types?.name?.name || 'unknown name';
  let ctrl = JSON.parse(JSON.stringify(availableProps)) as availableProp[];
  if (overrideControls) {
    ctrl = ctrl.map((prop) => {
      Object.entries(overrideControls).forEach(([key, value]) => {
        if (key === prop.propName) {
          // eslint-disable-next-line no-param-reassign
          prop.kind = value;
        }
      });
      return prop;
    });
  }
  const cProps = currentProps as React.JSX.IntrinsicAttributes &
    React.JSX.LibraryManagedAttributes<
      T & {
        ___types?:
          | { name?: { name?: string | undefined } | undefined }
          | undefined;
        children?: ReactNode;
      },
      ComponentProps<T>
    >;

  return (
    <>
      <StyledExample wide={!!wide} theme={theme}>
        {withTitle && (
          <Title margin="compact" level="h4">
            {name}
          </Title>
        )}
        <Grid columns={hideControls ? 'auto' : 'auto 18rem'}>
          <Cell width={''} height={''}>
            <Panel layer={layer}>
              <div className="display">
                <Settings outline={outline} setOutline={setOutline} />
                <div className="preview">
                  <PreviewWrapper
                    outline={outline}
                    className="preview-wrapper"
                    style={previewStyle}
                    wide={!!wide}
                  >
                    {children ? (
                      children(<Component {...cProps} />, currentProps)
                    ) : (
                      <Component {...cProps} />
                    )}
                  </PreviewWrapper>
                </div>
                <div className="code">
                  {showCode ? (
                    <div>
                      <Highlight
                        language="jsx"
                        code={reactElementToJSXString(
                          children ? (
                            children(<Component {...cProps} />, currentProps)
                          ) : (
                            <Component {...cProps} />
                          ),
                          {
                            filterProps: (value) => value !== undefined,
                          }
                        )}
                      />
                      <Button block onClick={() => setShowCode(!showCode)}>
                        &lt;/&gt; Hide code
                      </Button>
                    </div>
                  ) : (
                    <Button block onClick={() => setShowCode(!showCode)}>
                      &lt;/&gt; Show code
                    </Button>
                  )}
                </div>
              </div>
            </Panel>
          </Cell>
          {!hideControls && (
            <Cell width={''} height={''}>
              <Panel layer="sidebar">
                <p style={{ fontSize: '.8rem' }}>{name}</p>
                <Title level="h4">Controls</Title>
                {ctrl.map((prop) => (
                  <Control
                    key={prop.propName}
                    defaultProps={{ ...defaultProps, ...presetProps }}
                    prop={prop}
                    currentProps={currentProps}
                    controlProps={controlProps}
                    setProps={setCurrentProps}
                  />
                ))}
                <Hr />
                <Field label="Display on layer">
                  <Select
                    value={layer}
                    onChange={(e) => setLayer(e.target.value)}
                  >
                    {Object.keys(theme.layers).map((key) => (
                      <option value={key} key={key}>
                        {key}
                      </option>
                    ))}
                  </Select>
                </Field>
                <div className="reset-controls">
                  <Button onClick={resetControls} block>
                    Reset controls
                  </Button>
                </div>
              </Panel>
            </Cell>
          )}
        </Grid>
      </StyledExample>
      <Args defaultProps={defaultProps} availableProps={availableProps} />
    </>
  );
}
