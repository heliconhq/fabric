import { Container, Icon, Input, style } from '@heliconhq/core';
import React from 'react';

type Props = {
  searchString: string;
  // eslint-disable-next-line no-unused-vars
  onSearch: (value: string) => void;
};

const StyledIcon = style(Icon)({
  base: {
    position: 'absolute',
    right: '0.5rem',
    top: '50%',
    transform: 'translateY(-50%)',
  },
});

export default function FilterPages({ searchString, onSearch }: Props) {
  return (
    <Container>
      <div style={{ position: 'relative' }}>
        <Input
          block
          placeholder="Filter pages ..."
          value={searchString}
          onChange={(e) => onSearch(e.target.value)}
          style={{ paddingRight: '2.2rem' }}
        />
        {searchString && (
          <StyledIcon icon="cancel" onClick={() => onSearch('')} />
        )}
      </div>
    </Container>
  );
}
