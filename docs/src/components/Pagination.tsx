import React, { useState } from 'react';
import { Pagination, TextBlock } from '@heliconhq/core';
import Example from '../docsComponents/Example/Example';

export default () => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <>
      <TextBlock>
        <p>
          <code>Pagination</code> displays a set of page links for navigating
          between a list of items that are divided into multiple pages.
        </p>
      </TextBlock>
      <Example
        controlProps={{
          currentPage,
          onPageChange: (pagestate) => setCurrentPage(pagestate.pageNumber),
        }}
        presetProps={{ perPage: 1, totalItems: 10 }}
        Component={Pagination}
      ></Example>
    </>
  );
};
