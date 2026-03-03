import React from 'react';
import { useParams } from 'react-router-dom';
import { Title } from '@heliconhq/core';
import { components } from '../../registered';

type Params = {
  component: string;
};

const RenderDocs = () => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
  const { component: target } = useParams<Params>();
  const Component = components.find(({ slug }) => slug === target);
  if (!Component) {
    return (
      <div>
        <h1>Not found</h1>
        <p>Use the navigation to the left to select a page.</p>
      </div>
    );
  }
  return (
    <div>
      <Title pretitle={Component.topCategory.toUpperCase()} level="h1">
        {Component.name}
      </Title>
      {Component && <Component.component />}
    </div>
  );
};

export default RenderDocs;
