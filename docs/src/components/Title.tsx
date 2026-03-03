import React from 'react';
import { Title, RunningText } from '@heliconhq/core';

import { Link } from 'react-router-dom';
import Example from '../docsComponents/Example/Example';

export default () => (
  <>
    <RunningText>
      <p>
        <code>Title</code> comes in a variety of sizes and you can add icons,
        buttons and more to the right side with the <code>extra</code> prop. You
        can also add a <code>preTitle</code> and a <code>subTitle</code>.
      </p>
      <p>
        <code>Title</code> is meant to be used in user interfaces. If you want
        to create headings in running text you're probably better of with{' '}
        <Link to={`/components/running-text`}>RunningText</Link>.
      </p>
    </RunningText>
    <Example<typeof Title>
      presetProps={{ text: 'The Adventures of Tom Bombadil' }}
      Component={Title}
    ></Example>
  </>
);
