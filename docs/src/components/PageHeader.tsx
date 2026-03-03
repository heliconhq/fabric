import React from 'react';
import {
  App,
  Page,
  PageHeader,
  TextBlock,
  Title,
  Button,
  useTheme,
} from '@heliconhq/core';
import Example from '../docsComponents/Example/Example';

export default () => {
  const { theme } = useTheme();

  return (
    <>
      <TextBlock>A page header.</TextBlock>
      <Example Component={PageHeader} wide>
        {() => (
          <App themeName={theme.name}>
            <Page>
              <PageHeader>
                <Title
                  level="h1"
                  extra={<Button onClick={() => {}}>Extra</Button>}
                  pretitle="Testar"
                >
                  Extra content here
                </Title>
              </PageHeader>
            </Page>
          </App>
        )}
      </Example>
    </>
  );
};
