import React, { useState, useMemo } from 'react';
import reactElementToJSXString from 'react-element-to-jsx-string';
import styled from '@emotion/styled';

import {
  Input,
  Panel,
  Grid,
  Cell,
  Title,
  Button,
  Switch,
  Field,
  Hr,
  Select,
  useTheme,
} from '@heliconhq/core';

import { Highlight } from '@heliconhq/highlight';

import { cleanProps } from './Args';

const StyledExample = styled.div`
  margin: ${(props) => props.theme.spacing.extended} 0;

  .code pre {
    margin-bottom: 1.5rem;
    font-size: 0.9rem;
    padding: 1rem !important;
    border-radius: 0.2rem;
  }

  .display {
    min-height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .preview {
      flex: 1;
      margin-bottom: 1.5rem;
      display: flex;
      align-items: center;
      justify-content: center;

      .preview-wrapper {
        width: ${(props) => (props.wide ? '100%' : 'auto')};
      }
    }

    .code {
      flex: 0;
    }
  }
`;

const Example = ({
  children,
  controls = {},
  hideControls = false,
  wide = false,
  wideIfProp,
  previewStyle,
}) => {
  const { theme } = useTheme();
  const parsedControls = useMemo(() => (
    Object.entries(controls).reduce((acc, [key, { type, ...rest }]) => {
      if (type === 'inherit' && rest.from) {
        return {
          ...acc,
          [key]: {
            type,
            ...rest,
            inherited: cleanProps(rest.from).find(({ name }) => key === name),
          },
        };
      }
      return {
        ...acc,
        [key]: { type, ...rest },
      };
    }, {})
  ), [controls]);

  const defaultProps = Object.entries(parsedControls).reduce((acc, [key, value]) => {
    const defaultProp = typeof value?.inherited?.defaultValue?.value !== 'undefined'
      ? value.inherited.defaultValue.value
      : value.default;

    if (typeof defaultProp === 'undefined') {
      return acc;
    }

    return {
      ...acc,
      [key]: defaultProp,
    };
  }, {});

  const [props, setProps] = useState(defaultProps);
  const [showCode, setShowCode] = useState(false);
  const [layer, setLayer] = useState('panel');

  const resetControls = () => {
    setLayer('panel');
    setProps({ ...defaultProps });
  };

  const controlsui = Object.entries(parsedControls).map(([key, value]) => {
    switch (value.type) {
      case 'boolean': {
        return <Field key={key}>
          <Switch
            label={key}
            onChange={() => setProps({
              ...props,
              [key]: !props[key],
            })}
            checked={props[key]}
          />
        </Field>;
      }
      case 'text': {
        return <Field key={key} label={key}>
          <Input
            value={props[key]}
            onChange={(e) => setProps({
              ...props,
              [key]: e.target.value,
            })}
          />
        </Field>;
      }
      case 'number': {
        return <Field key={key} label={key}>
          <Input
            type="number"
            value={props[key]}
            onChange={(e) => setProps({
              ...props,
              [key]: e.target.value,
            })}
          />
        </Field>;
      }
      case 'select': {
        const options = value.options || [];

        return (
          <Field key={key} label={key}>
            <Select
              value={typeof props[key] === 'undefined'
                ? 'set-to-undefined'
                : props[key]
              }
              onChange={(e) => {
                const { [key]: _, ...rest } = props;
                if (e.target.value === 'set-to-undefined') {
                  setProps(rest);
                } else {
                  setProps({ [key]: e.target.value, ...rest });
                }
              }}
            >
              {typeof defaultProps[key] === 'undefined' && <option value="set-to-undefined">(None)</option>}
              {options.map((optionValue) => (
                <option value={optionValue} key={optionValue}>{optionValue}</option>
              ))}
            </Select>
          </Field>
        );
      }
      case 'inherit': {
        return typeof value.inherited === 'undefined'
          ? `Unable to list options for ${key}.`
          : <Field key={key} label={key}>
            <Select
              value={typeof props[key] === 'undefined'
                ? 'set-to-undefined'
                : props[key]
              }
              onChange={(e) => {
                const { [key]: _, ...rest } = props;
                if (e.target.value === 'set-to-undefined') {
                  setProps(rest);
                } else {
                  setProps({ [key]: e.target.value, ...rest });
                }
              }}
            >
              {typeof defaultProps[key] === 'undefined' && <option value="set-to-undefined">(None)</option>}
              {value.inherited.value.values.filter(({ value: optionValue }) => (optionValue))
                .map(({ value: optionValue }) => (
                  <option value={optionValue} key={optionValue}>{optionValue}</option>
                ))
              }
            </Select>
          </Field>;
      }
      default:
        return <Field key={key}>Unknown control</Field>;
    }
  });

  const opts = {
    showDefaults: false,
    showFunctions: true,
  };

  return (
    <StyledExample wide={wide || Boolean(props[wideIfProp]) === true} theme={theme}>
      <Grid columns={hideControls ? 'auto' : 'auto 18rem'}>
        <Cell>
          <Panel layer={layer}>
            <div className="display">
              <div className="preview">
                <div className="preview-wrapper" style={previewStyle}>
                  {typeof children === 'function' ? children(props) : children}
                </div>
              </div>
              <div className="code">
                {showCode
                  ? <div>
                      <Highlight
                        language="jsx"
                        code={reactElementToJSXString(typeof children === 'function' ? children(props) : children, opts)}
                      />
                      <Button
                        block
                        onClick={() => setShowCode(!showCode)}
                      >
                        &lt;/&gt; Hide code
                      </Button>
                  </div>
                  : <Button
                    block
                    onClick={() => setShowCode(!showCode)}
                  >
                    &lt;/&gt; Show code
                  </Button>
                }
              </div>
            </div>
          </Panel>
        </Cell>
        {!hideControls && (
          <Cell>
            <Panel className="controls-ui" layer="sidebar">
              <Title level="h4">Controls</Title>
              {controlsui}
              <Hr appearance="dividerFaint" />
              <Field label="Display on layer">
                <Select
                  value={layer}
                  onChange={(e) => (
                    setLayer(e.target.value)
                  )}
                >
                  {Object.keys(theme.layers).map((key) => (
                    <option value={key} key={key}>{key}</option>
                  ))}
                </Select>
              </Field>
              <div className="reset-controls">
                <Button onClick={resetControls} block>Reset controls</Button>
              </div>
            </Panel>
          </Cell>
        )}
      </Grid>
    </StyledExample>
  );
};

export default Example;
