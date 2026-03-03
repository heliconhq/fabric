import {
  ArrayFieldTemplateItemType,
  FormContextType,
  RJSFSchema,
  StrictRJSFSchema,
} from '@rjsf/utils';

import {
  Panel,
  Grid,
  Cell,
  Container,
} from '@heliconhq/core';

function ArrayFieldItemTemplate<
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any
>(props: ArrayFieldTemplateItemType<T, S, F>) {
  const {
    children,
    // className,
    disabled,
    hasToolbar,
    hasMoveDown,
    hasMoveUp,
    hasRemove,
    index,
    onDropIndexClick,
    onReorderClick,
    readonly,
    registry,
    uiSchema,
  } = props;
  const { MoveDownButton, MoveUpButton, RemoveButton } = registry.templates.ButtonTemplates;
  return (
    <Container margin="reduced">
      <Panel padding="reduced">
        <Grid columns={12} align="start">
          <Cell width={hasToolbar ? 10 : 12}>{children}</Cell>
          {hasToolbar && (
            <Cell width={2}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'end',
                }}
              >
                {(hasMoveUp || hasMoveDown) && (
                  <MoveUpButton
                    disabled={disabled || readonly || !hasMoveUp}
                    onClick={onReorderClick(index, index - 1)}
                    uiSchema={uiSchema}
                    registry={registry}
                  />
                )}
                {(hasMoveUp || hasMoveDown) && (
                  <MoveDownButton
                    disabled={disabled || readonly || !hasMoveDown}
                    onClick={onReorderClick(index, index + 1)}
                    uiSchema={uiSchema}
                    registry={registry}
                  />
                )}
                {hasRemove && (
                  <RemoveButton
                    disabled={disabled || readonly}
                    onClick={onDropIndexClick(index)}
                    uiSchema={uiSchema}
                    registry={registry}
                  />
                )}
              </div>
            </Cell>
          )}
        </Grid>
      </Panel>
    </Container>
  );
}

export default ArrayFieldItemTemplate;
