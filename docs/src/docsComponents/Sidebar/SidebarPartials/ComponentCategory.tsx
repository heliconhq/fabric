import { Container, Title } from '@heliconhq/core';
import React from 'react';
import ComponentLink from './ComponentLink';

type Props = {
  name: string;
  slug: string;
  components: { name: string; topCategory: string; slug: string }[];
  topSlug: string;
  searchString: string;
};

export default function ComponentCategory({
  name,
  slug,
  components,
  topSlug,
  searchString,
}: Props) {
  const targetComps = components.filter(
    ({ topCategory }) => topCategory === topSlug
  );
  if (targetComps.length === 0) {
    return null;
  }
  return (
    <Container key={slug} margin="reduced">
      {slug !== 'unsorted' && (
        <Title level="h5" margin="compact">
          {name}
        </Title>
      )}
      <ul style={{ paddingLeft: '1.5rem' }}>
        {targetComps.map(({ name: compName, slug: compSlug }) => (
          <ComponentLink
            key={compName}
            link={`/${topSlug}/pages/${compSlug}`}
            needle={searchString}
            haystack={compName}
          ></ComponentLink>
        ))}
      </ul>
    </Container>
  );
}
