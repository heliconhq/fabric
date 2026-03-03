import { forwardRef, MouseEvent } from 'react';
import style from '../../../utils/style';
import SelectedValue from './ScrubberPartials/SelectedValue';
import IndicatorValue from './ScrubberPartials/IndicatorValue';

const valueWidth = 20;

const ScrollArea = style('div')({
  base: {
    overflow: 'hidden',
    scrollSnapType: 'x',
    cursor: 'grab',
    margin: '0 1rem',
  },
});

const ScrubberContainer = style('div')<{ width: number; valueWidth: number }>({
  base: ({ width }) => ({
    pointerEvents: 'none',
    userSelect: 'none',
    boxSizing: 'content-box',
    width: `${width}px`,
    padding: `50px calc(50% - ${valueWidth / 2}px) 0`,
    display: 'grid',
    gridAutoFlow: 'column',
  }),
});

type Props = {
  onMouseDown: (e: MouseEvent<HTMLDivElement>) => void;
  onMouseUp: (e: MouseEvent<HTMLDivElement>) => void;
  onMouseMove: (e: MouseEvent<HTMLDivElement>) => void;
  values: {
    incrementValue: number;
    marker: boolean;
    repr: string;
  }[];
  value?: number;
};

const Scrubber = forwardRef<HTMLDivElement, Props>(
  ({ onMouseDown, onMouseUp, onMouseMove, values, value }, ref) => {
    const width = values.length * valueWidth;
    return (
      <ScrollArea
        className="scroll-area"
        ref={ref}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseUp}
        onMouseOut={onMouseUp}
      >
        <SelectedValue className="selected-value">
          {value !== undefined ? values[value]?.repr : '-'}
        </SelectedValue>
        <ScrubberContainer
          valueWidth={valueWidth}
          width={width}
          className="scrubber"
        >
          {values.map(({ repr, marker }, i) => (
            <IndicatorValue
              label={repr}
              valueWidth={valueWidth}
              key={i + repr}
              withLabel={marker}
            ></IndicatorValue>
          ))}
        </ScrubberContainer>
      </ScrollArea>
    );
  }
);

export default Scrubber;
