import React from 'react';
import { App, Page, PageContent, TextBlock, useTheme } from '@heliconhq/core';
import Example from '../docsComponents/Example/Example';

export default () => {
  const { theme } = useTheme();

  return (
    <>
      <TextBlock>See Page.</TextBlock>
      <Example wide Component={PageContent}>
        {(_, props) => (
          <App themeName={theme.name}>
            <Page>
              <PageContent expand={props.expand ?? false}>
                Some text content here.
              </PageContent>
            </Page>
          </App>
        )}
      </Example>
    </>
  );
};
