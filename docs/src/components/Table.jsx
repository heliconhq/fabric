import React from 'react';
import {
  Table,
  TableRow,
  TableBody,
  TableHead,
  TableHeader,
  TableCell,
  TextBlock,
} from '@heliconhq/core';

import Example from '../Example';
import Args from '../Args';

export default () => (
  <>
    <TextBlock>
      Super table!
    </TextBlock>
    <Example
      wide
      controls={{
        spacing: { type: 'inherit', from: Table },
        hideHeader: { type: 'boolean', default: false },
      }}
    >
      {(props) => (
        <Table
          columns={[
            { key: 'name', header: 'Name' },
            { key: 'age', header: 'Age' },
            {
              key: 'married',
              header: 'Married',
              align: 'right',
              render: (value) => (value ? 'Yes' : 'No'),
            },
          ]}
          rows={[
            { name: 'Sam', age: 38, married: true },
            { name: 'Bilbo', age: 129, married: false },
            { name: 'Gandalf', age: 24000, married: false },
          ]}
          {...props}
        />
      )}
    </Example>

    <TextBlock>
      The <code>Table</code>-component is built on top of several small
      components (<code>TableHead</code>, <code>TableHeader</code>,
      <code>TableBody</code>, <code>TableRow</code>, <code>TableCell</code>).
      You can use these components individually to create a custom table:
    </TextBlock>

    <Example wide hideControls>
      {(props) => (
        <Table {...props}>
          <TableHead>
            <TableRow>
              <TableHeader>Name</TableHeader>
              <TableHeader>Age</TableHeader>
              <TableHeader align="right">Married</TableHeader>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Sam</TableCell>
              <TableCell>38</TableCell>
              <TableCell align="right">Yes</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      )}
    </Example>

    <Args component={Table} />
  </>
);
