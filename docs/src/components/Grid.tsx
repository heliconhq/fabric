import React from 'react';
import { TextBlock, Grid, Cell, Panel } from '@heliconhq/core';
import Example from '../docsComponents/Example/Example';

export default () => (
  <>
    <TextBlock>
      <code>Grids</code> are used as wrappers around <code>Cells</code> that are
      laid out -- either horizontally or vertically -- with some measure of
      distance between them.
      <code>Grids</code> are based on the template system in [css grids]. The{' '}
      <code>Grid</code> component by itself creates a set of "virtual columns"
      (defaults to <code>12</code>). The virtual columns are then used by{' '}
      <code>Cells</code> to calculate dimensions and positions. The example{' '}
      <code>Grid</code> below is divided into <code>12</code> virtual columns
      and each <code>Cell</code> is set to span <code>4</code> of the columns.
      <br />
      <br />
      Offset
      <code>Cells</code> can be positioned within the grid using the{' '}
      <code>left</code> and <code>top</code> offset props. A <code>left</code>{' '}
      prop of <code>4</code> means that the <code>Cell</code> should be offset
      with a distance equal to four virtual columns from the left.
      <br />
      <br />
      <code>Cells</code> can also be given <code>width</code> and{' '}
      <code>height</code> props. A <code>width</code> prop of <code>4</code>
      means that the <code>Cell</code> width is equal to four virtual columns.
      <br />
      <br />
      Alignment The cells are aligned according to the value specified as the{' '}
      <code>align</code> prop. The default mode is to <code>stretch</code> the
      cells.
      <br />
      <br />
      <code>Grids</code> can be transposed using the <code>vertical</code> prop.
      You can omit the <code>columns</code>
      prop on the <code>Grid</code> and <code>width</code>/<code>height</code>{' '}
      on the <code>Cells</code> to achieve natural sizing in vertical layouts.
    </TextBlock>
    <Example overrideControls={{ columns: 'number' }} wide Component={Grid}>
      {(_, props) => (
        <Grid {...props}>
          <Cell {...{ [props.vertical ? 'height' : 'width']: 4 }}>
            <Panel>First panel</Panel>
          </Cell>
          <Cell {...{ [props.vertical ? 'height' : 'width']: 4 }}>
            <Panel>
              Second panel
              <br />
              With extra content!
            </Panel>
          </Cell>
          <Cell {...{ [props.vertical ? 'height' : 'width']: 4 }}>
            <Panel>Third panel</Panel>
          </Cell>
        </Grid>
      )}
    </Example>
  </>
);
